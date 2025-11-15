import getBookByName from './getBookByName.ts';
import parseVerseRange from './parseVerseRange.ts';
import parseVerseReference from './parseVerseReference.ts';

const trim = (s: string) => s.trim();

export default function parseCitation(citation: string) {
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
    const numRange = group.match(/^([^–-]+?)\s*[–-]\s*(\d+)$/);
    if (numRange && group.includes(':')) {
      // `numRange` is from a range such as "John 3:16-17" and equals ["John 3:16","17"]
      const parsed = parseVerseReference(numRange[1]);
      if (!parsed) {
        continue;
      }
      const { bookOsisID, chapterNumber, verseNumber, verseOsisID } = parsed;
      const start = verseOsisID;
      if (verseNumber > parseInt(numRange[2], 10)) {
        // descending range (invalid), so just take start value
        verseOsisIDs.push(start);
        continue;
      }
      const end = `${bookOsisID}.${chapterNumber}.${numRange[2]}`;
      const range = parseVerseRange([start, end]);
      if (range) {
        verseOsisIDs.push(...range.verseOsisIDs);
      }
      continue;
    } else if (numRange) {
      // `numRange` is from a chapter range such as "2 Kings 3-4" and equals ["3","4"]
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
    // `group` is a single verse such as "John 3:16"
    const parsed = parseVerseReference(group);
    if (!parsed) {
      continue;
    }
    verseOsisIDs.push(parsed.verseOsisID);
  }
  return verseOsisIDs;
}
