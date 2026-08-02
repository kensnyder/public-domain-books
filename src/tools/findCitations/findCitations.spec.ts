import { describe, expect, it } from 'bun:test';
import findCitations from './findCitations.ts';

describe('findCitations', () => {
  it('should find a single verse citation', () => {
    const text = 'As we read in John 3:16, God so loved the world.';
    const results = findCitations(text);
    expect(results).toHaveLength(1);
    expect(results[0].citation).toBe('John 3:16');
    expect(results[0].verseOsisIDs).toEqual(['John.3.16']);
    expect(results[0].index).toBe(text.indexOf('John 3:16'));
  });

  it('should find multiple citations in a passage', () => {
    const text = 'The prophecy in Isaiah 53:5 is fulfilled by Matthew 27:35.';
    const results = findCitations(text);
    expect(results).toHaveLength(2);
    expect(results[0].citation).toBe('Isaiah 53:5');
    expect(results[0].verseOsisIDs).toEqual(['Isa.53.5']);
    expect(results[1].citation).toBe('Matthew 27:35');
    expect(results[1].verseOsisIDs).toEqual(['Matt.27.35']);
  });

  it('should find a verse range citation', () => {
    const text =
      'The creation account in Genesis 1:1-3 describes the beginning.';
    const results = findCitations(text);
    expect(results).toHaveLength(1);
    expect(results[0].citation).toBe('Genesis 1:1-3');
    expect(results[0].verseOsisIDs).toEqual(['Gen.1.1', 'Gen.1.2', 'Gen.1.3']);
  });

  it('should find a citation with n-dash range', () => {
    const text = 'Consider the passage 1st Samuel 3:7–8 on this topic.';
    const results = findCitations(text);
    expect(results).toHaveLength(1);
    expect(results[0].citation).toBe('1st Samuel 3:7–8');
    expect(results[0].verseOsisIDs).toEqual(['1Sam.3.7', '1Sam.3.8']);
  });

  it('should find a citation with an abbreviated book name', () => {
    const text = 'See Gen. 1:1 for the opening verse.';
    const results = findCitations(text);
    expect(results).toHaveLength(1);
    expect(results[0].verseOsisIDs).toEqual(['Gen.1.1']);
  });

  it('should return the correct character index', () => {
    const text = 'The sermon on the mount begins at Matthew 5:3.';
    const results = findCitations(text);
    expect(results[0].index).toBe(text.indexOf('Matthew 5:3'));
  });

  it('should return empty array when no citations found', () => {
    const text = 'This sentence contains no scripture references at all.';
    const results = findCitations(text);
    expect(results).toEqual([]);
  });

  it('should not match a book name without chapter and verse', () => {
    // "John" alone should not produce a result
    const text = 'John went to the market.';
    const results = findCitations(text);
    expect(results).toEqual([]);
  });

  it('should find citations at the start and end of text', () => {
    const text = 'Psalm 23:1 is a beloved verse, as is Revelation 22:21.';
    const results = findCitations(text);
    expect(results).toHaveLength(2);
    expect(results[0].verseOsisIDs).toContain('Ps.23.1');
    expect(results[1].verseOsisIDs).toContain('Rev.22.21');
  });

  it('should handle a cross-chapter range citation', () => {
    const text =
      'The infancy narrative spans Matthew 1:1–2:23 in its entirety.';
    const results = findCitations(text);
    expect(results).toHaveLength(1);
    expect(results[0].verseOsisIDs[0]).toBe('Matt.1.1');
    expect(results[0].verseOsisIDs[47]).toBe('Matt.2.23');
  });

  it('should handle semicolons with numbered book names', () => {
    const text =
      'Just as He promised to our fathers, To Abraham and to his descendants forever.” [Gen 17:7; 18:18; 22:17; 1 Sam 2:1-10; Mic 7:20]';
    const results = findCitations(text);
    expect(results[0].citation).toBe('Gen 17:7');
    expect(results[0].verseOsisIDs).toEqual(['Gen.17.7']);
    expect(results[1].citation).toBe('18:18');
    expect(results[1].verseOsisIDs).toEqual(['Gen.18.18']);
    expect(results[2].citation).toBe('22:17');
    expect(results[2].verseOsisIDs).toEqual(['Gen.22.17']);
    expect(results[3].citation).toBe('1 Sam 2:1-10');
    expect(results[4].citation).toBe('Mic 7:20');
  });

  it('should handle semicolons without surrounding characters', () => {
    const text = 'Gen 17:7; 1 Cor 15:49';
    const results = findCitations(text);
    expect(results).toEqual([
      {
        citation: 'Gen 17:7',
        index: 0,
        verseOsisIDs: ['Gen.17.7'],
      },
      {
        citation: '1 Cor 15:49',
        index: 10,
        verseOsisIDs: ['1Cor.15.49'],
      },
    ]);
  });

  it('should not include trailing punctuation in the citation string', () => {
    const text =
      'This is proven by Romans 8:28, which says all things work together.';
    const results = findCitations(text);
    expect(results[0].citation).toBe('Romans 8:28');
  });

  it('should escape regex characters in book names', () => {
    // "ST. MATTHEW" contains a dot which could match any character if unescaped
    const text = 'Let us read from ST. MATTHEW 1:1 and not STX MATTHEW 1:1.';
    const results = findCitations(text);
    expect(results).toHaveLength(2);
    expect(results[0].citation).toBe('ST. MATTHEW 1:1');
    expect(results[0].verseOsisIDs).toEqual(['Matt.1.1']);
    // STX MATTHEW correctly avoids the ST. MATTHEW wildcard and properly parses MATTHEW 1:1
    expect(results[1].citation).toBe('MATTHEW 1:1');
    expect(results[1].verseOsisIDs).toEqual(['Matt.1.1']);
  });
});
