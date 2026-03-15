import { describe, expect, it } from 'bun:test';
import getWorkByName from './getWorkByName.ts';

describe('getWorkByName', () => {
  it('should find a work by its OsisID', () => {
    const work = getWorkByName('BofM');
    expect(work).toBeDefined();
    expect(work?.workOsisID).toBe('BofM');
  });

  it('should be case-insensitive', () => {
    const work = getWorkByName('bofm');
    expect(work).toBeDefined();
    expect(work?.workOsisID).toBe('BofM');
  });

  it('should return undefined for unknown work', () => {
    const work = getWorkByName('INVALID');
    expect(work).toBeUndefined();
  });

  it('should handle empty input', () => {
    const work = getWorkByName('');
    expect(work).toBeUndefined();
  });
});
