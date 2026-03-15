import getBookByName from '../getBookByName/getBookByName.ts';
import parseVerseRange from '../parseVerseRange/parseVerseRange.ts';
import parseVerseReference from '../parseVerseReference/parseVerseReference.ts';
import { verseCounts } from '../../../data/compiled/books-and-works.ts';

const trim = (s: string) => s.trim();

/**
 * Parses a citation string (e.g., "John 3:16, 18", "Genesis 1-2") into a list of verse OSIS IDs.
 *
 * @param citation The citation string to parse.
 * @returns An array of verse OSIS IDs.
 */
export default function parseCitation(citation: string): string[] {
  const groups = citation.split(',').map(trim);
  const verseOsisIDs: string[] = [];
  for (let group of groups) {
    if (/^[^:]+ \d+$/.test(group)) {
      // e.g. John 3 becomes John 3:1 and we continue below
      // TODO: if we know the number of verses in this chapter, maybe we want to convert to a range?
      //   but that could be a lot of verseOsisIDs
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
    const verseRange = group.match(/^([^–-]+?)\s*[–-]\s*(\d+)$/);
    if (verseRange && group.includes(':')) {
      // `numRange` is from a range such as "John 3:16-17" and equals ["John 3:16","17"]
      const parsed = parseVerseReference(verseRange[1]);
      if (!parsed) {
        continue;
      }
      const { bookOsisID, chapterNumber, verseNumber, verseOsisID } = parsed;
      const start = verseOsisID;
      if (verseNumber > parseInt(verseRange[2], 10)) {
        // descending range (invalid), so just take start value
        verseOsisIDs.push(start);
        continue;
      }
      const end = `${bookOsisID}.${chapterNumber}.${verseRange[2]}`;
      const range = parseVerseRange([start, end]);
      if (range) {
        verseOsisIDs.push(...range.verseOsisIDs);
      }
      continue;
    } else if (verseRange) {
      // `numRange` is from a chapter range such as "2 Kings 3-4" and equals ["3","4"]
      const bookChapter = verseRange[1].match(/^(.+?)\s(\d+)$/);
      if (!bookChapter) {
        continue;
      }
      const bookName = bookChapter[1];
      const book = getBookByName(bookName);
      const bookOsisID = book?.bookOsisID || bookName;
      verseOsisIDs.push(`${bookOsisID}.${bookChapter[2]}.1`);
      continue;
    }
    const chapterRange = group.match(/^([^–-]+?)\s*[–-]\s*([^–-]+?)$/);
    if (chapterRange) {
      const from = parseVerseReference(chapterRange[1]);
      if (!from) {
        continue;
      }
      let thru = parseVerseReference(chapterRange[2]);
      if (!thru) {
        thru = parseVerseReference(`${from?.bookOsisID} ${chapterRange[2]}`);
      }
      if (
        !thru ||
        from.bookOsisID !== thru.bookOsisID ||
        (from.chapterNumber === thru.chapterNumber &&
          from.verseNumber < thru.verseNumber) ||
        from.chapterNumber > thru.chapterNumber
      ) {
        continue;
      }
      let failsafe = 10000;
      const b = from.bookOsisID;
      let ch = from.chapterNumber;
      let v = from.verseNumber;
      if (!verseCounts[b]) {
        throw new Error(`Unable to find verse counts for book ${b}`);
      }
      while (--failsafe > 0) {
        verseOsisIDs.push(`${b}.${ch}.${v}`);
        if (ch === thru.chapterNumber && v === thru.verseNumber) {
          break;
        }
        v++;
        if (v > verseCounts[b][ch]) {
          ch++;
          v = 1;
        }
        if (ch > thru.chapterNumber) {
          break;
        }
      }
    }
    // `group` is a single verse such as "John 3:16"
    const parsed = parseVerseReference(group);
    if (!parsed) {
      continue;
    }
    verseOsisIDs.push(parsed.verseOsisID);
  }
  return verseOsisIDs;
}
