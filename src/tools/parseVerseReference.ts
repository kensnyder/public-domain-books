import getBookByName from './getBookByName.ts';

export default function parseVerseReference(verseString: string) {
  const match = verseString.match(/^(.+?)\s+(\d+)\s*:\s*(\d+)$/);
  if (!match) {
    return null;
  }
  // remove punctuation such as periods
  const cleanBook = match[1].replace(/[^a-z0-9 ]/gi, '');
  const book = getBookByName(cleanBook);
  if (!book) {
    return null;
  }
  const bookOsisID = book.bookOsisID;
  const chapterNumber = parseInt(match[2], 10);
  const verseNumber = parseInt(match[3], 10);
  if (chapterNumber === 0 || verseNumber === 0) {
    return null;
  }
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const verseOsisID = `${bookOsisID}.${chapterNumber}.${verseNumber}`;
  return {
    bookOsisID,
    chapterNumber,
    chapterOsisID,
    verseNumber,
    verseOsisID,
  };
}
