import process from 'node:process';
import { DOMParser } from '@xmldom/xmldom';
import getJsonBookByName from '../../src/lib/getJsonBookByName.ts';
import getWorkByName from '../../src/tools/getWorkByName/getWorkByName.ts';
import type {
  BookShape,
  VerseDataFileShape,
  VerseShape,
} from '../../src/types/data-shapes.ts';

const urls = {
  '1Clem': 'https://ccel.org/ccel/lightfoot/fathers/fathers.ii.i.html',
  '2Clem': 'https://ccel.org/ccel/lightfoot/fathers/fathers.ii.ii.html',
  IgnEph: 'https://ccel.org/ccel/lightfoot/fathers/fathers.ii.iii.html',
  IgnMagn: 'https://ccel.org/ccel/lightfoot/fathers/fathers.ii.iv.html',
};

main().catch(console.error);
async function main() {
  const verses: VerseShape[] = [];
  const workOsisID = 'Fathers';
  let verseSequence = 0;
  const bookList: BookShape[] = [];
  for (const [bookOsisID, url] of Object.entries(urls)) {
    const start = Date.now();
    const res = await fetch(url);
    if (res.ok) {
      throw new Error(`Failed to fetch ${bookOsisID}: HTTP ${res.status}`);
    }
    const book = getJsonBookByName(bookOsisID);
    if (!book) {
      throw new Error(`Unknown book name: ${bookOsisID}`);
    }
    bookList.push(book);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const content = Array.from(doc.getElementsByClassName('book-content'));
    if (content.length === 0) {
      throw new Error(`No content found for book: ${bookOsisID}`);
    }
    process.stdout.write(`Importing ${bookOsisID}...`);
    let bookTitle = '';
    let chapterNumber = 0;
    let verseNumber = 1;
    Array.from(content[0].children).forEach((node) => {
      const text = node.textContent.trim();
      if (node.nodeName.toLowerCase() === 'h2' && !bookTitle) {
        bookTitle = text;
      } else if (node.nodeName.toLowerCase() === 'h2') {
        verseNumber = 1;
        chapterNumber++;
      } else {
        verseSequence++;
        verses.push({
          workOsisID,
          bookOsisID,
          bookGroups: ['Apostolic Fathers', 'Apocrypha'],
          chapterTitle:
            chapterNumber === 0 ? 'Prologue' : `Chapter ${chapterNumber}`,
          chapterNumber,
          chapterOsisID: `${bookOsisID}.${chapterNumber}`,
          verseNumber,
          verseOsisID: `${bookOsisID}.${chapterNumber}.${verseNumber}`,
          verseText: text,
          verseLanguage: 'en',
          verseSequence,
        });
        verseNumber++;
      }
    });
    console.log(`DONE in ${Date.now() - start}ms`);
  }

  const data: VerseDataFileShape = {
    work: getWorkByName('Fathers'),
    compiledAt: new Date().toISOString().slice(0, 10),
    sources: Object.values(urls),
    books: bookList,
    verses,
  };

  await Bun.file(`${import.meta.dir}/../../data/verses/Fathers.json`).write(
    JSON.stringify(data, null, 2),
  );
  console.log(
    `Wrote ${verses.length} Didache verses to data/verses/Fathers.json`,
  );
}
