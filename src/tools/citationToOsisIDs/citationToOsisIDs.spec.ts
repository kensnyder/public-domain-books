import { describe, expect, it } from 'bun:test';
import citationToOsisIDs from './citationToOsisIDs.ts';

describe('citationToOsisIDs', () => {
  it('should handle one verse', () => {
    const osisIDs = citationToOsisIDs('John 3:16');
    expect(osisIDs).toEqual(['John.3.16']);
  });
  it('should handle verse range', () => {
    const osisIDs = citationToOsisIDs('Genesis 1:1-3');
    expect(osisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
  });
  it('should handle range across chapters', () => {
    const osisIDs = citationToOsisIDs('Matthew 1:1–2:23');
    expect(osisIDs[0]).toBe('Matt.1.1');
    expect(osisIDs[osisIDs.length - 1]).toBe('Matt.2.23');
    expect(osisIDs).toContain('Matt.1.25');
    expect(osisIDs).toHaveLength(48);
  });
  it('should ignore descending ranges', () => {
    const osisIDs = citationToOsisIDs('Genesis 1:5-3');
    expect(osisIDs).toEqual(['Gen.1.5']);
  });
  it('should handle d&c', () => {
    const osisIDs = citationToOsisIDs('d&c 1:3');
    expect(osisIDs).toEqual(['D&C.1.3']);
  });
  it('should handle abbreviations', () => {
    const osisIDs = citationToOsisIDs('Gen. 1:1 - 3');
    expect(osisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
  });
  it('should handle comma-separated citations', () => {
    const osisIDs = citationToOsisIDs('2 Kings 1:1, Alma 3:7');
    expect(osisIDs).toEqual(['2Kgs.1.1', 'Alma.3.7']);
  });
  it('should handle verses by comma', () => {
    const osisIDs = citationToOsisIDs('2 Kings 1:1,15');
    expect(osisIDs).toEqual(['2Kgs.1.1', '2Kgs.1.15']);
  });
  it('should handle continuation commas', () => {
    const osisIDs = citationToOsisIDs('Dan 8:16, 9:21');
    expect(osisIDs).toEqual(['Dan.8.16', 'Dan.9.21']);
  });
  it('should handle semicolons', () => {
    const osisIDs = citationToOsisIDs('Dan 8:16; 9:21');
    expect(osisIDs).toEqual(['Dan.8.16', 'Dan.9.21']);
  });
  it('should handle n-dashes', () => {
    const osisIDs = citationToOsisIDs('1 Samuel 3:7–8');
    expect(osisIDs).toEqual(['1Sam.3.7', '1Sam.3.8']);
  });
  it('should omit invalid formats', () => {
    const osisIDs = citationToOsisIDs('hello world');
    expect(osisIDs).toEqual([]);
  });
  it('should handle book and chapter only', () => {
    const osisIDs = citationToOsisIDs('John 3');
    expect(osisIDs).toEqual(['John.3.1']);
  });
  it('should handle chapter range without colons', () => {
    const osisIDs = citationToOsisIDs('2 Kings 3-4');
    expect(osisIDs).toEqual(['2Kgs.3.1']);
  });
  it('should skip lone verse at beginning of citation', () => {
    const osisIDs = citationToOsisIDs('15, John 3:16');
    expect(osisIDs).toEqual(['John.3.16']);
  });
});
