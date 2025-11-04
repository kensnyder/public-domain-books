import { Merge } from 'type-fest';

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
  work: WorkShape;
  chapterCount: number;
  verseCounts: number[];
}>;
export type RawWorkShape = {
  workOsisID: string;
  workTitle: string;
  workSubtitle: string;
  aliases: string[];
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
  briefOverview: string;
  summary: string;
  externalContext: string;
  externalReferences: string;
  seeAlso: string[];
  sectionTitles: string[];
  themes: string[];
  practicalQuestions: string[];
};
export type VerseDataFileShape = {
  work: WorkShape;
  compiledAt: string;
  sources: string[];
  books: BookShape[];
  verses: VerseShape[];
};
