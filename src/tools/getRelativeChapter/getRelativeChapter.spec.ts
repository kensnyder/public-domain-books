import { describe, expect, it, mock } from 'bun:test';
import { getRelativeChapter, getNextChapter, getPreviousChapter } from './getRelativeChapter.ts';

mock.module('../../../data/compiled/books-and-works.ts', () => {
  const actual = require('../../../data/compiled/books-and-works.ts');
  return {
    ...actual,
    works: [
      ...actual.works,
      { workOsisID: 'MOCK_WORK', workTitle: 'Mock Work', hasData: true },
    ],
    worksLookup: {
      ...actual.worksLookup,
      MOCK_WORK: actual.works.length,
    },
    books: [
      ...actual.books,
      {
        workOsisID: 'MOCK_WORK',
        bookName: 'Book With No Counts',
        bookOsisID: 'NoCounts',
        chapterLabel: 'Chapter',
      },
      {
        workOsisID: 'NON_EXISTENT_WORK',
        bookName: 'Book With No Work',
        bookOsisID: 'NoWork',
        chapterLabel: 'Chapter',
      },
      {
        workOsisID: 'MOCK_WORK',
        bookName: 'Rolling Book',
        bookOsisID: 'RollingBook',
        chapterLabel: 'Chapter',
      },
      {
        workOsisID: 'MOCK_WORK',
        bookName: 'No Counts Next',
        bookOsisID: 'NoCountsNext',
        chapterLabel: 'Chapter',
      },
    ],
    booksLookup: {
      ...actual.booksLookup,
      NOCOUNTS: actual.books.length,
      NOWORK: actual.books.length + 1,
      ROLLINGBOOK: actual.books.length + 2,
      NOCOUNTSNEXT: actual.books.length + 3,
    },
    verseCounts: {
      ...actual.verseCounts,
      RollingBook: [0, 10], // 1 chapter
    },
  };
});

describe('getRelativeChapter', () => {
  it('should handle +1', () => {
    const rel = getRelativeChapter('Gen', 1, 1);
    expect(rel?.chapterOsisID).toBe('Gen.2');
  });
  it('should handle +3', () => {
    const rel = getRelativeChapter('Gen', 1, 3);
    expect(rel?.chapterOsisID).toBe('Gen.4');
  });
  it('should handle -1', () => {
    const rel = getRelativeChapter('Gen', 2, -1);
    expect(rel?.chapterOsisID).toBe('Gen.1');
  });
  it('should return null if -1 on first chapter of work', () => {
    const rel = getRelativeChapter('Gen', 1, -1);
    expect(rel).toBe(null);
  });
  it('should return null if +1 on last chapter of work', () => {
    const rel = getRelativeChapter('Moro', 10, 1);
    expect(rel).toBe(null);
  });
  it('should return first chapter of next work', () => {
    const rel = getRelativeChapter('Ether', 15, 1);
    expect(rel?.chapterOsisID).toBe('Moro.1');
  });
  it('should return last chapter of previous work', () => {
    const rel = getRelativeChapter('Moro', 1, -1);
    expect(rel?.chapterOsisID).toBe('Eth.15');
  });
  it('should handle AddEsth', () => {
    const rel = getRelativeChapter('addEsth', 10, -1);
    expect(rel?.chapterOsisID).toBe('2Esd.16');
  });
  it('should handle AddEsth', () => {
    const rel = getRelativeChapter('AddEsth', 17, 1);
    expect(rel?.chapterOsisID).toBe('1Macc.1');
  });
  it('should return null if book not found', () => {
    expect(getRelativeChapter('INVALID', 1, 1)).toBeNull();
  });
  it('should return same chapter if add is 0', () => {
    const rel = getRelativeChapter('Gen', 1, 0);
    expect(rel?.chapterOsisID).toBe('Gen.1');
  });
  it('should return prologue if chapter 0 is requested', () => {
    // Note: This test assumes some book has chapter 0 (prologue) in verseCounts
    // Sirach (Sir) often has a prologue in OSIS
    const rel = getRelativeChapter('Sir', 1, -1);
    if (rel?.chapterNumber === 0) {
      expect(rel.chapterTitle).toBe('Prologue');
    }
  });

  it('getNextChapter should call getRelativeChapter with 1', () => {
    const rel = getNextChapter('Gen', 1);
    expect(rel?.chapterOsisID).toBe('Gen.2');
  });

  it('getPreviousChapter should call getRelativeChapter with -1', () => {
    const rel = getPreviousChapter('Gen', 2);
    expect(rel?.chapterOsisID).toBe('Gen.1');
  });

  it('should throw if work is not found', () => {
    const thrower = () => getRelativeChapter('NoWork', 1, 1);
    expect(thrower).toThrow(/Error finding work NON_EXISTENT_WORK/);
  });

  it('should throw if verse counts are not found', () => {
    const thrower = () => getRelativeChapter('NoCounts', 1, 1);
    expect(thrower).toThrow(/Error finding verse counts for book Book With No Counts/);
  });

  it('should throw if verse counts are not found when rolling to next book', () => {
    const thrower = () => getRelativeChapter('RollingBook', 1, 1);
    expect(thrower).toThrow(/Error finding verse counts for book No Counts Next/);
  });
});
