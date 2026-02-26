// import process from 'node:process';
// import { aiAnalyzeChapter } from '~/lib/aiAnalyzeChapter.ts';
// import getBookByName from '~/lib/getJsonBookByName.ts';
// import { updateTokenCounts } from '~/lib/updateTokenCounts.ts';
// import type { VerseDataFileShape } from '~/types/data-shapes.ts';
//
// const workOsisID = 'T12Patr';
// const bookOsisIDs: string[] = [];
//
// main().catch(console.error);
//
// async function main() {
//   const path = `${import.meta.dir}/../../data/verses/${workOsisID}.json`;
//   const file = Bun.file(path);
//   const workData: VerseDataFileShape = await file.json();
//   const allChapters = getAllChapters(workData);
//   let idx = 1;
//   for (const osisID of allChapters) {
//     const path = `${import.meta.dir}/../../data/analysis/${workOsisID}/${osisID}.json`;
//     const file = Bun.file(path);
//     if (file.size) {
//       // Skipping existing analysis
//       continue;
//     }
//     const chapter = workData.verses.filter((v) => v.chapterOsisID === osisID);
//     const firstVerse = chapter[0];
//     const verses = chapter
//       .map((v) => `${v.verseNumber}. ${v.verseText}`)
//       .join('\n');
//     const book = getBookByName(firstVerse.bookOsisID)!;
//     const heading = `${book.bookName}\n${book.bookSubtitle}\nChapter ${firstVerse.chapterNumber}`;
//     const text = `${heading}\n\n${verses}`;
//     process.stdout.write(
//       `${idx++}) AI is analyzing ${book.bookName} Chapter ${firstVerse.chapterNumber}...`,
//     );
//
//     const start = Date.now();
//     const res = await aiAnalyzeChapter(text);
//     await updateTokenCounts(res.usage);
//     const toSave = {
//       chapterOsisID: firstVerse.chapterOsisID,
//       ...res.object,
//       createdAt: new Date().toISOString(),
//       modelId: res.response.modelId,
//     };
//     const json = JSON.stringify(toSave, null, 2);
//     await file.write(json);
//     const took = Date.now() - start;
//     const seconds = Math.ceil(took / 1000);
//     console.log(` Saved ${json.length} bytes in ${seconds}s`);
//     if (res.warnings && res.warnings.length > 0) {
//       console.log('Warnings!', res.warnings);
//     }
//   }
//   console.log(`${idx - 1} Chapters saved.`);
// }
//
// function getAllChapters(workData: VerseDataFileShape) {
//   const set = new Set();
//   for (const verse of workData.verses) {
//     if (bookOsisIDs.length > 0 && !bookOsisIDs.includes(verse.bookOsisID)) {
//       continue;
//     }
//     set.add(verse.chapterOsisID);
//   }
//   return Array.from(set);
// }
