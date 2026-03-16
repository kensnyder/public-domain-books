import ScriptureRef from './ScriptureRef.ts';
import ScriptureRefCollection from './ScriptureRefCollection.ts';
import Work from './Work.ts';
import Book from './Book.ts';
import { getPreviousChapter, getNextChapter } from '../tools/getRelativeChapter/getRelativeChapter.ts';
import { verseCounts } from '../../data/compiled/books-and-works.ts';

export default class BookChapter {
  private _book: Book;
  private _chapterNumber: number;

  constructor(book: Book, chapterNumber: number) {
    this._book = book;
    this._chapterNumber = chapterNumber;
  }

  get work(): Work {
    return this._book.work;
  }

  get book(): Book {
    return this._book;
  }

  get osisID(): string {
    return `${this._book.osisID}.${this._chapterNumber}`;
  }

  get number(): number {
    return this._chapterNumber;
  }

  get unitName(): string {
    return this._chapterNumber === 0 ? 'Prologue' : this._book.chapterUnitName;
  }

  get citation(): string {
    return `${this._book.osisID} ${this._chapterNumber}`;
  }

  get longCitation(): string {
    return `${this._book.title} ${this._chapterNumber}`;
  }

  get verses(): ScriptureRefCollection {
    const count = verseCounts[this._book.osisID]?.[this._chapterNumber] || 0;
    const verseOsisIDs: string[] = [];
    for (let i = 1; i <= count; i++) {
      verseOsisIDs.push(`${this._book.osisID}.${this._chapterNumber}.${i}`);
    }
    return new ScriptureRefCollection(verseOsisIDs);
  }

  // Navigation
  prev(): ScriptureRef | null {
    const res = getPreviousChapter(this._book.osisID, this._chapterNumber);
    if (!res) {
      return null;
    }
    return ScriptureRef.fromOsisID(res.chapterOsisID);
  }

  next(): ScriptureRef | null {
    const res = getNextChapter(this._book.osisID, this._chapterNumber);
    if (!res) {
      return null;
    }
    return ScriptureRef.fromOsisID(res.chapterOsisID);
  }

  // Defaults
  firstVerse(): ScriptureRef {
    return new ScriptureRef(this._book.osisID, this._chapterNumber, 1);
  }
}
