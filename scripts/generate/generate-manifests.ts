import { Glob } from 'bun';

type ManifestFormat = {
  works: {
    dataPath: string;
  };
  books: {
    dataPath: string;
  };
  verses: Array<{
    dataPath: string;
    workOsisID: string;
    importDate: string;
  }>;
  crossReferences: Array<{
    dataPath: string;
    workOsisID: string;
    date: string;
    license: string;
  }>;
  geocoding: Array<{
    url: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    importDate: string;
  }>;
  maps: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    verseOsisID: string | null;
    importDate: string;
  }>;
  artwork: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    verseOsisID: string | null;
    importDate: string;
  }>;
  analysis: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string;
    modelId: string;
    createdAt: string;
  }>;
};

main().catch(console.error);
async function main() {
  const manifest: ManifestFormat = {
    works: {
      dataPath: 'data/works/works.json',
    },
    books: {
      dataPath: 'data/books/books.json',
    },
    verses: await getVerses(),
    analysis: await getAnalysisFiles(),
    crossReferences: await getCrossReferences(),
    geocoding: [],
    maps: [],
    artwork: [],
  };
  const file = Bun.file(`${import.meta.dir}/../../data-manifest.json`);
  await file.write(JSON.stringify(manifest, null, 2));
  console.log(
    `Wrote ${file.size.toLocaleString()} bytes to data-manifest.json`,
  );
}

async function getCrossReferences() {
  const xrs: ManifestFormat['crossReferences'] = [];
  const glob = new Glob('*.json');
  const baseDir = `${import.meta.dir}/../../data/crossReferences`;
  for await (const dataPath of glob.scan(baseDir)) {
    const workOsisID = dataPath.replace('.json', '');
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const data = await file.json();
    const date = data.date;
    const license = data.licence;
    xrs.push({
      dataPath,
      workOsisID,
      date,
      license,
    });
  }
  return xrs;
}

async function getVerses() {
  const verses: ManifestFormat['verses'] = [];
  const glob = new Glob('*.json');
  const baseDir = `${import.meta.dir}/../../data/verses`;
  for await (const dataPath of glob.scan(baseDir)) {
    const workOsisID = dataPath.replace('.json', '');
    const file = Bun.file(`${baseDir}/${dataPath}`);
    const data = await file.json();
    const importDate = data[0].importData;
    verses.push({
      dataPath: `data/verses/${dataPath}`,
      workOsisID,
      importDate,
    });
  }
  return verses;
}
async function getAnalysisFiles() {
  const glob = new Glob('**/*.json');
  const baseDir = `${import.meta.dir}/../../data/analysis`;
  const analysis: ManifestFormat['analysis'] = [];
  for await (const dataPath of glob.scan(baseDir)) {
    const [workOsisID, filename] = dataPath.split('/');
    const dataFile = Bun.file(`${baseDir}/${dataPath}`);
    const dataContents = await dataFile.json();
    const createdAt = new Date(dataContents.createdAt);
    const chapterOsisID = filename.replace('.json', '');
    const bookOsisID = chapterOsisID.split('.').shift() || '';
    analysis.push({
      dataPath: `data/analysis/${dataPath}`,
      workOsisID,
      bookOsisID,
      chapterOsisID,
      modelId: dataContents.modelId,
      createdAt: createdAt.toISOString(),
    });
  }
  analysis.sort((a, b) => {
    const aWorkChapter = `${a.workOsisID}.${a.chapterOsisID}`;
    const bWorkChapter = `${b.workOsisID}.${b.chapterOsisID}`;
    return aWorkChapter.localeCompare(bWorkChapter, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  });
  return analysis;
}
