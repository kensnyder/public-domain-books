import * as cheerio from 'cheerio';
import getJsonBookByName from '~/lib/getJsonBookByName.ts';
import type { VerseShape } from '~/types/data-shapes.ts';

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const saveTo = `${import.meta.dir}/../../data/verses/T12Patr.json`;

main().catch(console.error);

async function main() {
  await Bun.file(saveTo).write('');
  const baseUrl = 'https://sacred-texts.com/bib/fbe';
  let next: string | undefined = 'fbe267.htm';
  const progress = { sequence: 1, book: null };
  while (next) {
    next = await extractChapter(progress, `${baseUrl}/${next}`);
    if (next) {
      await new Promise((resolve) =>
        setTimeout(resolve, randInt(16_000, 24_000)),
      );
    }
  }
  console.log('[DONE] No more next links.');
}
async function extractChapter(
  progress: { sequence: number; book: any },
  url: string,
) {
  const html = await fetch(url).then((res) => res.text());
  const $ = cheerio.load(html);

  const $heading = $('h1[align=CENTER]').eq(0);
  const book =
    $heading.length === 0
      ? progress.book
      : getJsonBookByName($heading.text().trim());
  if (book) {
    progress.book = book;
  } else {
    throw new Error(`Unable to find book with name '${$heading.text()}'`);
  }
  const $h3 = $('h3[align=CENTER]').eq(0);
  if ($h3.length === 0) {
    throw new Error(`Chapter number not found in h3`);
  }
  const h3Text = $h3.text().trim();
  const match = h3Text.match(/^CHAP\. ([IV]+)\.$/);
  if (!match) {
    throw new Error(`Chapter number not in form "CHAP. I." -> "${h3Text}`);
  }
  const chapterNumber = romanToDecimal(match[1]);
  let currVerse = '1';
  const verses: Record<string, string> = {};

  const $ps = $('body > p:not([align=CENTER])')
    .toArray()
    .map((e) => $(e));
  if ($ps.length === 0) {
    throw new Error(
      `Unable to verses for '${book.bookOsisID}.${chapterNumber}'`,
    );
  }
  for (const $p of $ps) {
    if ($p.find('font').length > 0) {
      // page number
      continue;
    }
    const text = $p.text().trim();
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
  const $next = $('center > a[href]').filter((_, a) =>
    $(a).text().startsWith('Next:'),
  );

  await writeVerses({
    book,
    chapterNumber,
    progress,
    verses,
  });

  const nextUrl = $next.length > 0 ? $next.attr('href') : undefined;
  return nextUrl;
}

async function writeVerses({
  progress,
  book,
  chapterNumber,
  verses,
}: {
  progress: { sequence: number };
  book: NonNullable<ReturnType<typeof getJsonBookByName>>;
  chapterNumber: number;
  verses: Record<string, string>;
}) {
  const data: VerseShape[] = [];
  for (const [v, verseText] of Object.entries(verses)) {
    const verseNumber = parseFloat(v);
    data.push({
      workOsisID: 'T12Patr',
      bookOsisID: book.bookOsisID,
      chapterTitle: `Chapter ${chapterNumber}`,
      chapterNumber,
      chapterOsisID: `${book.bookOsisID}.${chapterNumber}`,
      verseNumber,
      verseOsisID: `${book.bookOsisID}.${chapterNumber}.${verseNumber}`,
      verseText,
      verseLanguage: 'en',
      verseSequence: progress.sequence++,
    });
  }
  const file = Bun.file(saveTo);
  const existing = file.size === 0 ? { verses: [] } : await file.json();
  const toWrite = {
    compiledAt: new Date().toISOString().slice(0, 10),
    sources: ['https://sacred-texts.com/chr/apo/jasher/index.htm'],
    verses: [...existing.verses, ...data],
  };

  await file.write(JSON.stringify(toWrite, null, 2));
  console.log(
    `Wrote ${data.length} verses for ${book.bookOsisID}.${chapterNumber}`,
  );
}

function romanToDecimal(numeral: string) {
  return { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6 }[numeral] || 1;
}
