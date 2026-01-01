import getBookByName from './getBookByName.ts';
import parseOsisID from './parseOsisID.ts';
import {verseCounts} from "../../data/compiled/books-and-works.ts";

export default function validateOsisID(osisID: string) {
  const { bookOsisID, chapterNumber, verseNumber } = parseOsisID(osisID);
  const book = getBookByName(bookOsisID);
  const isBookValid = !!book;
  const hasChapter = chapterNumber !== null;
  const isChapterValid =
    hasChapter && isBookValid && (verseCounts[book.bookOsisID]?.[chapterNumber] || 0) > 0;
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

export function isValidOsisID(osisID: string) {
  return validateOsisID(osisID).isValid;
}

export function isValidVerseOsisID(osisID: string) {
  return validateOsisID(osisID).isVerseValid;
}
