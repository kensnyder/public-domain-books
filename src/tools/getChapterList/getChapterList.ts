import getBookByName from '../getBookByName/getBookByName.ts';
import { verseCounts } from '../../../data/compiled/books-and-works.ts';

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
  const counts = verseCounts[book.bookOsisID];
  if (!counts) {
    throw new Error(`Verse counts not found for book ${bookOsisID}`);
  }
  const list: ListedChapter[] = [];
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    if (count === 0) {
      continue;
    }
    list.push({
      chapterNumber: i,
      chapterLabel: i === 0 ? 'Prologue' : `${book.chapterLabel} ${i}`,
      chapterAbbr: i === 0 ? 'P' : String(i),
      verseCount: counts[i],
    });
  }
  return list;
}
