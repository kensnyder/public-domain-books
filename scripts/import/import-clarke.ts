import * as cheerio from 'cheerio';
import getBookByName from '../../src/tools/getBookByName.ts';
import osisToCitation from '../../src/tools/osisToCitation.ts';
import parseCitation from '../../src/tools/parseCitation.ts';
import parseVerseOsisID from '../../src/tools/parseOsisID.ts';

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const saveTo = `${import.meta.dir}/../../data/commentary/clarke`;

main().catch(console.error);

async function main() {
  const baseUrl = 'https://sacred-texts.com/bib/cmt/clarke';
  let next: string | undefined = 'gen000.htm';
  const progress = { sequence: 1 };
  while (next) {
    next = await extractCommentary(progress, `${baseUrl}/${next}`);
    if (next) {
      await new Promise((resolve) =>
        setTimeout(resolve, randInt(16_000, 24_000)),
      );
    }
  }
  console.log('[DONE] No more next links.');
}
async function extractCommentary(progress: { sequence: number }, url: string) {
  const html = await fetch(url).then((res) => res.text());
  const $ = cheerio.load(html);

  let currVerse: ReturnType<typeof parseVerseOsisID>;
  let currChapter: string = '';
  let book: ReturnType<typeof getBookByName>;
  const $chapter = $('h3[align=center] > a');
  if ($chapter.length === 0) {
    throw new Error(`Chapter number not found in h3: ${$('h3').eq(0).text()}`);
  }
  const h3Text = $chapter.eq(0).text().trim();
  const match = h3Text.match(/^(.+?) Chapter (\d+)$/);
  if (match) {
    const clarkBook = getClarkeBookByName(match[1]);
    if (!clarkBook) {
      throw new Error(`Unable to find book with name ${match[1]}`);
    }
    book = getBookByName(clarkBook.osisID);
    if (!book) {
      throw new Error(
        `Book + Chapter number not recognized from "${clarkBook.osisID}"`,
      );
    }
    currChapter = `${book.bookOsisID}.${match[2]}`;
    currVerse = parseVerseOsisID(`${currChapter}.0`);
  } else {
    const match = h3Text.match(/^(.+?) Introduction$/);
    if (!match) {
      throw new Error(`Unable to get book and chapter from "${h3Text}"`);
    }
    const clarkBook = getClarkeBookByName(match[1]);
    if (!clarkBook) {
      throw new Error(`Unable to find book with name ${match[1]}`);
    }
    book = getBookByName(clarkBook.osisID);
    if (!book) {
      throw new Error(
        `Introduction Book Name not recognized from "${clarkBook.osisID}"`,
      );
    }
    currChapter = `${book.bookOsisID}.0`;
    currVerse = parseVerseOsisID(`${currChapter}.0`);
  }
  if (!currVerse) {
    throw new Error(
      `Chapter not recognized in h3[align=center]. First h3: "${$chapter.eq(0).text()}"`,
    );
  }
  console.log(`Processing ${h3Text} from url "${url}"`);
  const $nodes = $('body > p')
    .toArray()
    .map((e) => $(e));
  const paraHtmlBlocks: string[] = [];
  for (const $node of $nodes) {
    if (
      $node.text().trim() === '' ||
      $node.attr('align')?.toLowerCase() === 'center'
    ) {
      // empty <p> or verse section heading
      continue;
    }
    const $margLink = $node.find('.margnote a');
    if ($margLink.length > 0) {
      const citation = $margLink.text().trim();
      const [b, ch, v] = citation.split(/[ :]/);
      const clarkeBook = getClarkeBookByName(b);
      if (!clarkeBook) {
        throw new Error(`Unable to parse Margin Note citation "${citation}"`);
      }
      const parsed = parseVerseOsisID(`${clarkeBook.osisID}.${ch}.${v}`);
      if (
        paraHtmlBlocks.length > 0 &&
        currVerse.verseOsisID !== parsed.verseOsisID
      ) {
        if (!currVerse) {
          throw new Error('We found a marg note but dont have a verse yet');
        }
        await saveVerse({
          currVerse,
          progress,
          url,
          htmlBlocks: paraHtmlBlocks,
        });
        paraHtmlBlocks.length = 0;
      }
      currVerse = parsed;
      continue;
    }
    const $links = $node
      .find('a[href^="../../../bib/kjv/"]')
      .toArray()
      .map((e) => $(e));
    for (const $link of $links) {
      const citation = $link.text();
      const verseOsisIDs = parseCitation(citation);
      if (verseOsisIDs.length > 0) {
        const parsed = parseVerseOsisID(verseOsisIDs[0]);
        if (parsed) {
          $link.attr('href', `?bref=${parsed.verseOsisID}`);
        }
      }
    }
    if (!currVerse) {
      // header such as "Commentary on the bible ..."
      continue;
    }
    let html = $node.html();
    if (typeof html !== 'string') {
      const text = $node.text().trim();
      throw new Error(`Unable to get html inside <p>; text="${text}"`);
    }
    html = html
      .trim()
      .replace(/([\u0590-\u05FF]+)/g, '<span class="hebrew">$1</span>')
      .replace(/([Α-Ωα-ω]+)/g, '<span class="greek">$1</span>');
    paraHtmlBlocks.push(`<p>${html}</p>`);
  }
  // save last block
  if (currVerse && paraHtmlBlocks.length > 0) {
    await saveVerse({
      currVerse,
      progress,
      url,
      htmlBlocks: paraHtmlBlocks,
    });
  }
  const nextLink = $('.filenav center a');
  return nextLink.eq(0).attr('href');
}

type SaveFileSchema = {
  author: string; // Adam Clarke
  title: string; // Adam Clarke's Commentary on the Bible
  copyright: string; // © 1831 Adam Clarke
  attribution: string;
  bookOsisID: string;
  chapterOsisID: string;
  citation: string;
  importedAt: string;
  source: string;
  commentary: Array<{
    sequence: number;
    bookOsisID: string;
    chapterOsisID: string;
    verseOsisID: string;
    citation: string;
    html: string;
  }>;
};

async function saveVerse({
  currVerse,
  progress,
  url,
  htmlBlocks,
}: {
  currVerse: NonNullable<ReturnType<typeof parseVerseOsisID>>;
  url: string;
  progress: { sequence: number };
  htmlBlocks: string[];
}) {
  if (!currVerse.verseOsisID) {
    return;
  }
  const filePath = `${saveTo}/${currVerse.chapterOsisID}.json`;
  const file = Bun.file(filePath);
  const contents = (
    (await file.exists())
      ? await file.json()
      : {
          author: 'Adam Clarke',
          title: "Adam Clarke's Commentary on the Bible",
          copyright:
            'New York, Published by J. Emory and B. Waugh, for the Methodist Episcopal Church, at the conference office, 13 Crosby-Street. J. Collord, Printer. 1831',
          attribution:
            'Commentary on the Bible, by Adam Clarke, [1831], at sacred-texts.com',
          citation:
            osisToCitation(currVerse.chapterOsisID!)?.long ||
            currVerse.chapterOsisID,
          bookOsisID: currVerse.bookOsisID,
          chapterOsisID: currVerse.chapterOsisID,
          importedAt: new Date().toISOString(),
          source: url,
          commentary: [],
        }
  ) as SaveFileSchema;

  contents.commentary.push({
    sequence: progress.sequence++,
    bookOsisID: currVerse.bookOsisID,
    chapterOsisID: currVerse.chapterOsisID!,
    verseOsisID: currVerse.verseOsisID,
    citation:
      osisToCitation(currVerse.verseOsisID)?.long || currVerse.verseOsisID,
    html: htmlBlocks.join('\n\n'),
  });
  const bytes = await file.write(JSON.stringify(contents, null, 2));
  if (!bytes) {
    throw new Error(`Unable to write file "${filePath}"`);
  }
  console.log(
    `[${progress.sequence}] Saved ${htmlBlocks.length} paragraph(s) in ${currVerse.verseOsisID}`,
  );
}

function getClarkeBookByName(name: string) {
  return getClarkeBooks().find((b) => b.title === name || b.slug === name);
}

function getClarkeBooks() {
  return [
    { title: 'Genesis', osisID: 'Gen', slug: 'gen' },
    { title: 'Exodus', osisID: 'Exod', slug: 'exo' },
    { title: 'Leviticus', osisID: 'Lev', slug: 'lev' },
    { title: 'Numbers', osisID: 'Num', slug: 'num' },
    { title: 'Deuteronomy', osisID: 'Deut', slug: 'deu' },
    { title: 'Joshua', osisID: 'Josh', slug: 'jos' },
    { title: 'Judges', osisID: 'Judg', slug: 'jdg' },
    { title: 'Ruth', osisID: 'Ruth', slug: 'rut' },
    { title: '1 Kings (1 Samuel)', osisID: '1Sam', slug: 'sa1' },
    { title: '2 Kings (2 Samuel)', osisID: '2Sam', slug: 'sa2' },
    { title: '3 Kings (1 Kings)', osisID: '1Kgs', slug: 'kg1' },
    { title: '4 Kings (2 Kings)', osisID: '2Kgs', slug: 'kg2' },
    { title: '1 Chronicles', osisID: '1Chr', slug: 'ch1' },
    { title: '2 Chronicles', osisID: '2Chr', slug: 'ch2' },
    { title: 'Ezra', osisID: 'Ezra', slug: 'ezr' },
    { title: 'Nehemiah', osisID: 'Neh', slug: 'neh' },
    { title: 'Esther', osisID: 'Esth', slug: 'est' },
    { title: 'Job', osisID: 'Job', slug: 'job' },
    { title: 'Psalms', osisID: 'Ps', slug: 'psa' },
    { title: 'Proverbs', osisID: 'Prov', slug: 'pro' },
    { title: 'Ecclesiastes', osisID: 'Eccl', slug: 'ecc' },
    { title: 'Song of Solomon (Canticles)', osisID: 'Song', slug: 'sol' },
    { title: 'Isaiah', osisID: 'Isa', slug: 'isa' },
    { title: 'Jeremiah', osisID: 'Jer', slug: 'jer' },
    { title: 'Lamentations', osisID: 'Lam', slug: 'lam' },
    { title: 'Ezekiel', osisID: 'Ezek', slug: 'eze' },
    { title: 'Daniel', osisID: 'Dan', slug: 'dan' },
    { title: 'Hosea', osisID: 'Hos', slug: 'hos' },
    { title: 'Joel', osisID: 'Joel', slug: 'joe' },
    { title: 'Amos', osisID: 'Amos', slug: 'amo' },
    { title: 'Obadiah', osisID: 'Obad', slug: 'oba' },
    { title: 'Jonah', osisID: 'Jonah', slug: 'jon' },
    { title: 'Micah', osisID: 'Mic', slug: 'mic' },
    { title: 'Nahum', osisID: 'Nah', slug: 'nah' },
    { title: 'Habakkuk', osisID: 'Hab', slug: 'hab' },
    { title: 'Zephaniah', osisID: 'Zeph', slug: 'zep' },
    { title: 'Haggai', osisID: 'Hag', slug: 'hag' },
    { title: 'Zechariah', osisID: 'Zech', slug: 'zac' },
    { title: 'Malachi', osisID: 'Mal', slug: 'mal' },
    { title: 'Matthew', osisID: 'Matt', slug: 'mat' },
    { title: 'Mark', osisID: 'Mark', slug: 'mar' },
    { title: 'Luke', osisID: 'Luke', slug: 'luk' },
    { title: 'John', osisID: 'John', slug: 'joh' },
    { title: 'Acts', osisID: 'Acts', slug: 'act' },
    { title: 'Romans', osisID: 'Rom', slug: 'rom' },
    { title: '1 Corinthians', osisID: '1Cor', slug: 'co1' },
    { title: '2 Corinthians', osisID: '2Cor', slug: 'co2' },
    { title: 'Galatians', osisID: 'Gal', slug: 'gal' },
    { title: 'Ephesians', osisID: 'Eph', slug: 'eph' },
    { title: 'Philippians', osisID: 'Phil', slug: 'phi' },
    { title: 'Colossians', osisID: 'Col', slug: 'col' },
    { title: '1 Thessalonians', osisID: '1Thess', slug: 'th1' },
    { title: '2 Thessalonians', osisID: '2Thess', slug: 'th2' },
    { title: '1 Timothy', osisID: '1Tim', slug: 'ti1' },
    { title: '2 Timothy', osisID: '2Tim', slug: 'ti2' },
    { title: 'Titus', osisID: 'Titus', slug: 'tit' },
    { title: 'Philemon', osisID: 'Phlm', slug: 'plm' },
    { title: 'Hebrews', osisID: 'Heb', slug: 'heb' },
    { title: 'James', osisID: 'Jas', slug: 'jam' },
    { title: '1 Peter', osisID: '1Pet', slug: 'pe1' },
    { title: '2 Peter', osisID: '2Pet', slug: 'pe2' },
    { title: '1 John', osisID: '1John', slug: 'jo1' },
    { title: '2 John', osisID: '2John', slug: 'jo2' },
    { title: '3 John', osisID: '3John', slug: 'jo3' },
    { title: 'Jude', osisID: 'Jude', slug: 'jde' },
    { title: 'Revelation', osisID: 'Rev', slug: 'rev' },
  ];
}
