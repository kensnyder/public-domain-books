import { DOMParser } from '@xmldom/xmldom';
import JSZip from 'jszip';
import books from '../../data/books/books.json' with { type: 'json' };

const ymd = new Date().toISOString().slice(0, 10);

const ourData: OurData[] = [];
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

main().catch(console.error);
async function main() {
  const start = Date.now();

  const html = await fetchText(
    'https://www.gutenberg.org/cache/epub/8330/pg8330-h.zip',
  );
  const doc = new DOMParser().parseFromString(html, 'text/html');
  // const titles = Array.from(doc.getElementsByTagName('b')).map((b) => {
  //   const title = b.textContent;
  //   b.textContent = '----';
  //   return title.trim().replace(/\s+/g, ' ');
  // });
  // Array.from(doc.getElementsByTagName('CENTER')).forEach((c) =>
  //   c.parentNode!.removeChild(c),
  // );
  // const allText = doc.getElementsByTagName('body')[0].textContent;
  // const verses = allText
  //   .split('----')
  //   .map((t) => t.trim())
  //   .filter(Boolean)
  //   .map((t) => t.replace(/\s+/g, ' '));
  //
  // const did = books.find((book) => book.osisID === 'Did');
  // const bookOsisID = 'Did';
  // const bookGroups = did!.groups;
  // for (let i = 0, len = verses.length; i < len; i++) {
  //   const chapterNumber = i + 1;
  //   const verseNumber = 1;
  //   const chapterTitle = titles[i];
  //   const chapterOsisID = `Did.${i + 1}`;
  //   const verseOsisID = `Did.${i + 1}.1`;
  //   const verseText = verses[i];
  //   const verseLanguage = 'en';
  //   const verseSequence = i + 1;
  //   ourData.push({
  //     workOsisID,
  //     bookOsisID,
  //     bookGroups,
  //     chapterTitle,
  //     chapterNumber,
  //     chapterOsisID,
  //     verseNumber,
  //     verseOsisID,
  //     verseText,
  //     verseLanguage,
  //     verseSequence,
  //     importDate: ymd,
  //   });
  // }

  // await Bun.file(`${import.meta.dir}/../../data/verses/Didache.json`).write(
  //   JSON.stringify(ourData, null, 2),
  // );
  // console.log(
  //   `Wrote ${ourData.length} Didache verses to data/verses/Didache.json`,
  // );
  // console.log(`Took ${Date.now() - start}ms`);
}

async function fetchText(url: string): Promise<string> {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Failed to fetch file: ${resp.statusText}`);
  }
  const zipped = await resp.arrayBuffer();
  const zip = await JSZip.loadAsync(zipped);
  const file = zip.file('pg8330-images.html');
  if (!file) {
    // entry not found
    throw new Error('File "pg8330-images.html" not found in the zip archive');
  }

  return file.async('string');
}
