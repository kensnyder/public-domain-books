import JSZip from 'jszip';

export type ReferenceShape = {
  from: string;
  to: string;
  thru: string | null;
  votes: number;
}

main().catch(console.error);

async function main() {
  console.log('Fetching data from a.openbible.info');
  const text = await fetchText('https://a.openbible.info/data/cross-references.zip');
  console.log(`Got ${text.length.toLocaleString()} bytes`);
  const lines = text.split('\n').filter(Boolean);
  console.log('First 4 lines:', lines.slice(0, 4).join('\n'));
  const header = lines.shift();
  const comment = header?.match(/#(.+?)(\d{4}-\d\d-\d\d)\s*$/);
  if (!header || !comment) {
    throw new Error('Invalid file format: Missing or malformed header');
  }
  console.log(`Importing ${lines.length.toLocaleString()} cross-references from OpenBible.info`);
  const references : ReferenceShape[] = [];
  const license = comment[1]?.trim();
  const date = comment[2]?.trim();
  for (const line of lines) {
    const [from, to, votes] = line.split('\t');
    const [toId, throughId] = to.split('-');
    const votesInt = parseInt(votes, 10);
    if (Number.isNaN(votesInt) || votesInt < 1) {
      continue;
    }
    references.push({
      from,
      to: toId,
      thru: throughId || null,
      votes: votesInt,
    });
  }
  console.log(`got ${references.length} references into memory`);
  const data = {
    license: license || 'Public Domain',
    date,
    references,
  };
  const file = Bun.file(`${import.meta.dir}/../../data/crossReferences/KJV.json`);
  console.log('writing data...');
  await file.write(JSON.stringify(data, null, 2));

  console.log(`Saved ${lines.length.toLocaleString()} cross-references into ${file.size.toLocaleString()} bytes`);
}

async function fetchText(url: string): Promise<string> {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Failed to fetch file: ${resp.statusText}`);
  }
  const zipped = await resp.arrayBuffer();
  const zip = await JSZip.loadAsync(zipped);
  const file = zip.file('cross_references.txt');
  if (!file) {
    // entry not found
    throw new Error('File "cross_references.txt" not found in the zip archive');
  }

  return file.async('string');
}
