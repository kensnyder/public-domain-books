import { describe, expect, it } from 'bun:test';
import getVerseSiblings from './getVerseSiblings.ts';

describe('getVerseSiblings', () => {
  it('should handle distance 1', () => {
    const osisIDs = getVerseSiblings('John.3.16');
    expect(osisIDs).toEqual(['John.3.15', 'John.3.16', 'John.3.17']);
  });
  it('should handle distance 2', () => {
    const osisIDs = getVerseSiblings('John.3.16', 0, 2);
    expect(osisIDs).toEqual(['John.3.16', 'John.3.17', 'John.3.18']);
  });
  it('should not read before verse 1', () => {
    const osisIDs = getVerseSiblings('John.3.1', 1, 2);
    expect(osisIDs).toEqual(['John.3.1', 'John.3.2', 'John.3.3']);
  });
  it('should throw if either back and fwd are less than 0', () => {
    const thrower = () => getVerseSiblings('John.3.1', -1, 2);
    expect(thrower).toThrow(TypeError);
  });
  it('should return empty array for invalid OsisID', () => {
    expect(getVerseSiblings('invalid')).toEqual([]);
  });
});
