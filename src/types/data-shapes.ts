export type RawBookShape = {
  workOsisID: string;
  bookOsisID: string;
  bookName: string;
  bookSubtitle: string;
  paratext: string;
  aliases: string[];
  groups: string[];
  authors: string[];
  dateEarliest: string;
  dateLatest: string;
  chapterLabel: string;
  verseLabel: string;
  hasData: boolean;
};
export type BookShape = {
  workOsisID: string;
  bookOsisID: string;
  bookName: string;
  bookSubtitle: string;
  paratext: string;
  aliases: string[];
  groups: string[];
  authors: string[];
  dateEarliest: string;
  dateLatest: string;
  chapterLabel: string;
  verseLabel: string;
  chapterCount: number;
  verseCounts: number[];
};
export type RawWorkShape = {
  workOsisID: string;
  workTitle: string;
  workSubtitle: string;
  aliases: string[];
};
export type WorkShape = {
  workOsisID: string;
  workTitle: string;
  workSubtitle: string;
  aliases: string[];
  chapterCount: number;
};
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
export type ChapterShape = {
  chapterNumber: number;
  chapterLabel: string;
};
export type VerseDataFileShape = {
  work: WorkShape;
  compiledAt: string;
  sources: string[];
  books: BookShape[];
  verses: VerseShape[];
};
