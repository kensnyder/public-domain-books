import metadata from '../../data/books/books.json' with { type: 'json' };

const baseUrl =
  'https://raw.githubusercontent.com/rodolfoapps/Deuter-Apocrypha/4e4ecb3da87fb736e2a18a10463664b487bcb5d9';

const refTextHandler = (item: any) => ({
  ref: item.reference,
  text: item.text,
});
const refTextFinder = (root: any) => root.verses;
const flatHandler = (item: any) => ({
  ref: `${item.book} ${item.chapter}:${item.verse}`,
  text: item.text,
});
const flatFinder = (root: any) => root;

// biome-ignore format: be compact
const works = [
  { url: `${baseUrl}/1-esdras-flat.json`, name: '1 Esdras', handler: refTextHandler, finder: refTextFinder },
  { url: `${baseUrl}/2-esdras-flat.json`, name: '2 Esdras', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/1-maccabees-flat.json`, name: '1 Maccabees', handler: flatHandler, finder: flatFinder },
  { url: `${baseUrl}/2-maccabees-flat.json`, name: '2 Maccabees', handler: flatHandler, finder: flatFinder },
  { url: `${baseUrl}/additions-to-esther-flat.json`, name: 'Additions to Esther', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/judith-flat.json`, name: 'Judith', handler: refTextHandler, finder: refTextFinder },
  { url: `${baseUrl}/laodiceans-flat.json`, name: 'Laodiceans', handler: flatHandler, finder: flatFinder },
  { url: `${baseUrl}/letter-of-jeremiah-flat.json`, name: 'Letter of Jeremiah', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/prayer-of-azariah-and-song-of-the-three-flat.json`, name: 'Prayer of Azariah', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/prayer-of-manasseh-flat.json`, name: 'Prayer of Manasseh', handler: flatHandler, finder: flatFinder },
  { url: `${baseUrl}/sirach-flat.json`, name : 'Sirach', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/susanna-flat.json`, name: 'Susanna', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/tobit-flat.json`, name: 'Tobit', handler: refTextHandler, finder: refTextFinder  },
  { url: `${baseUrl}/wisdom-of-solomon-flat.json`, name: 'Wisdom', handler: refTextHandler, finder: refTextFinder  },
]

const ymd = new Date().toISOString().slice(0, 10);

const ourData: OurData[] = [];
type OurData = {
  workOsisID: string;
  bookOsisID: string;
  bookGroups: string[];
  chapterTitle: string;
  chapterNumber: number;
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
  for (const work of works) {
    console.log(`Fetching data from ${work.url.split('/').pop()}`);
    const res = await fetch(work.url);
    console.log(`Processing ${work.name}...`);
    if (!res.ok) {
      console.error(res);
      return;
    }
    const data = await res.json();
    const verses = work.finder(data);
    let verseSequence = 1;
    for (const verse of verses) {
      const { ref, text } = work.handler(verse);
      const parts = ref.split(/[ :]/);
      if (parts[1] === 'Prologue') {
        parts[0] = 'Sirach Prologue';
        parts[1] = '1';
      }
      const verseNumber = parseInt(parts.pop(), 10);
      const chapterNumber = parseInt(parts.pop(), 10);
      const givenName = parts.join(' ');
      const meta = metadata.find(
        (m) => m.name === givenName || m.aliases.includes(givenName),
      );
      if (!meta) {
        console.log(`Unable to find bookName=${givenName}`);
        process.exit(1);
      }
      const workOsisID = meta.osisID;
      const bookOsisID = meta.osisID;
      const bookGroups = meta.groups;
      const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
      const verseOsisID = `${bookOsisID}.${chapterNumber}.${verseNumber}`;
      const chapterTitle = parts[0] === 'Sirach Prologue' ? 'Prologue' : `Chapter ${chapterNumber}`;
      const verseText = text;
      const verseLanguage = 'en';
      ourData.push({
        workOsisID,
        bookOsisID,
        bookGroups,
        chapterTitle,
        chapterNumber,
        chapterOsisID,
        verseNumber,
        verseOsisID,
        verseText,
        verseLanguage,
        verseSequence,
        importDate: ymd,
      });

      verseSequence++;
    }
  }
  await Bun.file(`${import.meta.dir}/../../data/verses/deuter.json`).write(
    JSON.stringify(ourData, null, 2),
  );
  console.log(`Wrote ${ourData.length} Deuterocanon verses to deuter.json`);
  console.log(`Took ${Date.now() - start}ms`);
}
