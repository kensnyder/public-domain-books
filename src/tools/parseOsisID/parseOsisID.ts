import type { BookShape } from '../../types/data-shapes.ts';
import getBookByName from '../getBookByName/getBookByName.ts';

export interface ParsedOsisID {
  bookOsisID: string;
  chapterOsisID: string | null;
  verseOsisID: string | null;
  chapterNumber: number | null;
  bookChapterTitle: string | null;
  chapterTitle: string | null;
  verseNumber: number | null;
  book: BookShape | undefined;
}

/**
 * Parses an OSIS ID string (e.g., 'Gen.1.1', 'Gen.1', or 'Gen') into its components.
 *
 * @param verseString The OSIS ID string to parse.
 * @returns An object containing the parsed components, including book, chapter, and verse information.
 */
export default function parseOsisID(verseString: string): ParsedOsisID {
  const [b, ch, v] = verseString.split('.').map((s) => s.trim());
  const verseNumber = parseInt(v || '-1', 10);
  const chapterNumber = parseInt(ch || '-1', 10);
  const book = getBookByName(b);
  const bookOsisID = book?.bookOsisID || b;
  const chapterTitle = book
    ? `${book.bookName} ${book.chapterLabel} ${chapterNumber}`
    : null;
  return {
    bookOsisID,
    chapterOsisID: chapterNumber > -1 ? `${bookOsisID}.${chapterNumber}` : null,
    verseOsisID:
      chapterNumber > -1 && verseNumber > -1
        ? `${bookOsisID}.${chapterNumber}.${verseNumber}`
        : null,
    chapterNumber: chapterNumber > -1 ? chapterNumber : null,
    bookChapterTitle:
      book && chapterTitle && chapterNumber > -1
        ? `${book.bookName} ${chapterTitle} ${chapterNumber}`
        : null,
    chapterTitle,
    verseNumber: verseNumber > -1 ? verseNumber : null,
    book,
  };
}

/**
 * Parses an OSIS ID string and returns the result only if it represents a complete verse.
 *
 * @param verse The OSIS ID string to parse.
 * @returns The parsed result if it has both chapter and verse numbers, otherwise null.
 */
export function parseVerseOsisID(verse: string): ParsedOsisID | null {
  const parsed = parseOsisID(verse);
  if (parsed.chapterNumber === null || parsed.verseNumber === null) {
    return null;
  }
  return parsed;
}
