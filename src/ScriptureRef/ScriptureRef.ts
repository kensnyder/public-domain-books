import ScriptureRefCollection from './ScriptureRefCollection.ts';
import Work from './Work.ts';
import Book from './Book.ts';
import BookChapter from './BookChapter.ts';
import BookChapterVerse from './BookChapterVerse.ts';
import validateOsisID from '../tools/validateOsisID/validateOsisID.ts';
import parseOsisID from '../tools/parseOsisID/parseOsisID.ts';
import parseReference from '../tools/parseReference/parseReference.ts';
import citationToOsisIDs from '../tools/citationToOsisIDs/citationToOsisIDs.ts';
import osisToCitation from '../tools/osisToCitation/osisToCitation.ts';
import getBookByName from '../tools/getBookByName/getBookByName.ts';
import getWorkByName from '../tools/getWorkByName/getWorkByName.ts';

export interface OsisValidation {
  /** True if all provided components are valid and exist in data */
  isValid: boolean;
  /** True if the book OSIS ID exists in the data */
  bookExists: boolean;
  /** True if the chapter number exists within the book */
  chapterExists: boolean;
  /** True if the verse number exists within the chapter */
  verseExists: boolean;
  /** Specific failure point: 'INVALID_BOOK', 'INVALID_CHAPTER', 'INVALID_VERSE', or null */
  errorCode: 'INVALID_BOOK' | 'INVALID_CHAPTER' | 'INVALID_VERSE' | null;
}

export default class ScriptureRef {
  // 1. Private state
  private _bookOsisID: string | null;
  private _chapterNumber: number | null;
  private _verseNumber: number | null;
  private _cache: Map<string, any> = new Map();

  /**
   * Directly creates a reference from components.
   * Components are stored as-is (Keep and Flag approach).
   */
  constructor(book?: string | null, chapter?: number | null, verse?: number | null) {
    this._bookOsisID = book || null;
    this._chapterNumber = chapter === undefined ? null : chapter;
    this._verseNumber = verse === undefined ? null : verse;
  }

  // 2. Factory methods
  static fromOsisID(osisID: string): ScriptureRef {
    const { bookOsisID, chapterNumber, verseNumber } = parseOsisID(osisID);
    return new ScriptureRef(bookOsisID, chapterNumber, verseNumber);
  }

  static fromCitation(citation: string): ScriptureRef {
    const { bookOsisID, chapterNumber, verseNumber } = parseReference(citation);
    return new ScriptureRef(bookOsisID, chapterNumber, verseNumber);
  }

  static fromRange(citation: string): ScriptureRefCollection {
    const osisIDs = citationToOsisIDs(citation);
    return new ScriptureRefCollection(osisIDs);
  }

  // 3. Status & Validation (for reading apps)
  /** True if all provided components exist in the data */
  get isValid(): boolean {
    return this.validation.isValid;
  }

  /** Presence check: Did the user provide a book? */
  get hasBook(): boolean {
    return this._bookOsisID !== null;
  }

  /** Presence check: Did the user provide a chapter? */
  get hasChapter(): boolean {
    return this._chapterNumber !== null;
  }

  /** Presence check: Did the user provide a verse? */
  get hasVerse(): boolean {
    return this._verseNumber !== null;
  }

  /** Canonical existence check and error reporting */
  get validation(): OsisValidation {
    if (this._cache.has('validation')) {
      return this._cache.get('validation');
    }
    const toolValidation = validateOsisID(this.osisID || '');

    const validation: OsisValidation = {
      isValid: toolValidation.isValid,
      bookExists: toolValidation.isBookValid,
      chapterExists: toolValidation.isChapterValid,
      verseExists: toolValidation.isVerseValid,
      errorCode: null,
    };

    if (!validation.bookExists) {
      validation.errorCode = 'INVALID_BOOK';
    } else if (this.hasChapter && !validation.chapterExists) {
      validation.errorCode = 'INVALID_CHAPTER';
    } else if (this.hasVerse && !validation.verseExists) {
      validation.errorCode = 'INVALID_VERSE';
    }

    this._cache.set('validation', validation);
    return validation;
  }

  // 3a. Lazy Getters (Calculated once, then cached)
  get osisID(): string | null {
    if (this._cache.has('osisID')) {
      return this._cache.get('osisID');
    }
    let id: string | null = null;
    if (this._bookOsisID) {
      id = this._bookOsisID;
      if (this._chapterNumber !== null) {
        id += `.${this._chapterNumber}`;
        if (this._verseNumber !== null) {
          id += `.${this._verseNumber}`;
        }
      }
    }
    this._cache.set('osisID', id);
    return id;
  }

  get bookOsisID(): string | null {
    return this._bookOsisID;
  }

  get chapterNumber(): number | null {
    return this._chapterNumber;
  }

  get verseNumber(): number | null {
    return this._verseNumber;
  }

  get citation(): string | null {
    if (this._cache.has('citation')) {
      return this._cache.get('citation');
    }
    const cit = osisToCitation(this.osisID || '')?.short || null;
    this._cache.set('citation', cit);
    return cit;
  }

  get longCitation(): string | null {
    if (this._cache.has('longCitation')) {
      return this._cache.get('longCitation');
    }
    const cit = osisToCitation(this.osisID || '')?.long || null;
    this._cache.set('longCitation', cit);
    return cit;
  }

  // 3b. UI / Input Ergonomics
  // Useful for knowing when to add a " " or ":" in a text input
  get suggestedNextChar(): ' ' | ':' | '' {
    if (!this.hasBook) {
      return '';
    }
    if (!this.hasChapter) {
      return ' ';
    }
    if (!this.hasVerse) {
      return ':';
    }
    return '';
  }

  // 3c. Lazy get properties by unit.
  // Returns null if the component is missing or if parent path is invalid.
  get work(): Work | null {
    if (!this.hasBook) {
      return null;
    }
    if (this._cache.has('work')) {
      return this._cache.get('work');
    }
    const bookData = getBookByName(this._bookOsisID!);
    if (!bookData) {
      const work = new Work(this._bookOsisID!);
      this._cache.set('work', work);
      return work;
    }
    const workData = getWorkByName(bookData.workOsisID);
    const work = new Work(bookData.workOsisID, workData);
    this._cache.set('work', work);
    return work;
  }

  get book(): Book | null {
    if (!this.hasBook) {
      return null;
    }
    if (this._cache.has('book')) {
      return this._cache.get('book');
    }
    const bookData = getBookByName(this._bookOsisID!);
    const book = new Book(this._bookOsisID!, bookData);
    this._cache.set('book', book);
    return book;
  }

  get chapter(): BookChapter | null {
    if (!this.hasBook || !this.hasChapter || !this.book) {
      return null;
    }
    if (this._cache.has('chapter')) {
      return this._cache.get('chapter');
    }
    const chapter = new BookChapter(this.book, this._chapterNumber!);
    this._cache.set('chapter', chapter);
    return chapter;
  }

  get verse(): BookChapterVerse | null {
    if (!this.hasBook || !this.hasChapter || !this.hasVerse || !this.chapter) {
      return null;
    }
    if (this._cache.has('verse')) {
      return this._cache.get('verse');
    }
    const verse = new BookChapterVerse(this.chapter, this._verseNumber!);
    this._cache.set('verse', verse);
    return verse;
  }

  // 4. "With-ers" for modification (Returns NEW instance)
  withBook(bookTitle: string | null): ScriptureRef {
    return new ScriptureRef(bookTitle, this._chapterNumber, this._verseNumber);
  }

  withChapter(chapter: number | null): ScriptureRef {
    return new ScriptureRef(this._bookOsisID, chapter, this._verseNumber);
  }

  withVerse(verse: number | null): ScriptureRef {
    return new ScriptureRef(this._bookOsisID, this._chapterNumber, verse);
  }

  // 5. Navigation (Returns NEW instance)
  // Access through sub-unit getters, e.g. ref.verse.next()

  // 6. Utility methods
  toString(): string {
    return this.osisID || '';
  }

  toJSON(): string {
    return this.osisID || '';
  }
}
