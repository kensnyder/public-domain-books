import * as cheerio from 'cheerio';
import type { VerseShape } from '~/types/data-shapes.ts';

const saveTo = `${import.meta.dir}/../../data/verses/AscIsa.json`;

main().catch(console.error);

async function main() {
  await Bun.file(saveTo).write('');
  const url = 'https://www.earlychristianwritings.com/text/ascension.html';
  const html = await fetch(url).then((res) => res.text());
  const $ = cheerio.load(html);
  const $ps = $('#textboundingbox > p')
    .toArray()
    .map((e) => $(e));
  if ($ps.length === 0) {
    throw new Error(`Unable to verses for 'AscIsa'`);
  }
  const verses: string[][] = [];
  let currChapter = 1;
  for (const $p of $ps) {
    const text = $p.text().trim().replace(/\s+/g, ' ');
    if (!text) {
      // empty text
      continue;
    }
    const chMatch = text.match(/^CHAPTER\s+(.+)$/);
    if (chMatch) {
      currChapter = parseFloat(chMatch[1]);
      verses[currChapter - 1] = [];
    }
    const match = text.match(/^(\d+)\.\s+(.+)$/);
    let currVerse: number;
    let verseText = '';
    if (match) {
      currVerse = parseFloat(match[1]);
      verseText = match[2];
    } else {
      currVerse = 1;
      verseText = text;
    }
    verses[currChapter - 1][currVerse - 1] = verseText;
  }

  await writeVerses(verses);
}

async function writeVerses(verses: string[][]) {
  const data: VerseShape[] = [];
  let seq = 1;
  for (let c = 0; c < verses.length; c++) {
    const chapterNumber = c + 1;
    for (let v = 0; v < verses[c].length; v++) {
      const verseNumber = v + 1;
      data.push({
        workOsisID: 'AscIsa',
        bookOsisID: 'AscIsa',
        chapterTitle: `Chapter ${chapterNumber}`,
        chapterNumber,
        chapterOsisID: `AscIsa.${chapterNumber}`,
        verseNumber,
        verseOsisID: `AscIsa.${chapterNumber}.${verseNumber}`,
        verseText: verses[c][v],
        verseLanguage: 'en',
        verseSequence: seq++,
      });
    }
  }
  const toWrite = {
    compiledAt: new Date().toISOString().slice(0, 10),
    sources: ['https://www.earlychristianwritings.com/text/ascension.html'],
    verses: data,
  };
  await Bun.file(saveTo).write(JSON.stringify(toWrite, null, 2));
  console.log(`Wrote ${data.length} verses for AscIsa`);
}
