import { describe, expect, it } from 'bun:test';
import parseReference from './parseReference.ts';

describe('parseVerseReference - exact', () => {
  it('should handle valid verse', () => {
    const parsed = parseReference('John 3:16');
    expect(parsed).toEqual({
      workOsisID: 'KJV',
      bookOsisID: 'John',
      bookName: 'John',
      chapterNumber: 3,
      chapterOsisID: 'John.3',
      verseNumber: 16,
      verseOsisID: 'John.3.16',
      citation: 'John 3:16',
      longCitation: 'John 3:16',
    });
  });
  it('should handle normalize book name', () => {
    const parsed = parseReference('2 Nephi. 12:1');
    expect(parsed).toEqual({
      workOsisID: 'BofM',
      bookOsisID: '2Ne',
      bookName: '2 Nephi',
      chapterNumber: 12,
      chapterOsisID: '2Ne.12',
      verseNumber: 1,
      verseOsisID: '2Ne.12.1',
      citation: '2Ne 12:1',
      longCitation: '2 Nephi 12:1',
    });
  });
  it('should ignore whitespace', () => {
    const parsed = parseReference('1 Ne  3  : 7');
    expect(parsed).toEqual({
      workOsisID: 'BofM',
      bookOsisID: '1Ne',
      bookName: '1 Nephi',
      chapterNumber: 3,
      chapterOsisID: '1Ne.3',
      verseNumber: 7,
      verseOsisID: '1Ne.3.7',
      citation: '1Ne 3:7',
      longCitation: '1 Nephi 3:7',
    });
  });
  it('should handle D&C', () => {
    const parsed = parseReference('D&C 4:1');
    expect(parsed).toEqual({
      workOsisID: 'D&C',
      bookOsisID: 'D&C',
      bookName: 'Doctrine and Covenants',
      chapterNumber: 4,
      chapterOsisID: 'D&C.4',
      verseNumber: 1,
      verseOsisID: 'D&C.4.1',
      citation: 'D&C 4:1',
      longCitation: 'Doctrine and Covenants 4:1',
    });
  });
  it('should reject unknown book names', () => {
    const parsed = parseReference('Foobar 6:7');
    expect(parsed).toEqual({
      workOsisID: null,
      bookOsisID: null,
      bookName: null,
      chapterNumber: null,
      chapterOsisID: null,
      verseNumber: null,
      verseOsisID: null,
      citation: null,
      longCitation: null,
    });
  });
  it('should reject invalid format', () => {
    const parsed = parseReference('1:5 James');
    expect(parsed).toEqual({
      workOsisID: null,
      bookOsisID: null,
      bookName: null,
      chapterNumber: null,
      chapterOsisID: null,
      verseNumber: null,
      verseOsisID: null,
      citation: null,
      longCitation: null,
    });
  });
  it('should handle intro and title', () => {
    const parsed = parseReference('John intro:title');
    expect(parsed).toEqual({
      workOsisID: 'KJV',
      bookOsisID: 'John',
      bookName: 'John',
      chapterNumber: 0,
      chapterOsisID: 'John.0',
      verseNumber: 0,
      verseOsisID: 'John.0.0',
      citation: 'John 0:0',
      longCitation: 'John 0:0',
    });
  });
});
describe('parseVerseReference - partial', () => {
  it('should handle valid book', () => {
    const parsed = parseReference('1 Sam');
    expect(parsed).toEqual({
      workOsisID: 'KJV',
      bookOsisID: '1Sam',
      bookName: '1 Samuel',
      chapterNumber: null,
      chapterOsisID: null,
      verseNumber: null,
      verseOsisID: null,
      citation: '1Sam',
      longCitation: '1 Samuel',
    });
  });
  it('should handle valid chapter', () => {
    const parsed = parseReference('1 Cor 3');
    expect(parsed).toEqual({
      workOsisID: 'KJV',
      bookOsisID: '1Cor',
      bookName: '1 Corinthians',
      chapterNumber: 3,
      chapterOsisID: '1Cor.3',
      verseNumber: null,
      verseOsisID: null,
      citation: '1Cor 3',
      longCitation: '1 Corinthians 3',
    });
  });
});
