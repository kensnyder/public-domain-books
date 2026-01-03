import JSZip from 'jszip';
import getJsonBookByName from '../../src/lib/getJsonBookByName.ts';
import getJsonWorkByName from '../../src/lib/getJsonWorkByName.ts';
import type { BookShape, VerseShape } from '../../src/types/data-shapes.ts';

main().then(console.error);

async function main() {
  const zipUrl = 'https://sacred-texts.com/bib/osrc/apodat.zip';
  console.log(`Fetching data ${zipUrl}`);
  const text = await fetchText(zipUrl);
  console.log(`Got ${text.length.toLocaleString()} bytes`);
  const lines = text.split('\n').filter(Boolean);
  console.log('First 4 lines:', lines.slice(0, 4).join('\n'));
  const verses: VerseShape[] = [];
  const books = new Set<BookShape>();
  for (const line of lines) {
    if (line.trim() === '') {
      continue;
    }
    const [name, ch, v, verseText] = line.split('|');
    const chapterNumber = parseInt(ch, 10);
    const verseNumber = parseInt(v, 10);
    const chapterTitle =
      chapterNumber === 0 ? 'Prologue' : `Chapter ${chapterNumber}`;
    const book = getJsonBookByName(name);
    if (!book) {
      throw new Error(`Book ${name} not found!`);
    }
    books.add(book);
    const bookOsisID = book.bookOsisID;
    verses.push({
      workOsisID: 'KJVA',
      bookOsisID,
      chapterTitle,
      chapterNumber,
      chapterOsisID: `${bookOsisID}.${chapterNumber}`,
      verseNumber,
      verseOsisID: `${bookOsisID}.${chapterNumber}.${verseNumber}`,
      verseText,
      verseLanguage: 'en',
      verseSequence: verses.length + 1,
    });
  }
  const ymd = new Date().toISOString().slice(0, 10);

  const work = getJsonWorkByName('KJVA');
  if (!work) {
    throw new Error(`Unable to find work "KJVA" in our work list`);
  }
  const data = {
    compiledAt: ymd,
    sources: [zipUrl],
    verses,
  };
  const writeTo = `${import.meta.dir}/../../data/verses/KJVA.json`;
  await Bun.file(writeTo).write(JSON.stringify(data, null, 2));
  console.log(`Wrote KJVA to KJVA.json`);
}

async function fetchText(url: string): Promise<string> {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Failed to fetch file: ${resp.statusText}`);
  }
  const zipped = await resp.arrayBuffer();
  const zip = await JSZip.loadAsync(zipped);
  const file = zip.file('apodat.txt');
  if (!file) {
    // entry not found
    throw new Error('File "apodat.txt" not found in the zip archive');
  }

  return file.async('string');
}
