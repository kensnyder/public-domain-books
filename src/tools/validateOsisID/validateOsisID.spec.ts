import { describe, expect, it } from 'bun:test';
import validateOsisID, { isValidOsisID, isValidVerseOsisID } from './validateOsisID.ts';

describe('validateOsisID', () => {
  it('should check correct and known verse', () => {
    const report = validateOsisID('Gen.1.1');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": true,
        "hasVerse": true,
        "isBookValid": true,
        "isChapterValid": true,
        "isValid": true,
        "isVerseValid": true,
      }
    `);
  });
  it('should check correct and known chapter', () => {
    const report = validateOsisID('John.1');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": true,
        "hasVerse": false,
        "isBookValid": true,
        "isChapterValid": true,
        "isValid": true,
        "isVerseValid": false,
      }
    `);
  });
  it('should check correct and known book', () => {
    const report = validateOsisID('Omni');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": false,
        "hasVerse": false,
        "isBookValid": true,
        "isChapterValid": false,
        "isValid": true,
        "isVerseValid": false,
      }
    `);
  });
  it('should see out of range chapters', () => {
    const report = validateOsisID('Matt.125.1');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": true,
        "hasVerse": true,
        "isBookValid": true,
        "isChapterValid": false,
        "isValid": false,
        "isVerseValid": false,
      }
    `);
  });
  it('should see out of range verses', () => {
    const report = validateOsisID('Mark.1.125');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": true,
        "hasVerse": true,
        "isBookValid": true,
        "isChapterValid": true,
        "isValid": false,
        "isVerseValid": false,
      }
    `);
  });
  it('should identify unknown books', () => {
    const report = validateOsisID('Foobar.1.1');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": true,
        "hasVerse": true,
        "isBookValid": false,
        "isChapterValid": false,
        "isValid": false,
        "isVerseValid": false,
      }
    `);
  });
  it('should identify arbitrary text', () => {
    const report = validateOsisID('and stuff and things');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": true,
        "hasChapter": false,
        "hasVerse": false,
        "isBookValid": false,
        "isChapterValid": false,
        "isValid": false,
        "isVerseValid": false,
      }
    `);
  });
  it('should identify empty text', () => {
    const report = validateOsisID('');
    expect(report).toMatchInlineSnapshot(`
      {
        "hasBook": false,
        "hasChapter": false,
        "hasVerse": false,
        "isBookValid": false,
        "isChapterValid": false,
        "isValid": false,
        "isVerseValid": false,
      }
    `);
  });

  it('isValidOsisID should return true for valid ID', () => {
    expect(isValidOsisID('Gen.1.1')).toBe(true);
  });

  it('isValidVerseOsisID should return true for valid verse ID', () => {
    expect(isValidVerseOsisID('Gen.1.1')).toBe(true);
  });
});
