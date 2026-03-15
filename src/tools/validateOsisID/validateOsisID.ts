import getBookByName from '../getBookByName/getBookByName.ts';
import parseOsisID from '../parseOsisID/parseOsisID.ts';
import { verseCounts } from '../../../data/compiled/books-and-works.ts';

export interface OsisValidation {
  isValid: boolean;
  hasBook: boolean;
  isBookValid: boolean;
  hasChapter: boolean;
  isChapterValid: boolean;
  hasVerse: boolean;
  isVerseValid: boolean;
}

/**
 * Validates an OSIS ID string, checking for existing book, chapter, and verse.
 *
 * @param osisID The OSIS ID to validate.
 * @returns An object containing validation results for each component.
 */
export default function validateOsisID(osisID: string): OsisValidation {
  const { bookOsisID, chapterNumber, verseNumber } = parseOsisID(osisID);
  const book = getBookByName(bookOsisID);
  const isBookValid = !!book;
  const hasChapter = chapterNumber !== null;
  const isChapterValid =
    hasChapter &&
    isBookValid &&
    (verseCounts[book.bookOsisID]?.[chapterNumber] || 0) > 0;
  const hasVerse = verseNumber !== null;
  const isVerseValid =
    hasVerse &&
    isChapterValid &&
    isBookValid &&
    verseNumber <= (verseCounts[book.bookOsisID]?.[chapterNumber] || 0);
  const isValid =
    isBookValid &&
    (isChapterValid || !hasChapter) &&
    (isVerseValid || !hasVerse);
  return {
    isValid,
    hasBook: !!bookOsisID,
    isBookValid,
    hasChapter,
    isChapterValid,
    hasVerse,
    isVerseValid,
  };
}

/**
 * Checks if an OSIS ID is valid (book, chapter, and verse all exist if provided).
 *
 * @param osisID The OSIS ID to check.
 * @returns True if valid, otherwise false.
 */
export function isValidOsisID(osisID: string): boolean {
  return validateOsisID(osisID).isValid;
}

/**
 * Checks if an OSIS ID represents a valid and existing verse.
 *
 * @param osisID The OSIS ID to check.
 * @returns True if it's a valid verse, otherwise false.
 */
export function isValidVerseOsisID(osisID: string): boolean {
  return validateOsisID(osisID).isVerseValid;
}
