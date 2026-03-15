import { describe, expect, it } from 'bun:test';
import parseOsisID, { parseVerseOsisID } from './parseOsisID.ts';

describe('parseOsisID', () => {
  it('should parse a full verse OsisID', () => {
    const parsed = parseOsisID('Gen.1.1');
    expect(parsed.bookOsisID).toBe('Gen');
    expect(parsed.chapterNumber).toBe(1);
    expect(parsed.verseNumber).toBe(1);
    expect(parsed.verseOsisID).toBe('Gen.1.1');
  });

  it('should parse a chapter OsisID', () => {
    const parsed = parseOsisID('Gen.1');
    expect(parsed.bookOsisID).toBe('Gen');
    expect(parsed.chapterNumber).toBe(1);
    expect(parsed.verseNumber).toBeNull();
    expect(parsed.verseOsisID).toBeNull();
    expect(parsed.chapterOsisID).toBe('Gen.1');
  });

  it('should parse a book OsisID', () => {
    const parsed = parseOsisID('Gen');
    expect(parsed.bookOsisID).toBe('Gen');
    expect(parsed.chapterNumber).toBeNull();
    expect(parsed.verseNumber).toBeNull();
    expect(parsed.chapterOsisID).toBeNull();
  });

  it('should handle spaces in OsisID', () => {
    const parsed = parseOsisID(' Gen . 1 . 1 ');
    expect(parsed.bookOsisID).toBe('Gen');
    expect(parsed.chapterNumber).toBe(1);
    expect(parsed.verseNumber).toBe(1);
  });

  it('should handle unknown books', () => {
    const parsed = parseOsisID('Invalid.1.1');
    expect(parsed.bookOsisID).toBe('Invalid');
    expect(parsed.book).toBeUndefined();
  });

  it('parseVerseOsisID should return null for incomplete IDs', () => {
    expect(parseVerseOsisID('Gen.1')).toBeNull();
    expect(parseVerseOsisID('Gen')).toBeNull();
  });

  it('parseVerseOsisID should return parsed object for full IDs', () => {
    const parsed = parseVerseOsisID('Gen.1.1');
    expect(parsed).not.toBeNull();
    expect(parsed?.verseNumber).toBe(1);
  });
});
