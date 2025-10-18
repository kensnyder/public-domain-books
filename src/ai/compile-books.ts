import { aiAnalyzeChapter } from '~/lib/aiAnalyzeChapter.ts';
import { metadata } from '../../data/_metadata.ts';
import bom from '../../data/verses/bom.json' with { type: 'json' };

main().catch(console.error);

async function main() {
  const allChapters = getAllChapters(bom);
  let idx = 0;
  for (const osisID of allChapters) {
    const chapter = bom.filter((v) => v.chapterOsisID === osisID);
    const firstVerse = chapter[0];
    const verses = chapter.map((v) => `${v.verseNumber}. ${v.verseText}`).join('\n');
    const heading = `${getBookName(firstVerse.bookOsisID)} Chapter ${firstVerse.chapterNumber}`;
    const text = `${heading}\n\n${verses}`;
    process.stdout.write(`Sending AI ${heading}...`);

    const start = Date.now();
    const res = await aiAnalyzeChapter(text);
    const path = `${import.meta.dir}/../../data/books/${osisID}.json`;
    const json = JSON.stringify(res.object);
    await Bun.file(path).write(json);
    const took = Date.now() - start;
    console.log(` Saved ${json.length} bytes in ${took}ms`);
    if (idx++ > 4) {
      break;
    }
  }
}

function getBookName(bookOsisID: string) {
  for (const meta of metadata) {
    if (bookOsisID === meta.osisID) {
      return meta.name;
    }
  }
  return '';
}

function getAllChapters(verses: typeof bom) {
  const set = new Set();
  for (const verse of verses) {
    set.add(verse.chapterOsisID);
  }
  return Array.from(set);
}
