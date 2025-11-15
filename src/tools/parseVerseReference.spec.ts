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
  it('should reject unknown book names', () => {
    const parsed = parseVerseReference('Foobar 6:7');
    expect(parsed).toBe(null);
  });
  it('should reject invalid format', () => {
    const parsed = parseVerseReference('1:5 James');
    expect(parsed).toBe(null);
  });
  it('should reject invalid format', () => {
    const parsed = parseVerseReference('1:5 James');
    expect(parsed).toBe(null);
  });
  it('should reject verses with zero chapter', () => {
    const parsed = parseVerseReference('John 0:1');
    expect(parsed).toBe(null);
  });
  it('should reject verses with zero verse', () => {
    const parsed = parseVerseReference('John 1:0');
    expect(parsed).toBe(null);
  });
});
