type MinimumVerseShape = {
  bookOsisID: string;
  chapterNumber: number;
  verseNumber: number;
};

const byChapters = new Array(1000).fill(0);
export default function getVerseCounts(
  bookOsisID: string,
  verses: MinimumVerseShape[],
) {
  for (const v of verses) {
    if (v.bookOsisID !== bookOsisID) {
      return;
    }
    byChapters[v.chapterNumber]++;
  }
  const counts = byChapters.filter(Boolean);
  counts.unshift(0);
  return counts;
}
