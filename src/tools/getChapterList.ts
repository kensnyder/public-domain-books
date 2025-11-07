import getBookByName from '~/tools/getBookByName.ts';

export default function getChapterList(bookOsisID: string) {
  const book = getBookByName(bookOsisID);
  if (!book) {
    throw new Error(`Book ${bookOsisID} not found`);
  }
  const list = new Array(book.chapterCount).fill(0).map((_, i) => ({
    chapterNumber: i,
    chapterLabel: i === 0 ? 'Prologue' : `${book.chapterLabel} ${i}`,
    verseCount: book.verseCounts[i],
  }));
  if (book.verseCounts[0] === 0) {
    list.shift();
  }
  return list;
}
