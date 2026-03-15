import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import JSZip from 'jszip';
import osisToCitation from '../../src/tools/osisToCitation/osisToCitation.ts';
import citationToOsisIDs from '../../src/tools/citationToOsisIDs/citationToOsisIDs.ts';
import { parseVerseOsisID } from '../../src/tools/parseOsisID/parseOsisID.ts';
import type { CommentaryDataFileShape } from '../../src/types/data-shapes.ts';

main().catch(console.error);

async function main() {
  const start = Date.now();
  const saveTo = `${import.meta.dir}/../../data/commentary/tyndale`;
  const url =
    'https://tyndaleopenresources.com/wp-content/themes/tyndale-openresources/files/tyndale_open-studynotes.zip';
  const xml = await fetchText(url);
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  const items = doc.getElementsByTagName('item');
  let sequence = 1;
  for (const item of Array.from(items)) {
    const verseRange = item.getAttribute('name');
    if (!verseRange) {
      console.error('item has no verse range');
      continue;
    }
    const parseable = verseRange
      .replace(/([A-Z])\./gi, '$1 ')
      .replace(/\.title$/, '.0')
      .replaceAll('.', ':')
      .replace(/[a-z]$/, '');
    const verseOsisIDs = citationToOsisIDs(parseable);
    if (verseOsisIDs.length === 0) {
      throw new Error(
        `Unable to parse item name="${verseRange}" (parseable=${parseable})`,
      );
    }
    const fromVerseOsisID = verseOsisIDs[0];
    const thruVerseOsisID = verseOsisIDs[verseOsisIDs.length - 1];
    const fromVerse = parseVerseOsisID(fromVerseOsisID);
    const thruVerse = parseVerseOsisID(thruVerseOsisID);
    if (
      !fromVerse ||
      !fromVerse.book ||
      !fromVerse.chapterOsisID ||
      !fromVerse.verseOsisID ||
      !thruVerse ||
      !thruVerse.chapterOsisID ||
      !thruVerse.verseOsisID
    ) {
      throw new Error(
        `Unable to find book "${parseable}" that we got from citationToOsisIDs()`,
      );
    }
    const body = item.getElementsByTagName('body').item(0);
    if (!body) {
      console.log(
        `Unable to find <body> element for item ${sequence} name=${verseRange}`,
      );
      continue;
    }
    const p = body.getElementsByTagName('p').item(0);
    if (!p) {
      console.log(
        `unable to find <p> inside <body> for item ${sequence} name=${verseRange}`,
      );
      continue;
    }
    const html = new XMLSerializer().serializeToString(p);
    const file = Bun.file(`${saveTo}/${fromVerse.bookOsisID}.json`);
    const exists = await file.exists();
    if (!exists) {
      console.log(`Creating ${fromVerse.bookOsisID}.json`);
    }
    const contents = exists
      ? await file.json()
      : ({
          commentaryID: 'tyndale',
          author: 'William Tyndale',
          title: 'Tyndale Open Study Notes',
          copyright: '© 2022 by Tyndale House Publishers',
          attribution:
            'CC BY-SA 4.0, see http://creativecommons.org/licenses/by-sa/4.0 and http://www.tyndaleopenresources.com',
          source: url,
          bookOsisID: fromVerse.bookOsisID,
          bookName: fromVerse.book.bookName,
          importedAt: new Date().toISOString().slice(0, 10),
          commentary: [],
        } as CommentaryDataFileShape);
    contents.commentary.push({
      sequence: sequence++,
      bookOsisID: fromVerse.bookOsisID,
      chapterOsisID: fromVerse.chapterOsisID,
      verseOsisID: fromVerse.verseOsisID,
      citation: osisToCitation(fromVerse.verseOsisID),
      html,
    });
    await file.write(JSON.stringify(contents, null, 2));
  }
  console.log(`DONE in ${Date.now() - start}ms`);
}

async function fetchText(url: string): Promise<string> {
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`Failed to fetch file: ${resp.statusText}`);
  }
  const zipped = await resp.arrayBuffer();
  const zip = await JSZip.loadAsync(zipped);
  const file = zip.file('Tyndale Open Study Notes/StudyNotes.xml');
  if (!file) {
    // entry not found
    throw new Error('File "StudyNotes.txt" not found in the zip archive');
  }

  return file.async('string');
}
