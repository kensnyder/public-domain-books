import { Merge } from 'type-fest';

// Data shapes
export type RawBookShape = {
  workOsisID: string;
  bookOsisID: string;
  bookName: string;
  bookSubtitle: string;
  paratext: string | null;
  aliases: string[];
  groups: string[];
  authors: string[];
  dateEarliest: string;
  dateLatest: string;
  chapterLabel: string;
  verseLabel: string;
  traditions: string[];
  hasData: boolean;
};
export type BookShape = Merge<RawBookShape, {
  work: WorkShape | null;
  chapterCount: number;
  verseCounts: number[];
}>;
export type RawWorkShape = {
  workOsisID: string;
  workTitle: string;
  workSubtitle: string;
  aliases: string[];
  hasData: boolean;
};
export type WorkShape = Merge<RawWorkShape, {
  books: BookShape[];
  bookCount: number;
}>;
export type VerseShape = {
  workOsisID: string;
  bookOsisID: string;
  bookGroups: string[];
  chapterTitle: string;
  chapterNumber: number;
  chapterOsisID: string;
  verseNumber: number;
  verseOsisID: string;
  verseText: string;
  verseLanguage: string;
  verseSequence: number;
  authors: string[];
  traditions: string[];
};
export type AnalysisShape = {
  chapterOsisID: string;
  briefOverview: string;
  summary: string;
  externalContext: string;
  externalReferences: string;
  seeAlso: string[];
  sectionTitles: string[];
  themes: string[];
  practicalQuestions: string[];
  uncertainAreas: string;
  createdAt: string;
  modelId: string;
};
export type CommentaryShape = {
  sequence: number;
  bookOsisID: string;
  chapterOsisID: string;
  verseOsisID: string;
  citation: string;
  html: string;
}
export type DictionaryWordShape = {
  workOsisID: string;
  word: string;
  definitionHtml: string;
  seeAlso: string;
}
export type CrossReferenceShape = {
  from: string;
  to: string;
  thru: string;
  votes: number;
};
export type MapShape = {};
export type GeocodingShape = {}
export type ArtworkShape = {}
// Shapes for files that contain multiple entries
export type VerseDataFileShape = {
  work: WorkShape;
  compiledAt: string;
  sources: string[];
  books: BookShape[];
  verses: VerseShape[];
};
export type CrossReferenceDataFileShape = {
  license: string;
  date: string;
  bookOsisID: string;
  references: CrossReferenceShape[];
}
export type CommentaryDataFileShape = {
  author: string;
  title: string;
  copyright: string;
  source: string;
  attribution: string;
  bookOsisID: string;
  bookName: string;
  importedAt: string;
  commentary: CommentaryShape[];
}
export type DictionaryDataFileShape = {
  author: string;
  title: string;
  copyright: string;
  source: string;
  attribution: string;
  dictionaryID: string;
  dictionaryLetter: string;
  workOsisID: string;
  importedAt: string;
  entries: Record<string, DictionaryWordShape[]>;
}
// Manifest file shape
export type ManifestShape = {
  works: {
    dataPath: string;
  };
  books: {
    dataPath: string;
  };
  verses: Array<{
    dataPath: string;
    workOsisID: string;
    compiledAt: string;
  }>;
  crossReferences: Array<{
    dataPath: string;
    workOsisID: string;
    date: string;
    license: string;
  }>;
  geocoding: Array<{
    url: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    compiledAt: string;
  }>;
  maps: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    verseOsisID: string | null;
    compiledAt: string;
  }>;
  artwork: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string | null;
    verseOsisID: string | null;
    compiledAt: string;
  }>;
  analysis: Array<{
    dataPath: string;
    workOsisID: string;
    bookOsisID: string;
    chapterOsisID: string;
    modelId: string;
    createdAt: string;
  }>;
  commentaries: Array<{
    dataPath: string;
    commentaryID: string;
    workOsisID: string;
    bookOsisID: string;
    compiledAt: string;
  }>;
  dictionaries: Array<{
    dataPath: string;
    dictionaryID: string;
    workOsisID: string;
    sectionLetter: string;
    compiledAt: string;
  }>;
};
