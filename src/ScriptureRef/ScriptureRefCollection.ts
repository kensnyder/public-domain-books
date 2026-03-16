import ScriptureRef from './ScriptureRef.ts';

/**
 * A lazy, iterable collection of ScriptureRef objects.
 * Handles potentially thousands of verses without allocating them all at once.
 */
export default class ScriptureRefCollection implements Iterable<ScriptureRef> {
  private _osisIDs: string[];

  constructor(osisIDs: string[]) {
    this._osisIDs = osisIDs;
  }

  *[Symbol.iterator](): Iterator<ScriptureRef> {
    for (const osisID of this._osisIDs) {
      yield ScriptureRef.fromOsisID(osisID);
    }
  }

  get length(): number {
    return this._osisIDs.length;
  }

  get citation(): string {
    // This is a bit tricky without a proper range-to-citation tool
    // For now, we'll just use the first and last if it's a range, or a comma-separated list
    // Actually, ScriptureRef.fromRange might be using citationToOsisIDs which might not 
    // easily give back a clean citation if we lost the original input.
    // But the requirements say "Combined citation like 'John 3:16-18'"
    // Since we don't have a tool to convert list of OSIS IDs back to citation, 
    // we might need to store the original citation if available.
    // However, the interface doesn't show a constructor that takes a citation.
    
    if (this._osisIDs.length === 0) {
      return '';
    }
    if (this._osisIDs.length === 1) {
      return ScriptureRef.fromOsisID(this._osisIDs[0]).citation || '';
    }
    
    const first = ScriptureRef.fromOsisID(this._osisIDs[0]);
    const last = ScriptureRef.fromOsisID(this._osisIDs[this._osisIDs.length - 1]);
    
    if (first.bookOsisID === last.bookOsisID && first.chapterNumber === last.chapterNumber) {
      return `${first.bookOsisID} ${first.chapterNumber}:${first.verseNumber}-${last.verseNumber}`;
    }
    
    return `${first.citation}-${last.citation}`;
  }

  toArray(): ScriptureRef[] {
    return this._osisIDs.map(id => ScriptureRef.fromOsisID(id));
  }

  map<T>(fn: (ref: ScriptureRef) => T): T[] {
    const result: T[] = [];
    for (const ref of this) {
      result.push(fn(ref));
    }
    return result;
  }

  filter(fn: (ref: ScriptureRef) => boolean): ScriptureRef[] {
    const result: ScriptureRef[] = [];
    for (const ref of this) {
      if (fn(ref)) {
        result.push(ref);
      }
    }
    return result;
  }

  find(fn: (ref: ScriptureRef) => boolean): ScriptureRef | undefined {
    for (const ref of this) {
      if (fn(ref)) {
        return ref;
      }
    }
    return undefined;
  }

  some(fn: (ref: ScriptureRef) => boolean): boolean {
    for (const ref of this) {
      if (fn(ref)) {
        return true;
      }
    }
    return false;
  }

  every(fn: (ref: ScriptureRef) => boolean): boolean {
    for (const ref of this) {
      if (!fn(ref)) {
        return false;
      }
    }
    return true;
  }

  /** True if every ref in the collection is valid */
  get isValid(): boolean {
    return this.every(ref => ref.isValid);
  }

  /** Returns the first invalid ref found, or null if all are valid */
  get firstInvalid(): ScriptureRef | null {
    return this.find(ref => !ref.isValid) || null;
  }

  forEach(fn: (ref: ScriptureRef) => void): void {
    for (const ref of this) {
      fn(ref);
    }
  }
}
