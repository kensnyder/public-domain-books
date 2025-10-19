import metadata from '../../data/books/books.json' with { type: 'json' };

main().catch(console.error);

// biome-ignore format: be compact
const works = {
  'The Old Testament': { file: `${import.meta.dir}/../../data/verses/old-testament.json`, workOsisID: "kjv", workName: 'Bible', data: [] as OurData[] },
  'The New Testament': { file: `${import.meta.dir}/../../data/verses/new-testament.json`, workOsisID: "kjv", workName: 'Bible', data: [] as OurData[] },
  'The Doctrine and Covenants': { file: `${import.meta.dir}/../../data/verses/d-and-c.json`, workOsisID: "D&C", workName: 'Doctrine & Covenants', data: [] as OurData[] },
  'The Book of Mormon': { file: `${import.meta.dir}/../../data/verses/bom.json`, workOsisID: "BofM", workName: 'Book of Mormon', data: [] as OurData[] },
  'The Pearl of Great Price': { file: `${import.meta.dir}/../../data/verses/pgp.json`, workOsisID: "PGP", workName: 'Pearl of Great Price', data: [] as OurData[] },
};

const ymd = new Date().toISOString().slice(0, 10);

type RemoteData = {
  volume_long_title: string;
  chapter_number: string;
  verse_number: string;
  book_title: string;
  scripture_text: string;
};

type OurData = {
  workOsisID: string;
  bookOsisID: string;
  bookGroups: string[];
  chapterNumber: number;
  chapterOsisID: string;
  verseNumber: number;
  verseOsisID: string;
  verseText: string;
  verseLanguage: string;
  verseSequence: number;
  importDate: string;
};

async function main() {
  const start = Date.now();
  console.log('Fetching data from GitHub');
  const res = await fetch(
    'https://raw.githubusercontent.com/mormon-documentation-project/lds-scriptures/8c9ae85b3363d7154aa96b6cde24de0b2ef8b1f1/lds-scriptures.json',
  );
  if (!res.ok) {
    console.error(res);
    return;
  }
  const text = await res.text();
  const fixed = text.replace(/\\\\"/g, '\\"');
  let verses = JSON.parse(fixed) as unknown as RemoteData[];
  verses = verses.filter(
    (v) => v.volume_long_title === 'The Pearl of Great Price',
  );

  let verseSequence = -1;
  let lastWork = '';
  for (const verse of verses) {
    const workLongTitle = verse.volume_long_title;
    if (!(workLongTitle in works)) {
      console.log(`Unknown Work "${workLongTitle}"`);
      process.exit(1);
    }
    const work = works[workLongTitle as keyof typeof works];
    if (workLongTitle !== lastWork) {
      if (lastWork) {
        verseSequence = 1;
        // @ts-expect-error We know works[lastWork] will always be an object
        await writeJson(lastWork, works[lastWork]);
      }
      console.log(`Starting ${workLongTitle}...`);
    }
    lastWork = workLongTitle;
    const workOsisID = work.workOsisID;
    const book = lookupBook(verse.book_title) as (typeof metadata)[number];
    const bookOsisID = book.osisID;
    const bookGroups = book.groups;
    const chapterNumber = parseInt(verse.chapter_number, 10);
    const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
    const verseNumber = parseInt(verse.verse_number, 10);
    const verseOsisID = `${bookOsisID}.${chapterNumber}.${verseNumber}`;
    const verseText = verse.scripture_text;
    const verseLanguage = 'en';
    work.data.push({
      workOsisID,
      bookOsisID,
      bookGroups,
      chapterNumber,
      chapterOsisID,
      verseNumber,
      verseOsisID,
      verseText,
      verseLanguage,
      verseSequence,
      importDate: ymd,
    });

    verseSequence++;
  }
  // @ts-expect-error We know works[lastWork] will always be an object
  await writeJson(lastWork, works[lastWork]);
  console.log('Done writing data to ../data/verses/*.json');
  console.log(`Took ${Date.now() - start}ms`);
}

const bookOsisCache = new Map<string, (typeof metadata)[number]>();

function lookupBook(bookTitle: string) {
  if (bookOsisCache.has(bookTitle)) {
    return bookOsisCache.get(bookTitle);
  } else {
    for (const book of metadata) {
      if (book.name === bookTitle || book.aliases.includes(bookTitle)) {
        bookOsisCache.set(bookTitle, book);
        return book;
      }
    }
    console.log(`Unknown book title: ${bookTitle}`);
    process.exit(1);
  }
}

async function writeJson(
  name: string,
  finishedWork: (typeof works)[keyof typeof works],
) {
  await Bun.file(finishedWork.file).write(
    JSON.stringify(finishedWork.data, null, 2),
  );
  console.log(`Wrote ${name} to ${finishedWork.file.split('/').pop()}`);
}
