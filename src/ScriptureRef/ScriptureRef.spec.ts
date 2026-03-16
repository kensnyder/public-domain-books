import { describe, it, expect } from 'bun:test';
import ScriptureRef from './ScriptureRef.ts';
import ScriptureRefCollection from './ScriptureRefCollection.ts';

describe('ScriptureRef', () => {
  describe('constructor', () => {
    it('should create a reference with provided components', () => {
      const ref = new ScriptureRef('Gen', 1, 1);
      expect(ref.bookOsisID).toBe('Gen');
      expect(ref.chapterNumber).toBe(1);
      expect(ref.verseNumber).toBe(1);
    });

    it('should handle null values (Keep and Flag)', () => {
      const ref = new ScriptureRef(null, null, null);
      expect(ref.bookOsisID).toBeNull();
      expect(ref.chapterNumber).toBeNull();
      expect(ref.verseNumber).toBeNull();
      expect(ref.isValid).toBe(false);
    });
  });

  describe('factory methods', () => {
    it('fromOsisID should parse OSIS ID correctly', () => {
      const ref = ScriptureRef.fromOsisID('Gen.1.1');
      expect(ref.bookOsisID).toBe('Gen');
      expect(ref.chapterNumber).toBe(1);
      expect(ref.verseNumber).toBe(1);
    });

    it('fromCitation should parse human-readable citation', () => {
      const ref = ScriptureRef.fromCitation('John 3:16');
      expect(ref.bookOsisID).toBe('John');
      expect(ref.chapterNumber).toBe(3);
      expect(ref.verseNumber).toBe(16);
    });

    it('fromRange should return a collection', () => {
      const collection = ScriptureRef.fromRange('John 3:16-17');
      expect(collection).toBeInstanceOf(ScriptureRefCollection);
      expect(collection.length).toBe(2);
      const refs = collection.toArray();
      expect(refs[0].osisID).toBe('John.3.16');
      expect(refs[1].osisID).toBe('John.3.17');
    });
  });

  describe('validation', () => {
    it('should report isValid correctly for valid reference', () => {
      const ref = ScriptureRef.fromOsisID('Gen.1.1');
      expect(ref.isValid).toBe(true);
      expect(ref.validation.bookExists).toBe(true);
      expect(ref.validation.chapterExists).toBe(true);
      expect(ref.validation.verseExists).toBe(true);
      expect(ref.validation.errorCode).toBeNull();
    });

    it('should report isValid=false for invalid book', () => {
      const ref = new ScriptureRef('InvalidBook', 1, 1);
      expect(ref.isValid).toBe(false);
      expect(ref.validation.bookExists).toBe(false);
      expect(ref.validation.errorCode).toBe('INVALID_BOOK');
    });

    it('should report isValid=false for invalid chapter', () => {
      const ref = new ScriptureRef('Gen', 999, 1);
      expect(ref.isValid).toBe(false);
      expect(ref.validation.chapterExists).toBe(false);
      expect(ref.validation.errorCode).toBe('INVALID_CHAPTER');
    });

    it('should report isValid=false for invalid verse', () => {
      const ref = new ScriptureRef('Gen', 1, 999);
      expect(ref.isValid).toBe(false);
      expect(ref.validation.verseExists).toBe(false);
      expect(ref.validation.errorCode).toBe('INVALID_VERSE');
    });
  });

  describe('navigation', () => {
    it('verse.next() should roll over to next chapter', () => {
      // Genesis 1 has 31 verses
      const ref = ScriptureRef.fromOsisID('Gen.1.31');
      const next = ref.verse?.next();
      expect(next).not.toBeNull();
      expect(next?.osisID).toBe('Gen.2.1');
    });

    it('verse.prev() should roll over to previous chapter', () => {
      const ref = ScriptureRef.fromOsisID('Gen.2.1');
      const prev = ref.verse?.prev();
      expect(prev).not.toBeNull();
      expect(prev?.osisID).toBe('Gen.1.31');
    });

    it('chapter.next() should go to next chapter', () => {
      const ref = ScriptureRef.fromOsisID('Gen.1');
      const next = ref.chapter?.next();
      expect(next?.osisID).toBe('Gen.2');
    });

    it('book.next() should go to next book', () => {
      const ref = ScriptureRef.fromOsisID('Gen');
      const next = ref.book?.next();
      expect(next?.osisID).toBe('Exod');
    });
  });

  describe('Lazy properties', () => {
    it('should navigate up and down the hierarchy', () => {
      const ref = ScriptureRef.fromOsisID('John.3.16');
      expect(ref.verse?.number).toBe(16);
      expect(ref.verse?.chapter.number).toBe(3);
      expect(ref.verse?.book.osisID).toBe('John');
      expect(ref.verse?.work.title).toBe('The Holy Bible');
    });
  });
});

describe('ScriptureRefCollection', () => {
  it('should be lazy iterable', () => {
    const col = ScriptureRef.fromRange('John 3:16-18');
    const ids = [];
    for (const ref of col) {
      ids.push(ref.osisID);
    }
    expect(ids).toEqual(['John.3.16', 'John.3.17', 'John.3.18']);
  });

  it('should support array methods', () => {
    const col = ScriptureRef.fromRange('John 3:16-18');
    expect(col.map(r => r.verseNumber)).toEqual([16, 17, 18]);
    expect(col.filter(r => r.verseNumber === 17).length).toBe(1);
    expect(col.some(r => r.verseNumber === 16)).toBe(true);
    expect(col.every(r => r.bookOsisID === 'John')).toBe(true);
  });
});
