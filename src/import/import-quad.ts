import process from 'node:process';
import getBookByName from '~/lib/getBookByName.ts';
import getWorkByName from '~/lib/getWorkByName.ts';

main().catch(console.error);

const saveTo = `${import.meta.dir}/../../data/verses`;

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
  chapterTitle: string;
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
  const verses = JSON.parse(fixed) as unknown as RemoteData[];
  console.log(`Downloaded ${verses.length} verses`);

  let verseSequence = -1;
  let lastWorkTitle = '';
  let workOsisID = '';
  const data: OurData[] = [];
  for (const verse of verses) {
    const ourTitle =
      verse.volume_long_title === 'The Old Testament' ||
      verse.volume_long_title === 'The New Testament'
        ? 'Bible'
        : verse.volume_long_title;
    const work = getWorkByName(ourTitle);
    if (!work) {
      console.log(`Unknown Work "${ourTitle}"`);
      process.exit(1);
    }
    if (work.workTitle !== lastWorkTitle) {
      if (lastWorkTitle) {
        console.log(`Writing ${data.length} items to ${workOsisID}...`);
        await writeJson(workOsisID, data);
        data.length = 0;
      }
      verseSequence = 1;
      console.log(`Starting ${work.workOsisID}...`);
    }
    workOsisID = work.workOsisID;
    lastWorkTitle = work.workTitle;
    const book = getBookByName(verse.book_title);
    if (!book) {
      console.log(`Unknown Book "${verse.book_title}"`);
      process.exit(1);
    }

    const bookOsisID = book.bookOsisID;
    const bookGroups = book.groups;
    const chapterNumber = parseInt(verse.chapter_number, 10);
    const chapterTitle = `${book.chapterLabel} ${chapterNumber}`;
    const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
    const verseNumber = parseInt(verse.verse_number, 10);
    const verseOsisID = `${bookOsisID}.${chapterNumber}.${verseNumber}`;
    const verseText = verse.scripture_text;
    const verseLanguage = 'en';
    data.push({
      workOsisID,
      bookOsisID,
      bookGroups,
      chapterTitle,
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
  await writeJson(workOsisID, data);
  console.log('Done writing data to ../data/verses/*.json');
  console.log(`Took ${Date.now() - start}ms`);
}

async function writeJson(workOsisID: string, data: OurData[]) {
  const writeTo = `${saveTo}/${workOsisID}.json`;
  await Bun.file(writeTo).write(JSON.stringify(data, null, 2));
  console.log(`Wrote ${workOsisID} to ${workOsisID}.json`);
}
