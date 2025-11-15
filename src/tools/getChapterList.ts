import getBookByName from './getBookByName.ts';

export type ListedChapter = {
  chapterNumber: number;
  chapterLabel: string;
  chapterAbbr: string;
  verseCount: number;
};

export default function getChapterList(bookOsisID: string) {
  const book = getBookByName(bookOsisID);
  if (!book) {
    throw new Error(`Book ${bookOsisID} not found`);
  }
  const list: ListedChapter[] = [];
  for (let i = 0; i < book.verseCounts.length; i++) {
    const count = book.verseCounts[i];
    if (count === 0) {
      continue;
    }
    list.push({
      chapterNumber: i,
      chapterLabel: i === 0 ? 'Prologue' : `${book.chapterLabel} ${i}`,
      chapterAbbr: i === 0 ? 'P' : String(i),
      verseCount: book.verseCounts[i],
    });
  }
  return list;
}
