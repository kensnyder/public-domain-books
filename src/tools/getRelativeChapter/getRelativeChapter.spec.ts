import { describe, expect, it } from 'bun:test';
import { getRelativeChapter } from './getRelativeChapter.ts';

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
});
