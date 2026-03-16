import ScriptureRef from './ScriptureRef.ts';
import ScriptureRefCollection from './ScriptureRefCollection.ts';
import type { WorkShape } from '../types/data-shapes.ts';
import { books } from '../../data/compiled/books-and-works.ts';

export default class Work {
  private _data: WorkShape | undefined;
  private _workOsisID: string;

  constructor(workOsisID: string, data?: WorkShape) {
    this._workOsisID = workOsisID;
    this._data = data;
  }

  get osisID(): string {
    return this._workOsisID;
  }

  get title(): string {
    return this._data?.workTitle || '';
  }

  get subtitle(): string {
    return this._data?.workSubtitle || '';
  }

  get aliases(): string[] {
    return this._data?.aliases || [];
  }

  get hasData(): boolean {
    return this._data?.hasData || false;
  }

  get books(): ScriptureRefCollection {
    const bookOsisIDs = books
      .filter((b) => b.workOsisID === this._workOsisID)
      .map((b) => b.bookOsisID);
    return new ScriptureRefCollection(bookOsisIDs);
  }
}
