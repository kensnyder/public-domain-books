import { describe, expect, it } from 'bun:test';
import getChapterList from './getChapterList.ts';

describe('getChapterList', () => {
  it('should handle single-chapter books', () => {
    const abbr = getChapterList('Omni').map((c) => c.chapterAbbr);
    expect(abbr).toEqual(['1']);
  });
  it('should handle multi-chapter books', () => {
    const abbr = getChapterList('Moses').map((c) => c.chapterAbbr);
    expect(abbr).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
  });
  it('should handle AddEsth', () => {
    const abbr = getChapterList('AddEsth').map((c) => c.chapterAbbr);
    expect(abbr).toEqual(['10', '11', '12', '13', '14', '15', '16']);
  });
  it('should throw if book not found', () => {
    expect(() => getChapterList('INVALID')).toThrow('Book INVALID not found');
  });
});
