import * as cheerio from 'cheerio';
import type { VerseShape } from '~/types/data-shapes.ts';

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const saveTo = `${import.meta.dir}/../../data/verses/Jasher.json`;

main().catch(console.error);

async function main() {
  await Bun.file(saveTo).write('');
  const baseUrl = 'https://sacred-texts.com/chr/apo/jasher';
  const progress = { sequence: 1 };
  for (let i = 1; i <= 91; i++) {
    await extractChapter(i, progress, `${baseUrl}/${i}.htm`);
    if (i < 91) {
      await new Promise((resolve) =>
        setTimeout(resolve, randInt(16_000, 24_000)),
      );
    }
  }
  console.log('[DONE] Imported all 91 chapters.');
}
async function extractChapter(
  chapterNumber: number,
  progress: { sequence: number },
  url: string,
) {
  const html = await fetch(url).then((res) => res.text());
  const $ = cheerio.load(html);

  const $ps = $('body > p:not([align=CENTER])')
    .toArray()
    .map((e) => $(e));
  if ($ps.length === 0) {
    throw new Error(`Unable to verses for 'Jasher.${chapterNumber}'`);
  }
  const verses: Record<string, string> = {};
  let currVerse = '1';
  for (const $p of $ps) {
    if ($p.find('font').length > 0) {
      // page number
      continue;
    }
    const text = $p.text().trim().replace(/\s+/g, ' ');
    if (!text) {
      // empty text
      continue;
    }
    const match = text.match(/^(\d+)\s+(.+)$/);
    if (match) {
      currVerse = match[1];
      verses[currVerse] = match[2];
    } else if (currVerse === '1') {
      verses['1'] = text;
    } else if (currVerse in verses) {
      verses[currVerse] += ' ' + text;
    } else {
      throw new Error(`Text found outside verses: "${text}"`);
    }
  }

  await writeVerses({
    chapterNumber,
    progress,
    verses,
  });
}

async function writeVerses({
  progress,
  chapterNumber,
  verses,
}: {
  progress: { sequence: number };
  chapterNumber: number;
  verses: Record<string, string>;
}) {
  const data: VerseShape[] = [];
  for (const [v, verseText] of Object.entries(verses)) {
    const verseNumber = parseFloat(v);
    data.push({
      workOsisID: 'Jasher',
      bookOsisID: 'Jasher',
      chapterTitle: `Chapter ${chapterNumber}`,
      chapterNumber,
      chapterOsisID: `Jasher.${chapterNumber}`,
      verseNumber,
      verseOsisID: `Jasher.${chapterNumber}.${verseNumber}`,
      verseText,
      verseLanguage: 'en',
      verseSequence: progress.sequence++,
    });
  }
  data.sort((a, b) => a.verseNumber - b.verseNumber);
  const file = Bun.file(saveTo);
  const existing = file.size === 0 ? { verses: [] } : await file.json();
  const toWrite = {
    compiledAt: new Date().toISOString().slice(0, 10),
    sources: ['https://sacred-texts.com/chr/apo/jasher/index.htm'],
    verses: [...existing.verses, ...data],
  };
  await file.write(JSON.stringify(toWrite, null, 2));
  console.log(`Wrote ${data.length} verses for Jasher.${chapterNumber}`);
}
