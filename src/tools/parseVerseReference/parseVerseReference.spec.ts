import { describe, expect, it } from 'bun:test';
import parseVerseReference from './parseVerseReference.ts';

describe('parseVerseReference', () => {
  it('should handle valid verse', () => {
    const parsed = parseVerseReference('John 3:16');
    expect(parsed).toEqual({
      bookOsisID: 'John',
      chapterNumber: 3,
      chapterOsisID: 'John.3',
      verseNumber: 16,
      verseOsisID: 'John.3.16',
    });
  });
  it('should handle normalize book name', () => {
    const parsed = parseVerseReference('2 Nephi. 12:1');
    expect(parsed).toEqual({
      bookOsisID: '2Ne',
      chapterNumber: 12,
      chapterOsisID: '2Ne.12',
      verseNumber: 1,
      verseOsisID: '2Ne.12.1',
    });
  });
  it('should ignore whitespace', () => {
    const parsed = parseVerseReference('1 Ne  3  : 7');
    expect(parsed).toEqual({
      bookOsisID: '1Ne',
      chapterNumber: 3,
      chapterOsisID: '1Ne.3',
      verseNumber: 7,
      verseOsisID: '1Ne.3.7',
    });
  });
  it('should handle D&C', () => {
    const parsed = parseVerseReference('D&C 4:1');
    expect(parsed).toEqual({
      bookOsisID: 'D&C',
      chapterNumber: 4,
      chapterOsisID: 'D&C.4',
      verseNumber: 1,
      verseOsisID: 'D&C.4.1',
    });
  });
  it('should reject unknown book names', () => {
    const parsed = parseVerseReference('Foobar 6:7');
    expect(parsed).toBe(null);
  });
  it('should reject invalid format', () => {
    const parsed = parseVerseReference('1:5 James');
    expect(parsed).toBe(null);
  });
  it('should handle intro and title', () => {
    const parsed = parseVerseReference('John intro:title');
    expect(parsed?.chapterNumber).toBe(0);
    expect(parsed?.verseNumber).toBe(0);
  });
});
