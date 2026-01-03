import { DOMParser } from '@xmldom/xmldom';
import getJsonBookByName from '../../src/lib/getJsonBookByName.ts';
import getJsonWorkByName from '../../src/lib/getJsonWorkByName.ts';
import type {
  VerseDataFileShape,
  VerseShape,
} from '../../src/types/data-shapes.ts';

main().catch(console.error);
async function main() {
  const start = Date.now();
  const verses: VerseShape[] = [];

  const work = getJsonWorkByName('Didache');
  if (!work) {
    throw new Error('Unable to find "Didache" in our works list');
  }
  const url = 'https://www.pseudepigrapha.com/LostBooks/didache.html';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch didache: HTTP ${res.status}`);
  }
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const titles = Array.from(doc.getElementsByTagName('b')).map((b) => {
    const title = b.textContent;
    b.textContent = '----';
    return title.trim().replace(/\s+/g, ' ');
  });
  Array.from(doc.getElementsByTagName('CENTER')).forEach((c) => {
    c.parentNode!.removeChild(c);
  });
  const allText = doc.getElementsByTagName('body')[0].textContent;
  const textSections = allText
    .split('----')
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => t.replace(/\s+/g, ' '));

  const book = getJsonBookByName('Did');
  if (!book) {
    throw new Error(`Unable to find the "Did" in our books list`);
  }
  const workOsisID = work.workOsisID;
  const bookOsisID = book.bookOsisID;
  for (let i = 0, len = textSections.length; i < len; i++) {
    if (!titles[i]) {
      throw new Error(`Unable to find a title for Chapter ${i}`);
    }
    const chapterNumber = i + 1;
    const verseNumber = 1;
    const chapterTitle = titles[i];
    const chapterOsisID = `Did.${i + 1}`;
    const verseOsisID = `Did.${i + 1}.1`;
    const verseText = textSections[i];
    const verseLanguage = 'en';
    const verseSequence = i + 1;
    verses.push({
      workOsisID,
      bookOsisID,
      chapterTitle,
      chapterNumber,
      chapterOsisID,
      verseNumber,
      verseOsisID,
      verseText,
      verseLanguage,
      verseSequence,
    });
  }

  const data: VerseDataFileShape = {
    compiledAt: new Date().toISOString().slice(0, 10),
    sources: [url],
    verses,
  };
  await Bun.file(`${import.meta.dir}/../../data/verses/Didache.json`).write(
    JSON.stringify(data, null, 2),
  );
  console.log(
    `Wrote ${verses.length} Didache verses to data/verses/Didache.json`,
  );
  console.log(`Took ${Date.now() - start}ms`);
}
