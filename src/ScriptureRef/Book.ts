import ScriptureRef from './ScriptureRef.ts';
import ScriptureRefCollection from './ScriptureRefCollection.ts';
import Work from './Work.ts';
import type { BookShape } from '../types/data-shapes.ts';
import { getPreviousChapter, getNextChapter } from '../tools/getRelativeChapter/getRelativeChapter.ts';
import getWorkByName from '../tools/getWorkByName/getWorkByName.ts';
import { verseCounts } from '../../data/compiled/books-and-works.ts';

export default class Book {
  private _data: BookShape | undefined;
  private _bookOsisID: string;

  constructor(bookOsisID: string, data?: BookShape) {
    this._bookOsisID = bookOsisID;
    this._data = data;
  }

  get work(): Work {
    const workOsisID = this._data?.workOsisID || '';
    const workData = getWorkByName(workOsisID);
    return new Work(workOsisID, workData);
  }

  get osisID(): string {
    return this._bookOsisID;
  }

  get title(): string {
    return this._data?.bookName || '';
  }

  get subtitle(): string {
    return this._data?.bookSubtitle || '';
  }

  get paratext(): string | null {
    return this._data?.paratext || null;
  }

  get aliases(): string[] {
    return this._data?.aliases || [];
  }

  get groups(): string[] {
    return this._data?.groups || [];
  }

  get authors(): string[] {
    return this._data?.authors || [];
  }

  get dateEarliest(): string {
    return this._data?.dateEarliest || '';
  }

  get dateLatest(): string {
    return this._data?.dateLatest || '';
  }

  get traditions(): string[] {
    return this._data?.traditions || [];
  }

  get chapterUnitName(): string {
    return this._data?.chapterLabel || '';
  }

  get verseUnitName(): string {
    return this._data?.verseLabel || '';
  }

  get citation(): string {
    return this._bookOsisID;
  }

  get longCitation(): string {
    return this.title;
  }

  get hasData(): boolean {
    return this._data?.hasData || false;
  }

  get chapters(): ScriptureRefCollection {
    const counts = verseCounts[this._bookOsisID] || [];
    const chapterOsisIDs: string[] = [];
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) {
        chapterOsisIDs.push(`${this._bookOsisID}.${i}`);
      }
    }
    return new ScriptureRefCollection(chapterOsisIDs);
  }

  // Navigation
  prev(): ScriptureRef | null {
    // Requirements say always return ScriptureRef, but also say prev(): ScriptureRef | null
    // Let's stick to the interface ScriptureRef | null
    const res = getPreviousChapter(this._bookOsisID, 1);
    if (!res) {
      return null;
    }
    return ScriptureRef.fromOsisID(res.bookOsisID);
  }

  next(): ScriptureRef | null {
    // Rolling to next book/chapter
    const res = getNextChapter(this._bookOsisID, (verseCounts[this._bookOsisID]?.length || 1) - 1);
    if (!res) {
      return null;
    }
    return ScriptureRef.fromOsisID(res.bookOsisID);
  }

  // Defaults (Reading app support)
  firstChapter(): ScriptureRef {
    const counts = verseCounts[this._bookOsisID] || [];
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) {
        return new ScriptureRef(this._bookOsisID, i);
      }
    }
    return new ScriptureRef(this._bookOsisID, 1);
  }

  firstVerse(): ScriptureRef {
    const firstChapter = this.firstChapter();
    return firstChapter.withVerse(1);
  }
}
