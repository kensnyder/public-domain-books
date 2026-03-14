import { expect, it, describe } from 'bun:test';
import autocompleteVerseOsisID from './autocompleteVerseOsisID.ts';

describe('autocompleteVerseOsisID', () => {
  it('should suggest book names from partial input (Mode 1)', () => {
    const results = autocompleteVerseOsisID({ text: 'ma', limit: 6 });
    expect(results).toEqual([
      'Joseph Smith—Matthew',
      'Malachi',
      'Matthew',
      'Mark',
      'Romans',
      'Alma',
    ]);
  });

  it('should suggest book names when input matches middle of name (Mode 1)', () => {
    const results = autocompleteVerseOsisID({ text: 'atth', limit: 3 });
    expect(results).toContain('Matthew');
  });

  it('should suggest chapter numbers when exact book is provided (Mode 2)', () => {
    const results = autocompleteVerseOsisID({ text: 'Matthew', limit: 3 });
    expect(results).toEqual(['Matthew 1', 'Matthew 2', 'Matthew 3']);
  });

  it('should suggest chapter numbers starting with input (Mode 2)', () => {
    const results = autocompleteVerseOsisID({ text: 'Matthew 1', limit: 3 });
    expect(results).toEqual(['Matthew 1', 'Matthew 10', 'Matthew 11']);
  });

  it('should suggest verse numbers when exact chapter is provided (Mode 3)', () => {
    const results = autocompleteVerseOsisID({ text: 'Matthew 15', limit: 3 });
    expect(results).toEqual(['Matthew 15:1', 'Matthew 15:2', 'Matthew 15:3']);
  });

  it('should suggest verse numbers starting with input (Mode 3)', () => {
    const results = autocompleteVerseOsisID({ text: 'Matthew 15:3', limit: 3 });
    expect(results).toEqual(['Matthew 15:3', 'Matthew 15:30', 'Matthew 15:31']);
  });

  it('returns single suggestion when fully qualified verse is provided', () => {
    const results = autocompleteVerseOsisID({ text: 'Matthew 15:33', limit: 3 });
    expect(results).toEqual(['Matthew 15:33']);
  });

  it('should suggest chapters when an alias that matches exactly is provided', () => {
    const results = autocompleteVerseOsisID({ text: 'Matt', limit: 3 });
    expect(results).toEqual(['Matthew 1', 'Matthew 2', 'Matthew 3']);
  });

  it('should handle empty input', () => {
    const results = autocompleteVerseOsisID({ text: '', limit: 5 });
    expect(results).toEqual([]);
  });

  it('should respect limit', () => {
    const results = autocompleteVerseOsisID({ text: 'M', limit: 2 });
    expect(results.length).toBe(2);
  });

  describe('collections filter', () => {
    it('filters by workOsisID (e.g., BOM)', () => {
      // 1 Nephi is in BOM
      const results = autocompleteVerseOsisID({
        text: '1 Nephi',
        limit: 5,
        collections: ['BofM'],
      });
      expect(results).toContain('1 Nephi 1');
      expect(results.every((r) => r.startsWith('1 Nephi'))).toBe(true);

      // Genesis is NOT in BOM
      const results2 = autocompleteVerseOsisID({
        text: 'Gen',
        limit: 5,
        collections: ['BofM'],
      });
      expect(results2).toEqual([]);
    });

    it('filters by group name (e.g., NT)', () => {
      // Matthew is in NT
      const results = autocompleteVerseOsisID({
        text: 'Matt',
        limit: 5,
        collections: ['NT'],
      });
      expect(results).toContain('Matthew 1');

      // Genesis is NOT in NT
      const results2 = autocompleteVerseOsisID({
        text: 'Gen',
        limit: 5,
        collections: ['NT'],
      });
      expect(results2).toEqual([]);
    });

    it('supports multiple collections (e.g., ["BofM", "PGP"])', () => {
      // 1 Nephi is in BOM
      const results1 = autocompleteVerseOsisID({
        text: '1 Nephi',
        limit: 5,
        collections: ['BofM', 'PGP'],
      });
      expect(results1).toContain('1 Nephi 1');

      // Moses is in PGP
      const results2 = autocompleteVerseOsisID({
        text: 'Moses',
        limit: 5,
        collections: ['BofM', 'PGP'],
      });
      expect(results2).toContain('Moses 1');

      // "Obadiah" is NOT in BOM or PGP
      const results3 = autocompleteVerseOsisID({
        text: 'Obadiah',
        limit: 5,
        collections: ['BofM', 'PGP'],
      });
      expect(results3).toEqual([]);
    });

    it('ignores filter when collections is empty', () => {
      const results = autocompleteVerseOsisID({
        text: 'Genesis',
        limit: 5,
        collections: [],
      });
      expect(results).toContain('Genesis 1');
    });

    it('ignores filter when collections is missing', () => {
      const results = autocompleteVerseOsisID({
        text: 'Genesis',
        limit: 5,
      });
      expect(results).toContain('Genesis 1');
    });

    it('Mode 1 (partial book) respects collections', () => {
      // "Ma" can match Malachi (OT), Matthew (NT), Mark (NT)
      const results = autocompleteVerseOsisID({
        text: 'Ma',
        limit: 10,
        collections: ['NT'],
      });
      expect(results).toContain('Matthew');
      expect(results).toContain('Mark');
      expect(results).not.toContain('Malachi');
    });
  });
});
