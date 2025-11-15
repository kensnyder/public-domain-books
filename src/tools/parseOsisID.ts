import getBookByName from './getBookByName.ts';

export default function parseOsisID(verseString: string) {
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

export function parseVerseOsisID(verse: string) {
  const parsed = parseOsisID(verse);
  if (!parsed.chapterNumber || !parsed.verseNumber) {
    return null;
  }
  return parsed;
}
