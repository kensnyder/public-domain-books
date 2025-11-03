import getBookByName from './getBookByName.ts';
import parseVerseRange from './parseVerseRange.ts';

const trim = (s: string) => s.trim();

export default function parseCitation(citation: string) {
  const groups = citation.split(',').map(trim);
  const verseOsisIDs: string[] = [];
  for (let group of groups) {
    if (/^[^:]+ \d+$/.test(group)) {
      // e.g. John 3 becomes John 3:1 and we continue below
      // TODO: if we know the number of verses in this chapter, maybe we want to convert to a range?
      group += ':1';
    }
    if (/^\d+$/.test(group)) {
      // Another verse in the preceding chapter, e.g. "18" in "John 3:16,18"
      const last = verseOsisIDs[verseOsisIDs.length - 1];
      if (!last) {
        continue;
      }
      verseOsisIDs.push(last.replace(/\.\d+$/, `.${group}`));
      continue;
    }
    const numRange = group.match(/^([^–-]+?)\s*[–-]\s*(\d+)$/);
    if (numRange && group.includes(':')) {
      // e.g. a range such as "John 3:16-17"
      const { bookOsisID, chapter, verse } = parseVerse(numRange[1]);
      if (!bookOsisID || !chapter || !verse) {
        continue;
      }
      const start = `${bookOsisID}.${chapter}.${verse}`;
      if (verse > parseInt(numRange[2], 10)) {
        // descending range (invalid)
        verseOsisIDs.push(start);
        continue;
      }
      const end = `${bookOsisID}.${chapter}.${numRange[2]}`;
      const range = parseVerseRange([start, end]);
      verseOsisIDs.push(...range.verseOsisIDs);
      continue;
    } else if (numRange) {
      // chapter range such as "2 Kings 3-4"
      const bookChapter = numRange[1].match(/^(.+?)\s(\d+)$/);
      if (!bookChapter) {
        continue;
      }
      const bookName = bookChapter[1];
      const book = getBookByName(bookName);
      const bookOsisID = book?.bookOsisID || bookName;
      verseOsisIDs.push(`${bookOsisID}.${bookChapter[2]}.1`);
      continue;
    }
    // we have a single verse
    const { bookOsisID, chapter, verse } = parseVerse(group);
    if (!bookOsisID || !chapter || !verse) {
      continue;
    }
    verseOsisIDs.push(`${bookOsisID}.${chapter}.${verse}`);
  }
  return verseOsisIDs;
}

export function parseVerse(verseString: string) {
  const parts = verseString.split(/[.\s:]+/).map(trim);
  const verse = parseInt(parts.pop() || '0', 10);
  const chapter = parseInt(parts.pop() || '0', 10);
  const bookName = parts.join(' ');
  const book = getBookByName(bookName);
  const bookOsisID = book?.bookOsisID || bookName;
  return { bookOsisID, chapter, verse };
}
