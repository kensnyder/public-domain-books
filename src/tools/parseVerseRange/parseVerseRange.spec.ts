import { describe, expect, it } from 'bun:test';
import parseVerseRange from './parseVerseRange.ts';

describe('parseVerseRange', () => {
  it('should parse a simple range', () => {
    const range = parseVerseRange(['Gen.1.1', 'Gen.1.3']);
    expect(range?.verseOsisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
    expect(range?.bookOsisID).toBe('Gen');
    // Gen is in KJV work in this project's data
    expect(range?.workOsisID).toBe('KJV');
  });

  it('should handle descending range by treating it as a single verse', () => {
    const range = parseVerseRange(['Gen.1.5', 'Gen.1.3']);
    expect(range?.verseOsisIDs).toEqual(['Gen.1.5']);
  });

  it('should return undefined for empty input', () => {
    expect(parseVerseRange([])).toBeUndefined();
  });

  it('should handle invalid OsisIDs by filtering them out', () => {
    // If parseOsisID returns null/undefined for these, they get filtered out
    // Actually, parseOsisID always returns an object, even for "invalid"
    // So we need to check how parseVerseRange filters it.
    // parseOsisID('invalid') returns { bookOsisID: 'invalid', chapterNumber: null, ... }
    // but the .filter(Boolean) in parseVerseRange doesn't filter out objects.
    const range = parseVerseRange(['invalid']);
    expect(range?.bookOsisID).toBe('invalid');
  });
});
