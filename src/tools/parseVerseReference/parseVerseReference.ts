import getBookByName from '../getBookByName/getBookByName.ts';

export default function parseVerseReference(verseString: string) {
  const match = verseString.match(/^(.+?)\s+(\d+|intro)\s*:\s*(\d+|title)$/);
  if (!match) {
    return null;
  }
  // remove punctuation such as periods
  const cleanBook = match[1].replace(/[^a-z0-9& ]/gi, '');
  const book = getBookByName(cleanBook);
  if (!book) {
    return null;
  }
  const bookOsisID = book.bookOsisID;
  const chapterNumber =
    match[2] === 'intro' ? 0 : Number.parseInt(match[2], 10);
  const verseNumber = match[3] === 'title' ? 0 : Number.parseInt(match[3], 10);
  if (Number.isNaN(chapterNumber) || Number.isNaN(verseNumber)) {
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
