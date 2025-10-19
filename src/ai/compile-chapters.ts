import { aiAnalyzeChapter } from '~/lib/aiAnalyzeChapter.ts';
import { updateTokenCounts } from '~/lib/updateTokenCounts.ts';
import { metadata } from '../../data/_metadata.ts';
import bom from '../../data/verses/bom.json' with { type: 'json' };

main().catch(console.error);

async function main() {
  const allChapters = getAllChapters(bom).slice(100, 200);
  let idx = 1;
  for (const osisID of allChapters) {
    const path = `${import.meta.dir}/../../data/chapters/bom/${osisID}.json`;
    const file = Bun.file(path);
    if (file.size) {
      continue;
    }
    const chapter = bom.filter((v) => v.chapterOsisID === osisID);
    const firstVerse = chapter[0];
    const verses = chapter
      .map((v) => `${v.verseNumber}. ${v.verseText}`)
      .join('\n');
    const heading = `${getBookName(firstVerse.bookOsisID)} Chapter ${firstVerse.chapterNumber}`;
    const text = `${heading}\n\n${verses}`;
    process.stdout.write(`${idx++}) AI is analyzing ${heading}...`);

    const start = Date.now();
    const res = await aiAnalyzeChapter(text);
    await updateTokenCounts(res.usage);
    const toSave = {
      chapterOsisID: firstVerse.chapterOsisID,
      ...res.object,
      createdAt: new Date().toISOString(),
      modelId: res.response.modelId,
    };
    const json = JSON.stringify(toSave, null, 2);
    await file.write(json);
    const took = Date.now() - start;
    const seconds = Math.ceil(took / 1000);
    console.log(` Saved ${json.length} bytes in ${seconds}s`);
    if (res.warnings && res.warnings.length > 0) {
      console.log('Warnings!', res.warnings);
    }
  }
  console.log(`${idx - 1} Chapters saved.`);
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
