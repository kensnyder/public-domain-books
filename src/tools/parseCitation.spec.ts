import { describe, expect, it } from 'bun:test';
import parseCitation from './parseCitation.ts';

describe('parseCitation', () => {
  it('should handle one verse', () => {
    const osisIDs = parseCitation('John 3:16');
    expect(osisIDs).toEqual(['John.3.16']);
  });
  it('should handle verse range', () => {
    const osisIDs = parseCitation('Genesis 1:1-3');
    expect(osisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
  });
  it('should handle ignore descending ranges', () => {
    const osisIDs = parseCitation('Genesis 1:5-3');
    expect(osisIDs).toEqual(['Gen.1.5']);
  });
  it('should handle abbreviations', () => {
    const osisIDs = parseCitation('Gen. 1:1 - 3');
    expect(osisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
  });
  it('should handle comma-separated citations', () => {
    const osisIDs = parseCitation('2 Kings 1:1, Alma 3:7');
    expect(osisIDs).toEqual(['2Kgs.1.1', 'Alma.3.7']);
  });
  it('should handle verses by comma', () => {
    const osisIDs = parseCitation('2 Kings 1:1,15');
    expect(osisIDs).toEqual(['2Kgs.1.1', '2Kgs.1.15']);
  });
  it('should handle n-dashes', () => {
    const osisIDs = parseCitation('1 Samuel 3:7–8');
    expect(osisIDs).toEqual(['1Sam.3.7', '1Sam.3.8']);
  });
  it('should omit invalid formats', () => {
    const osisIDs = parseCitation('hello world');
    expect(osisIDs).toEqual([]);
  });
});
