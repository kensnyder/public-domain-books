var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// index.ts
var exports_public_domain_books = {};
__export(exports_public_domain_books, {
  worksLookup: () => worksLookup,
  works: () => works,
  parseVerseRangeWithContext: () => parseVerseRangeWithContext,
  parseVerseRange: () => parseVerseRange,
  parseCitation: () => parseCitation,
  osisToCitation: () => osisToCitation,
  groupsLookup: () => groupsLookup,
  getWorkByName: () => getWorkByName,
  getRelativeChapter: () => getRelativeChapter,
  getPreviousChapter: () => getPreviousChapter,
  getNextChapter: () => getNextChapter,
  getChapterList: () => getChapterList,
  getBookByName: () => getBookByName,
  booksLookup: () => booksLookup,
  books: () => books
});
module.exports = __toCommonJS(exports_public_domain_books);

// data/compiled/books-and-works.ts
var works = [
  {
    workOsisID: "KJV",
    workTitle: "The Holy Bible",
    workSubtitle: "King James Version",
    aliases: [
      "The Bible",
      "Bible",
      "Holy Bible"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  },
  {
    workOsisID: "KJVA",
    workTitle: "The Holy Bible Apocrypha",
    workSubtitle: "King James Version",
    aliases: [
      "King James Apocrypha"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  },
  {
    workOsisID: "Didache",
    workTitle: "Didache",
    workSubtitle: "The Lord's Teaching Through the Twelve Apostles to the Nations",
    aliases: [
      "The Didache"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  },
  {
    workOsisID: "BofM",
    workTitle: "The Book of Mormon",
    workSubtitle: "Another Testament of Jesus Christ",
    aliases: [
      "BOM",
      "Book of Mormon"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  },
  {
    workOsisID: "PGP",
    workTitle: "Pearl of Great Price",
    workSubtitle: "of The Church of Jesus Christ of Latter-day Saints",
    aliases: [
      "The Pearl of Great Price",
      "PGoP"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  },
  {
    workOsisID: "D&C",
    workTitle: "Doctrine and Covenants",
    workSubtitle: "of The Church of Jesus Christ of Latter-day Saints",
    aliases: [
      "D and C",
      "The Doctrine & Covenants",
      "Doctrine & Covenants",
      "The Doctrine and Covenants"
    ],
    hasData: true,
    books: [],
    bookCount: 0
  }
];
var w = works;
var worksLookup = {
  "THE HOLY BIBLE": w[0],
  KJV: w[0],
  "THE BIBLE": w[0],
  BIBLE: w[0],
  "HOLY BIBLE": w[0],
  "THE HOLY BIBLE APOCRYPHA": w[1],
  KJVA: w[1],
  "KING JAMES APOCRYPHA": w[1],
  DIDACHE: w[2],
  "THE DIDACHE": w[2],
  "THE BOOK OF MORMON": w[3],
  BOFM: w[3],
  BOM: w[3],
  "BOOK OF MORMON": w[3],
  "PEARL OF GREAT PRICE": w[4],
  PGP: w[4],
  "THE PEARL OF GREAT PRICE": w[4],
  PGOP: w[4],
  "DOCTRINE AND COVENANTS": w[5],
  "D&C": w[5],
  "D AND C": w[5],
  "THE DOCTRINE & COVENANTS": w[5],
  "DOCTRINE & COVENANTS": w[5],
  "THE DOCTRINE AND COVENANTS": w[5]
};
var books = [
  {
    workOsisID: "KJV",
    bookName: "Genesis",
    bookSubtitle: "The First Book of Moses called Genesis",
    bookOsisID: "Gen",
    paratext: "GEN",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Pentatuech",
      "Torah"
    ],
    aliases: [
      "Ge",
      "Gn",
      "The First Book of Moses called Genesis"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-1000-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 50,
    verseCounts: [
      0,
      31,
      25,
      24,
      26,
      32,
      22,
      24,
      22,
      29,
      32,
      32,
      20,
      18,
      24,
      21,
      16,
      27,
      33,
      38,
      18,
      34,
      24,
      20,
      67,
      34,
      35,
      46,
      22,
      35,
      43,
      55,
      32,
      20,
      31,
      29,
      43,
      36,
      30,
      23,
      23,
      57,
      38,
      34,
      34,
      28,
      34,
      31,
      22,
      33,
      26
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Exodus",
    bookSubtitle: "The Second Book of Moses, called Exodus",
    bookOsisID: "Exod",
    paratext: "EXO",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Pentatuech",
      "Torah"
    ],
    aliases: [
      "Ex",
      "The Second Book of Moses called Exodus"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-1000-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 40,
    verseCounts: [
      0,
      22,
      25,
      22,
      31,
      23,
      30,
      25,
      32,
      35,
      29,
      10,
      51,
      22,
      31,
      27,
      36,
      16,
      27,
      25,
      26,
      36,
      31,
      33,
      18,
      40,
      37,
      21,
      43,
      46,
      38,
      18,
      35,
      23,
      35,
      35,
      38,
      29,
      31,
      43,
      38
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Leviticus",
    bookSubtitle: "The Third Book of Moses, called Leviticus",
    bookOsisID: "Lev",
    paratext: "LEV",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Pentatuech",
      "Torah"
    ],
    aliases: [
      "Le",
      "The Third Book of Moses called Leviticus"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0600-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 27,
    verseCounts: [
      0,
      17,
      16,
      17,
      35,
      19,
      30,
      38,
      36,
      24,
      20,
      47,
      8,
      59,
      57,
      33,
      34,
      16,
      30,
      37,
      27,
      24,
      33,
      44,
      23,
      55,
      46,
      34
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Numbers",
    bookSubtitle: "The Fourth Book of Moses, called Numbers",
    bookOsisID: "Num",
    paratext: "NUM",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Pentatuech",
      "Torah"
    ],
    aliases: [
      "Nu",
      "Nm",
      "Nb",
      "The Fourth Book of Moses called Numbers"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0800-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 36,
    verseCounts: [
      0,
      54,
      34,
      51,
      49,
      31,
      27,
      89,
      26,
      23,
      36,
      35,
      16,
      33,
      45,
      41,
      50,
      13,
      32,
      22,
      29,
      35,
      41,
      30,
      25,
      18,
      65,
      23,
      31,
      40,
      16,
      54,
      42,
      56,
      29,
      34,
      13
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Deuteronomy",
    bookSubtitle: "The Fifth Book of Moses, called Deuteronomy",
    bookOsisID: "Deut",
    paratext: "DEU",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Deut",
      "Dt",
      "Du",
      "The Fifth Book of Moses called Deuteronomy"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0500-12-31",
    chapterCount: 34,
    verseCounts: [
      0,
      46,
      37,
      29,
      49,
      33,
      25,
      26,
      20,
      29,
      22,
      32,
      32,
      18,
      29,
      23,
      22,
      20,
      22,
      21,
      20,
      23,
      30,
      25,
      22,
      19,
      19,
      26,
      68,
      29,
      20,
      30,
      52,
      29,
      12
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Joshua",
    bookSubtitle: "The Book of Joshua",
    bookOsisID: "Josh",
    paratext: "JOS",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Josh"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Joshua"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 24,
    verseCounts: [
      0,
      18,
      24,
      17,
      24,
      15,
      27,
      26,
      35,
      27,
      43,
      23,
      24,
      33,
      15,
      63,
      10,
      18,
      28,
      51,
      9,
      45,
      34,
      16,
      33
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Judges",
    bookSubtitle: "The Book of Judges",
    bookOsisID: "Judg",
    paratext: "JDG",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Judg",
      "Jdg",
      "Jdgs",
      "Jg"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Samuel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 21,
    verseCounts: [
      0,
      36,
      23,
      31,
      24,
      31,
      40,
      25,
      35,
      57,
      18,
      40,
      15,
      25,
      20,
      20,
      31,
      13,
      31,
      30,
      48,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Ruth",
    bookSubtitle: "The Book of Ruth",
    bookOsisID: "Ruth",
    paratext: "RUT",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Rth",
      "Ru"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Samuel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0600-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      22,
      23,
      18,
      22
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Samuel",
    bookSubtitle: "The Book of 1 Samuel",
    bookOsisID: "1Sam",
    paratext: "1SA",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "1 Sam",
      "1 Sm",
      "1 Sa",
      "1 S",
      "I Sam",
      "I Sa",
      "1Sam",
      "1Sa",
      "1S",
      "1st Samuel",
      "1st Sam",
      "First Samuel",
      "First Sam"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Samuel",
      "Gad",
      "Nathan"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 31,
    verseCounts: [
      0,
      28,
      36,
      21,
      22,
      12,
      21,
      17,
      22,
      27,
      27,
      15,
      25,
      23,
      52,
      35,
      23,
      58,
      30,
      24,
      42,
      15,
      23,
      29,
      22,
      44,
      25,
      12,
      25,
      11,
      31,
      13
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Samuel",
    bookSubtitle: "The Book of 2 Samuel",
    bookOsisID: "2Sam",
    paratext: "2SA",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "2 Sam",
      "2 Sm",
      "2 Sa",
      "2 S",
      "II Sam",
      "II Sa",
      "2Sam",
      "2Sa",
      "2S",
      "2nd Samuel",
      "2nd Sam",
      "Second Samuel",
      "Second Sam"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Gad",
      "Nathan"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 24,
    verseCounts: [
      0,
      27,
      32,
      39,
      12,
      25,
      23,
      29,
      18,
      13,
      19,
      27,
      31,
      39,
      33,
      37,
      23,
      29,
      33,
      43,
      26,
      22,
      51,
      39,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Kings",
    bookSubtitle: "The First Book of Kings",
    bookOsisID: "1Kgs",
    paratext: "1KI",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Kings"
    ],
    aliases: [
      "1 Kgs",
      "1 Ki",
      "1Kin",
      "1K",
      "I Kgs",
      "I Ki",
      "1st Kings",
      "1st Kgs",
      "First Kings",
      "First Kgs"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 22,
    verseCounts: [
      0,
      53,
      46,
      28,
      34,
      18,
      38,
      51,
      66,
      28,
      29,
      43,
      33,
      34,
      31,
      34,
      34,
      24,
      46,
      21,
      43,
      29,
      53
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Kings",
    bookSubtitle: "The Second Book of Kings",
    bookOsisID: "2Kgs",
    paratext: "2KI",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Kings"
    ],
    aliases: [
      "2 Kgs",
      "2 Ki",
      "2Kin",
      "2K",
      "II Kgs",
      "II Ki",
      "2nd Kings",
      "2nd Kgs",
      "Second Kings",
      "Second Kgs"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0620-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 25,
    verseCounts: [
      0,
      18,
      25,
      27,
      44,
      27,
      33,
      20,
      29,
      37,
      36,
      21,
      21,
      25,
      29,
      38,
      20,
      41,
      37,
      37,
      21,
      26,
      20,
      37,
      20,
      30
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Chronicles",
    bookSubtitle: "The First Book of Chronicles",
    bookOsisID: "1Chr",
    paratext: "1CH",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "1 Chron",
      "1 Chr",
      "1 Ch",
      "1Chron",
      "1Chr",
      "1Ch",
      "I Chron",
      "I Chr",
      "I Ch",
      "1st Chronicles",
      "1st Chron",
      "First Chronicles",
      "First Chron"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezra"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0400-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 29,
    verseCounts: [
      0,
      54,
      55,
      24,
      43,
      26,
      81,
      40,
      40,
      44,
      14,
      47,
      40,
      14,
      17,
      29,
      43,
      27,
      17,
      19,
      8,
      30,
      19,
      32,
      31,
      31,
      32,
      34,
      21,
      30
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Chronicles",
    bookSubtitle: "The Second Book of Chronicals",
    bookOsisID: "2Chr",
    paratext: "2CH",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "2 Chron",
      "2 Chr",
      "2 Ch",
      "2Chron",
      "2Chr",
      "2Ch",
      "II Chron",
      "II Chr",
      "II Ch",
      "2nd Chronicles",
      "2nd Chron",
      "Second Chronicles",
      "Second Chron"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezra"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0400-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 36,
    verseCounts: [
      0,
      17,
      18,
      17,
      22,
      14,
      42,
      22,
      18,
      31,
      19,
      23,
      16,
      22,
      15,
      19,
      14,
      19,
      34,
      11,
      37,
      20,
      12,
      21,
      27,
      28,
      23,
      9,
      27,
      36,
      27,
      21,
      33,
      25,
      33,
      27,
      23
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Ezra",
    bookSubtitle: "The Book of Ezra",
    bookOsisID: "Ezra",
    paratext: "EZR",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "Ez"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezra"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0450-01-01",
    dateLatest: "-0390-12-31",
    chapterCount: 10,
    verseCounts: [
      0,
      11,
      70,
      13,
      24,
      17,
      22,
      28,
      36,
      15,
      44
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Nehemiah",
    bookSubtitle: "The Book of Nehemiah",
    bookOsisID: "Neh",
    paratext: "NEH",
    groups: [
      "Old Testament",
      "Hebrew Bible",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "Ne"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Nehemiah",
      "Ezra"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0445-01-01",
    dateLatest: "-0390-12-31",
    chapterCount: 13,
    verseCounts: [
      0,
      11,
      20,
      32,
      23,
      19,
      19,
      73,
      18,
      38,
      39,
      36,
      47,
      31
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Esther",
    bookSubtitle: "The Book of Esther",
    bookOsisID: "Esth",
    paratext: "EST",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Es"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mordecai"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0400-01-01",
    dateLatest: "-0250-12-31",
    chapterCount: 10,
    verseCounts: [
      0,
      22,
      23,
      15,
      17,
      14,
      14,
      10,
      17,
      32,
      3
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Job",
    bookSubtitle: "The Book of Job",
    bookOsisID: "Job",
    paratext: "JOB",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Jb"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Job",
      "Moses"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0700-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 42,
    verseCounts: [
      0,
      22,
      13,
      26,
      21,
      27,
      30,
      21,
      22,
      35,
      22,
      20,
      25,
      28,
      22,
      35,
      22,
      16,
      21,
      29,
      29,
      34,
      30,
      17,
      25,
      6,
      14,
      23,
      28,
      25,
      31,
      40,
      22,
      33,
      37,
      16,
      33,
      24,
      41,
      30,
      24,
      34,
      17
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Psalms",
    bookSubtitle: "The Book of Psalms",
    bookOsisID: "Ps",
    paratext: "PSA",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Psalm",
      "Pslm",
      "Psm",
      "Pss"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "David",
      "Asaph",
      "Sons of Korah",
      "Solomon",
      "Moses",
      "Ethan",
      "Heman"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-1000-01-01",
    dateLatest: "-0100-12-31",
    chapterCount: 150,
    verseCounts: [
      0,
      6,
      12,
      8,
      8,
      12,
      10,
      17,
      9,
      20,
      18,
      7,
      8,
      6,
      7,
      5,
      11,
      15,
      50,
      14,
      9,
      13,
      31,
      6,
      10,
      22,
      12,
      14,
      9,
      11,
      12,
      24,
      11,
      22,
      22,
      28,
      12,
      40,
      22,
      13,
      17,
      13,
      11,
      5,
      26,
      17,
      11,
      9,
      14,
      20,
      23,
      19,
      9,
      6,
      7,
      23,
      13,
      11,
      11,
      17,
      12,
      8,
      12,
      11,
      10,
      13,
      20,
      7,
      35,
      36,
      5,
      24,
      20,
      28,
      23,
      10,
      12,
      20,
      72,
      13,
      19,
      16,
      8,
      18,
      12,
      13,
      17,
      7,
      18,
      52,
      17,
      16,
      15,
      5,
      23,
      11,
      13,
      12,
      9,
      9,
      5,
      8,
      28,
      22,
      35,
      45,
      48,
      43,
      13,
      31,
      7,
      10,
      10,
      9,
      8,
      18,
      19,
      2,
      29,
      176,
      7,
      8,
      9,
      4,
      8,
      5,
      6,
      5,
      6,
      8,
      8,
      3,
      18,
      3,
      3,
      21,
      26,
      9,
      8,
      24,
      13,
      10,
      7,
      12,
      15,
      21,
      10,
      20,
      14,
      9,
      6
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Proverbs",
    bookSubtitle: "The Book of Proverbs",
    bookOsisID: "Prov",
    paratext: "PRO",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Prv",
      "Pv"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Solomon",
      "Agur",
      "Lemuel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0900-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 31,
    verseCounts: [
      0,
      33,
      22,
      35,
      27,
      23,
      35,
      27,
      36,
      18,
      32,
      31,
      28,
      25,
      35,
      33,
      33,
      28,
      24,
      29,
      30,
      31,
      29,
      35,
      34,
      28,
      28,
      27,
      28,
      27,
      33,
      31
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Ecclesiastes",
    bookSubtitle: "The Book of Ecclesiastes",
    bookOsisID: "Eccl",
    paratext: "ECC",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Qohelet"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Solomon"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0300-01-01",
    dateLatest: "-0200-12-31",
    chapterCount: 12,
    verseCounts: [
      0,
      18,
      26,
      22,
      16,
      20,
      12,
      29,
      17,
      18,
      20,
      10,
      14
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Song of Solomon",
    bookSubtitle: "The Book of Song of Solomon",
    bookOsisID: "Song",
    paratext: "SNG",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Canticle of Canticles",
      "Song",
      "SNG",
      "Solomon's Song"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Solomon"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0700-01-01",
    dateLatest: "-0200-12-31",
    chapterCount: 8,
    verseCounts: [
      0,
      17,
      17,
      11,
      16,
      16,
      13,
      13,
      14
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Isaiah",
    bookSubtitle: "The Book of Isaiah",
    bookOsisID: "Isa",
    paratext: "ISA",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Is"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Isaiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0740-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 66,
    verseCounts: [
      0,
      31,
      22,
      26,
      6,
      30,
      13,
      25,
      22,
      21,
      34,
      16,
      6,
      22,
      32,
      9,
      14,
      14,
      7,
      25,
      6,
      17,
      25,
      18,
      23,
      12,
      21,
      13,
      29,
      24,
      33,
      9,
      20,
      24,
      17,
      10,
      22,
      38,
      22,
      8,
      31,
      29,
      25,
      28,
      28,
      25,
      13,
      15,
      22,
      26,
      11,
      23,
      15,
      12,
      17,
      13,
      12,
      21,
      14,
      21,
      22,
      11,
      12,
      19,
      12,
      25,
      24
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Jeremiah",
    bookSubtitle: "The Book of Jeremiah",
    bookOsisID: "Jer",
    paratext: "JER",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Je",
      "Jr"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0627-01-01",
    dateLatest: "-0550-12-31",
    chapterCount: 52,
    verseCounts: [
      0,
      19,
      37,
      25,
      31,
      31,
      30,
      34,
      22,
      26,
      25,
      23,
      17,
      27,
      22,
      21,
      21,
      27,
      23,
      15,
      18,
      14,
      30,
      40,
      10,
      38,
      24,
      22,
      17,
      32,
      24,
      40,
      44,
      26,
      22,
      19,
      32,
      21,
      28,
      18,
      16,
      18,
      22,
      13,
      30,
      5,
      28,
      7,
      47,
      39,
      46,
      64,
      34
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Lamentations",
    bookSubtitle: "The Book of Lamentations",
    bookOsisID: "Lam",
    paratext: "LAM",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "La"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0586-01-01",
    dateLatest: "-0520-12-31",
    chapterCount: 5,
    verseCounts: [
      0,
      22,
      22,
      66,
      22,
      22
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Ezekiel",
    bookSubtitle: "The Book of Ezekiel",
    bookOsisID: "Ezek",
    paratext: "EZK",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ezk"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezekiel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0593-01-01",
    dateLatest: "-0530-12-31",
    chapterCount: 48,
    verseCounts: [
      0,
      28,
      10,
      27,
      17,
      17,
      14,
      27,
      18,
      11,
      22,
      25,
      28,
      23,
      23,
      8,
      63,
      24,
      32,
      14,
      49,
      32,
      31,
      49,
      27,
      17,
      21,
      36,
      26,
      21,
      26,
      18,
      32,
      33,
      31,
      15,
      38,
      28,
      23,
      29,
      49,
      26,
      20,
      27,
      31,
      25,
      24,
      23,
      35
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Daniel",
    bookSubtitle: "The Book of Daniel",
    bookOsisID: "Dan",
    paratext: "DAN",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Da",
      "Dn"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Daniel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0200-01-01",
    dateLatest: "-0164-12-31",
    chapterCount: 12,
    verseCounts: [
      0,
      21,
      49,
      30,
      37,
      31,
      28,
      28,
      27,
      27,
      21,
      45,
      13
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Hosea",
    bookSubtitle: "The Book of Hosea",
    bookOsisID: "Hos",
    paratext: "HOS",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ho"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Hosea"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0750-01-01",
    dateLatest: "-0500-12-31",
    chapterCount: 14,
    verseCounts: [
      0,
      11,
      23,
      5,
      19,
      15,
      11,
      16,
      14,
      17,
      15,
      12,
      14,
      16,
      9
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Joel",
    bookSubtitle: "The Book of Joel",
    bookOsisID: "Joel",
    paratext: "JOL",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Jl"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Joel"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0500-01-01",
    dateLatest: "-0300-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      20,
      32,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Amos",
    bookSubtitle: "The Book of Amos",
    bookOsisID: "Amos",
    paratext: "AMO",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Am"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Amos"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0760-01-01",
    dateLatest: "-0500-12-31",
    chapterCount: 9,
    verseCounts: [
      0,
      15,
      16,
      15,
      13,
      27,
      14,
      17,
      14,
      15
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Obadiah",
    bookSubtitle: "The Book of Obadiah",
    bookOsisID: "Obad",
    paratext: "OBA",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ob"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Obadiah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0586-01-01",
    dateLatest: "-0450-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Jonah",
    bookSubtitle: "The Book of Jonah",
    bookOsisID: "Jonah",
    paratext: "JON",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jonah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0400-01-01",
    dateLatest: "-0250-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      17,
      10,
      10,
      11
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Micah",
    bookSubtitle: "The Book of Micah",
    bookOsisID: "Mic",
    paratext: "MIC",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Mc"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Micah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0737-01-01",
    dateLatest: "-0500-12-31",
    chapterCount: 7,
    verseCounts: [
      0,
      16,
      13,
      12,
      13,
      15,
      16,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Nahum",
    bookSubtitle: "The Book of Nahum",
    bookOsisID: "Nah",
    paratext: "NAM",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Nh",
      "Nhm"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Nahum"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0650-01-01",
    dateLatest: "-0612-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      15,
      13,
      19
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Habakkuk",
    bookSubtitle: "The Book of Habakkuk",
    bookOsisID: "Hab",
    paratext: "HAB",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Hb"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Habakkuk"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0625-01-01",
    dateLatest: "-0587-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      17,
      20,
      19
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Zephaniah",
    bookSubtitle: "The Book of Zephaniah",
    bookOsisID: "Zeph",
    paratext: "ZEP",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Zp"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Zephaniah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0630-01-01",
    dateLatest: "-0625-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      18,
      15,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Haggai",
    bookSubtitle: "The Book of Haggai",
    bookOsisID: "Hag",
    paratext: "HAG",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Hg",
      "Hgi",
      "Hagi"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Haggai"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0520-01-01",
    dateLatest: "-0519-12-31",
    chapterCount: 2,
    verseCounts: [
      0,
      15,
      23
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Zechariah",
    bookSubtitle: "The Book of Zechariah",
    bookOsisID: "Zech",
    paratext: "ZEC",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Zc"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Zechariah"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0520-01-01",
    dateLatest: "-0440-12-31",
    chapterCount: 14,
    verseCounts: [
      0,
      21,
      13,
      10,
      14,
      11,
      15,
      14,
      23,
      17,
      12,
      17,
      14,
      9,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Malachi",
    bookSubtitle: "The Book of Malachi",
    bookOsisID: "Mal",
    paratext: "MAL",
    groups: [
      "Hebrew Bible",
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ml"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Malachi"
    ],
    traditions: [
      "jewish",
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "-0450-01-01",
    dateLatest: "-0400-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      14,
      17,
      18,
      6
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Matthew",
    bookSubtitle: "The Gospel According to St. Matthew",
    bookOsisID: "Matt",
    paratext: "MAT",
    groups: [
      "New Testament",
      "Bible",
      "Gospels"
    ],
    aliases: [
      "St Matthew",
      "St. Matthew",
      "Saint Matthew",
      "The Gospel According to St Matthew",
      "The Gospel According to St. Matthew",
      "The Gospel According to Saint Matthew"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "St. Matthew"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0070-01-01",
    dateLatest: "0100-12-31",
    chapterCount: 28,
    verseCounts: [
      0,
      25,
      23,
      17,
      25,
      48,
      34,
      29,
      34,
      38,
      42,
      30,
      50,
      58,
      36,
      39,
      28,
      27,
      35,
      30,
      34,
      46,
      46,
      39,
      51,
      46,
      75,
      66,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Mark",
    bookSubtitle: "The Gospel According to St. Mark",
    bookOsisID: "Mark",
    paratext: "MRK",
    groups: [
      "New Testament",
      "Bible",
      "Gospels"
    ],
    aliases: [
      "St Mark",
      "St. Mark",
      "Saint Mark",
      "The Gospel According to St Mark",
      "The Gospel According to St. Mark",
      "The Gospel According to Saint Mark"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "St. Mark"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0065-01-01",
    dateLatest: "0075-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      45,
      28,
      35,
      41,
      43,
      56,
      37,
      38,
      50,
      52,
      33,
      44,
      37,
      72,
      47,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Luke",
    bookSubtitle: "The Gospel According to St. Luke",
    bookOsisID: "Luke",
    paratext: "LUK",
    groups: [
      "New Testament",
      "Bible",
      "Gospels"
    ],
    aliases: [
      "St Luke",
      "St. Luke",
      "Saint Luke",
      "The Gospel According to St Luke",
      "The Gospel According to St. Luke",
      "The Gospel According to Saint Luke"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "St. Luke"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0080-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 24,
    verseCounts: [
      0,
      80,
      52,
      38,
      44,
      39,
      49,
      50,
      56,
      62,
      42,
      54,
      59,
      35,
      35,
      32,
      31,
      37,
      43,
      48,
      47,
      38,
      71,
      56,
      53
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "John",
    bookSubtitle: "The Gospel According to St. John",
    bookOsisID: "John",
    paratext: "JHN",
    groups: [
      "New Testament",
      "Bible",
      "Gospels"
    ],
    aliases: [
      "St John",
      "St. John",
      "Saint John",
      "The Gospel According to St John",
      "The Gospel According to St. John",
      "The Gospel According to Saint John"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "St. John"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0090-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 21,
    verseCounts: [
      0,
      51,
      25,
      36,
      54,
      47,
      71,
      53,
      59,
      41,
      42,
      57,
      50,
      38,
      31,
      27,
      33,
      26,
      40,
      42,
      31,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Acts",
    bookSubtitle: "The Acts of the Apostles",
    bookOsisID: "Acts",
    paratext: "ACT",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "Ac"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Luke"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0080-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 28,
    verseCounts: [
      0,
      26,
      47,
      26,
      37,
      42,
      15,
      60,
      40,
      43,
      48,
      30,
      25,
      52,
      28,
      41,
      40,
      34,
      28,
      41,
      38,
      40,
      30,
      35,
      27,
      27,
      32,
      44,
      31
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Romans",
    bookSubtitle: "The Epistle of Paul to the Romans ",
    bookOsisID: "Rom",
    paratext: "ROM",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Ro",
      "Rm"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0056-01-01",
    dateLatest: "0058-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      32,
      29,
      31,
      25,
      21,
      23,
      25,
      39,
      33,
      21,
      36,
      21,
      14,
      23,
      33,
      27
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Corinthians",
    bookSubtitle: "The First Epistle of Paul to the Corinthians ",
    bookOsisID: "1Cor",
    paratext: "1CO",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "1 Cor",
      "1 Co",
      "I Cor",
      "I Co",
      "1Cor",
      "1Co",
      "I Corinthians",
      "1Corinthians",
      "1st Corinthians",
      "First Corinthians"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0053-01-01",
    dateLatest: "0055-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      31,
      16,
      23,
      21,
      13,
      20,
      40,
      13,
      27,
      33,
      34,
      31,
      13,
      40,
      58,
      24
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Corinthians",
    bookSubtitle: "The Second Epistle of Paul to the Corinthians ",
    bookOsisID: "2Cor",
    paratext: "2CO",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "2 Cor",
      "2 Co",
      "II Cor",
      "II Co",
      "2Cor",
      "2Co",
      "II Corinthians",
      "2Corinthians",
      "2nd Corinthians",
      "Second Corinthians"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0055-01-01",
    dateLatest: "0057-12-31",
    chapterCount: 13,
    verseCounts: [
      0,
      24,
      17,
      18,
      18,
      21,
      18,
      16,
      24,
      15,
      18,
      33,
      21,
      14
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Galatians",
    bookSubtitle: "The Epistle of Paul to the Galatians ",
    bookOsisID: "Gal",
    paratext: "GAL",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Ga"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0048-01-01",
    dateLatest: "0055-12-31",
    chapterCount: 6,
    verseCounts: [
      0,
      24,
      21,
      29,
      31,
      26,
      18
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Ephesians",
    bookSubtitle: "The Epistle of Paul to the Ephesians ",
    bookOsisID: "Eph",
    paratext: "EPH",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Ephes",
      "Ep"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0060-01-01",
    dateLatest: "0100-12-31",
    chapterCount: 6,
    verseCounts: [
      0,
      23,
      22,
      21,
      32,
      33,
      24
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Philippians",
    bookSubtitle: "The Epistle of Paul to the Philippians ",
    bookOsisID: "Phil",
    paratext: "PHP",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Pp"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0054-01-01",
    dateLatest: "0062-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      30,
      30,
      21,
      23
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Colossians",
    bookSubtitle: "The Epistle of Paul to the Colossians ",
    bookOsisID: "Col",
    paratext: "COL",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Co"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0060-01-01",
    dateLatest: "0090-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      29,
      23,
      25,
      18
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Thessalonians",
    bookSubtitle: "The First Epistle of Paul to the Thessalonians ",
    bookOsisID: "1Thess",
    paratext: "1TH",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "1 Thess",
      "1 Thes",
      "1 Th",
      "I Thessalonians",
      "I Thess",
      "I Thes",
      "I Th",
      "1Thessalonians",
      "1Thess",
      "1Thes",
      "1Th",
      "1st Thessalonians",
      "1st Thess",
      "First Thessalonians",
      "First Thess"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0049-01-01",
    dateLatest: "0051-12-31",
    chapterCount: 5,
    verseCounts: [
      0,
      10,
      20,
      13,
      18,
      28
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Thessalonians",
    bookSubtitle: "The Second Epistle of Paul to the Thessalonians ",
    bookOsisID: "2Thess",
    paratext: "2TH",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "2 Thess",
      "2 Thes",
      "2 Th",
      "II Thessalonians",
      "II Thess",
      "II Thes",
      "II Th",
      "2Thessalonians",
      "2Thess",
      "2Thes",
      "2Th",
      "2nd Thessalonians",
      "2nd Thess",
      "Second Thessalonians",
      "Second Thess"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0050-01-01",
    dateLatest: "0100-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      12,
      17,
      18
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Timothy",
    bookSubtitle: "The First Epistle of Paul to Timothy ",
    bookOsisID: "1Tim",
    paratext: "1TI",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "1 Tim",
      "1 Ti",
      "I Timothy",
      "I Tim",
      "I Ti",
      "1Timothy",
      "1Tim",
      "1Ti",
      "1st Timothy",
      "1st Tim",
      "First Timothy",
      "First Tim"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0065-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 6,
    verseCounts: [
      0,
      20,
      15,
      16,
      16,
      25,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Timothy",
    bookSubtitle: "The Second Epistle of Paul to Timothy ",
    bookOsisID: "2Tim",
    paratext: "2TI",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "2 Tim",
      "2 Ti",
      "II Timothy",
      "II Tim",
      "II Ti",
      "2Timothy",
      "2Tim",
      "2Ti",
      "2nd Timothy",
      "2nd Tim",
      "Second Timothy",
      "Second Tim"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0065-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 4,
    verseCounts: [
      0,
      18,
      26,
      17,
      22
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Titus",
    bookSubtitle: "The Epistle of Paul to Titus ",
    bookOsisID: "Titus",
    paratext: "TIT",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Ti",
      "Tts"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0065-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      16,
      15,
      15
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Philemon",
    bookSubtitle: "The Epistle of Paul to Philemon ",
    bookOsisID: "Phlm",
    paratext: "PHM",
    groups: [
      "New Testament",
      "Bible",
      "Pauline Epistles"
    ],
    aliases: [
      "Pm"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0054-01-01",
    dateLatest: "0062-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Hebrews",
    bookSubtitle: "The Epistle to the Hebrews ",
    bookOsisID: "Heb",
    paratext: "HEB",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0060-01-01",
    dateLatest: "0095-12-31",
    chapterCount: 13,
    verseCounts: [
      0,
      14,
      18,
      19,
      16,
      14,
      20,
      28,
      13,
      28,
      39,
      40,
      29,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "James",
    bookSubtitle: "The General Epistle of James ",
    bookOsisID: "Jas",
    paratext: "JAS",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "Jm"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "James the brother of Jesus"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0048-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 5,
    verseCounts: [
      0,
      27,
      26,
      18,
      17,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 Peter",
    bookSubtitle: "The First Epistle of Peter ",
    bookOsisID: "1Pet",
    paratext: "1PE",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "1 Pet",
      "1 Pe",
      "1 Pt",
      "1 P",
      "I Pet",
      "I Pt",
      "I Pe",
      "1Peter",
      "1Pet",
      "1Pe",
      "1Pt",
      "1P",
      "I Peter",
      "1st Peter",
      "First Peter"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0060-01-01",
    dateLatest: "0090-12-31",
    chapterCount: 5,
    verseCounts: [
      0,
      25,
      25,
      22,
      19,
      14
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 Peter",
    bookSubtitle: "The Second Epistle of Peter ",
    bookOsisID: "2Pet",
    paratext: "2PE",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "2 Pet",
      "2 Pe",
      "2 Pt",
      "2 P",
      "II Peter",
      "II Pet",
      "II Pt",
      "II Pe",
      "2Peter",
      "2Pet",
      "2Pe",
      "2Pt",
      "2P",
      "2nd Peter",
      "Second Peter"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0080-01-01",
    dateLatest: "0150-12-31",
    chapterCount: 3,
    verseCounts: [
      0,
      21,
      22,
      18
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "1 John",
    bookSubtitle: "The First Epistle of John ",
    bookOsisID: "1John",
    paratext: "1JN",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "1 John",
      "1 Jhn",
      "1 Jn",
      "1 J",
      "1John",
      "1Jhn",
      "1Joh",
      "1Jn",
      "1Jo",
      "1J",
      "I John",
      "I Jhn",
      "I Joh",
      "I Jn",
      "I Jo",
      "1st John",
      "First John"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0090-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 5,
    verseCounts: [
      0,
      10,
      29,
      24,
      21,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "2 John",
    bookSubtitle: "The Second Epistle of John ",
    bookOsisID: "2John",
    paratext: "2JN",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "2 John",
      "2 Jhn",
      "2 Jn",
      "2 J",
      "2John",
      "2Jhn",
      "2Joh",
      "2Jn",
      "2Jo",
      "2J",
      "II John",
      "II Jhn",
      "II Joh",
      "II Jn",
      "II Jo",
      "2nd John",
      "Second John"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0090-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      13
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "3 John",
    bookSubtitle: "The Third Epistle of John ",
    bookOsisID: "3John",
    paratext: "3JN",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "3 John",
      "3 Jhn",
      "3 Jn",
      "3 J",
      "3John",
      "3Jhn",
      "3Joh",
      "3Jn",
      "3Jo",
      "3J",
      "III John",
      "III Jhn",
      "III Joh",
      "III Jn",
      "III Jo",
      "3rd John",
      "Third John"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0090-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      14
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Jude",
    bookSubtitle: "The Epistle of Jude ",
    bookOsisID: "Jude",
    paratext: "JUD",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "Jd"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jude"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0060-01-01",
    dateLatest: "0110-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJV",
    bookName: "Revelation",
    bookSubtitle: "The Revelation of Jesus Christ (or The Apocalypse of John) ",
    bookOsisID: "Rev",
    paratext: "REV",
    groups: [
      "New Testament",
      "Bible"
    ],
    aliases: [
      "Re",
      "The Revelation"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "John the Revelator"
    ],
    traditions: [
      "protestant",
      "lds",
      "catholic",
      "eastern orthodox",
      "oriental orthodox"
    ],
    dateEarliest: "0068-01-01",
    dateLatest: "0096-12-31",
    chapterCount: 22,
    verseCounts: [
      0,
      20,
      29,
      22,
      11,
      14,
      17,
      17,
      13,
      21,
      11,
      19,
      17,
      18,
      20,
      8,
      21,
      18,
      24,
      21,
      15,
      27,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Tobit",
    bookSubtitle: "The Book of Tobit",
    bookOsisID: "Tob",
    paratext: "TOB",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Tobit"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0225-01-01",
    dateLatest: "-0175-12-31",
    chapterCount: 14,
    verseCounts: [
      0,
      22,
      14,
      17,
      21,
      22,
      17,
      18,
      21,
      6,
      12,
      19,
      22,
      18,
      15
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Judith",
    bookSubtitle: "The Book of Judith",
    bookOsisID: "Jdt",
    paratext: "JDT",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Judith"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0150-01-01",
    dateLatest: "-0100-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      16,
      28,
      10,
      15,
      24,
      21,
      32,
      36,
      14,
      23,
      23,
      20,
      20,
      19,
      13,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Additions to Esther",
    bookSubtitle: "The Rest of the Chapters of the Book of Esther, which are found neither in the Hebrew, nor in the Chaldee",
    bookOsisID: "AddEsth",
    paratext: "ADE",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Aes"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mordecai",
      "Esther"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0116-01-01",
    dateLatest: "-0048-12-31",
    chapterCount: 7,
    verseCounts: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      12,
      6,
      18,
      19,
      16,
      24
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Wisdom",
    bookSubtitle: "The Wisdom of Solomon",
    bookOsisID: "Wis",
    paratext: "WIS",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Wisdom of Solomon"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Solomon"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0100-01-01",
    dateLatest: "0010-12-31",
    chapterCount: 19,
    verseCounts: [
      0,
      16,
      24,
      19,
      20,
      23,
      25,
      30,
      21,
      18,
      21,
      26,
      27,
      19,
      31,
      19,
      29,
      21,
      25,
      22
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Sirach",
    bookSubtitle: "The Wisdom of Jesus the Son of Sirach",
    bookOsisID: "Sir",
    paratext: "SIR",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Ecclesiasticus"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jesus son of Sirach"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0196-01-01",
    dateLatest: "-0175-12-31",
    chapterCount: 51,
    verseCounts: [
      0,
      30,
      18,
      31,
      31,
      15,
      37,
      36,
      19,
      18,
      31,
      34,
      18,
      26,
      27,
      20,
      30,
      32,
      33,
      30,
      32,
      28,
      27,
      28,
      34,
      26,
      29,
      30,
      26,
      28,
      25,
      31,
      24,
      31,
      26,
      20,
      26,
      31,
      34,
      35,
      30,
      24,
      25,
      33,
      22,
      26,
      20,
      25,
      25,
      16,
      29,
      30
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Epistle of Jeremiah",
    bookSubtitle: "The Epistle of Jeremiah",
    bookOsisID: "EpJer",
    paratext: "LJE",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Epj",
      "The Epistle of Jeremiah",
      "The Letter of Jeremiah",
      "Letter of Jeremiah"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0200-01-01",
    dateLatest: "-0100-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      73
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Prayer of Azariah",
    bookSubtitle: "Song of the Three Holy Children",
    bookOsisID: "PrAzar",
    paratext: "S3Y",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Song of the Three Children",
      "Song of the Three Holy Children",
      "PrAzar",
      "S3Y",
      "Aza"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Azariah"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0160-01-01",
    dateLatest: "-0140-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      68
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Susanna",
    bookSubtitle: "History of Susanna",
    bookOsisID: "Sus",
    paratext: "SUS",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Daniel"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0100-01-01",
    dateLatest: "-0050-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      64
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Bel and the Dragon",
    bookSubtitle: "",
    bookOsisID: "Bel",
    paratext: "BEL",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Daniel"
    ],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0100-01-01",
    dateLatest: "-0050-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      42
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "1 Maccabees",
    bookSubtitle: "The First Book of the Maccabees",
    bookOsisID: "1Macc",
    paratext: "1MA",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Ma1"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0100-01-01",
    dateLatest: "-0090-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      64,
      70,
      60,
      61,
      68,
      63,
      50,
      32,
      73,
      89,
      74,
      53,
      53,
      49,
      41,
      24
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "2 Maccabees",
    bookSubtitle: "The Second Book of the Maccabees",
    bookOsisID: "2Macc",
    paratext: "2MA",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Ma2"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    traditions: [
      "roman catholic",
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0124-01-01",
    dateLatest: "-0120-12-31",
    chapterCount: 15,
    verseCounts: [
      0,
      36,
      32,
      40,
      50,
      27,
      31,
      42,
      36,
      29,
      38,
      38,
      45,
      26,
      46,
      39
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Prayer of Manasseh",
    bookSubtitle: "The Prayer of Manasses King of Juda, when he was holden captive in Babylon",
    bookOsisID: "PrMan",
    paratext: "MAN",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Manasseh"
    ],
    traditions: [
      "eastern orthodox",
      "oriental orthodox",
      "ethiopian orthodox"
    ],
    dateEarliest: "-0200-01-01",
    dateLatest: "0000-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      1
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "1 Esdras",
    bookSubtitle: "The First Book of Esdras",
    bookOsisID: "1Esd",
    paratext: "1ES",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Es1"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezra"
    ],
    traditions: [
      "eastern orthodox"
    ],
    dateEarliest: "-0200-01-01",
    dateLatest: "-0100-12-31",
    chapterCount: 9,
    verseCounts: [
      0,
      58,
      30,
      24,
      63,
      73,
      34,
      15,
      96,
      55
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "2 Esdras",
    bookSubtitle: "The Second Book of Esdras",
    bookOsisID: "2Esd",
    paratext: "2ES",
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Es2"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezra"
    ],
    traditions: [
      "eastern orthodox"
    ],
    dateEarliest: "0070-01-01",
    dateLatest: "0120-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      40,
      48,
      36,
      52,
      56,
      59,
      70,
      63,
      47,
      59,
      46,
      51,
      58,
      48,
      63,
      78
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "KJVA",
    bookName: "Epistle to the Laodiceans",
    bookSubtitle: "Epistle to the Laodiceans",
    bookOsisID: "EpLao",
    paratext: "LAO",
    groups: [
      "Vulgate",
      "Apocrypha"
    ],
    aliases: [
      "EpLao",
      "LAO",
      "Laodiceans",
      "Paul's Epistle to the Laodiceans"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    traditions: [
      "academic"
    ],
    dateEarliest: "0080-01-01",
    dateLatest: "0140-12-31",
    chapterCount: 1,
    verseCounts: [
      0,
      20
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "Didache",
    bookName: "Didache",
    bookSubtitle: "The Lord's Teaching Through the Twelve Apostles to the Nations",
    bookOsisID: "Did",
    paratext: "DID",
    groups: [
      "Apostolic Fathers",
      "Apocrypha"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    traditions: [
      "academic"
    ],
    dateEarliest: "0080-01-01",
    dateLatest: "0100-12-31",
    chapterCount: 16,
    verseCounts: [
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "1 Nephi",
    bookSubtitle: "",
    bookOsisID: "1Ne",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [
      "1 Ne",
      "1st Nephi",
      "First Nephi",
      "The First Book of Nephi",
      "I Nephi"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Nephi"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0600-01-01",
    dateLatest: "-0570-01-01",
    chapterCount: 22,
    verseCounts: [
      0,
      20,
      24,
      31,
      38,
      22,
      6,
      22,
      38,
      6,
      22,
      36,
      23,
      42,
      30,
      36,
      39,
      55,
      25,
      24,
      22,
      26,
      31
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "2 Nephi",
    bookSubtitle: "",
    bookOsisID: "2Ne",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [
      "2 Ne",
      "2nd Nephi",
      "Second Nephi",
      "The Second Book of Nephi",
      "II Nephi"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Nephi"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0588-01-01",
    dateLatest: "-0545-01-01",
    chapterCount: 33,
    verseCounts: [
      0,
      32,
      30,
      25,
      35,
      34,
      18,
      11,
      25,
      54,
      25,
      8,
      22,
      26,
      6,
      30,
      13,
      25,
      22,
      21,
      34,
      16,
      6,
      22,
      32,
      30,
      33,
      35,
      32,
      14,
      18,
      21,
      9,
      15
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Jacob",
    bookSubtitle: "the Brother of Nephi",
    bookOsisID: "Jac",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jacob"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0544-01-01",
    dateLatest: "-0421-01-01",
    chapterCount: 7,
    verseCounts: [
      0,
      19,
      35,
      14,
      18,
      77,
      13,
      27
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Enos",
    bookSubtitle: "",
    bookOsisID: "Enos",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Enos"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0420-01-01",
    dateLatest: "-0420-01-01",
    chapterCount: 1,
    verseCounts: [
      0,
      27
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Jarom",
    bookSubtitle: "",
    bookOsisID: "Jar",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jarom"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0399-01-01",
    dateLatest: "-0361-01-01",
    chapterCount: 1,
    verseCounts: [
      0,
      15
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Omni",
    bookSubtitle: "",
    bookOsisID: "Omni",
    paratext: null,
    groups: [
      "Book of Mormon",
      "Small Plates of Nephi",
      "LDS"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Omni",
      "Chemish",
      "Abinadom",
      "Amaleki"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0323-01-01",
    dateLatest: "-0130-01-01",
    chapterCount: 1,
    verseCounts: [
      0,
      30
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Words of Mormon",
    bookSubtitle: "",
    bookOsisID: "WoM",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "0385-01-01",
    dateLatest: "0385-01-01",
    chapterCount: 1,
    verseCounts: [
      0,
      18
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Mosiah",
    bookSubtitle: "",
    bookOsisID: "Mosi",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0130-01-01",
    dateLatest: "-0091-01-01",
    chapterCount: 29,
    verseCounts: [
      0,
      18,
      41,
      27,
      30,
      15,
      7,
      33,
      21,
      19,
      22,
      29,
      37,
      35,
      12,
      31,
      15,
      20,
      35,
      29,
      26,
      36,
      16,
      39,
      25,
      24,
      39,
      37,
      20,
      47
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Alma",
    bookSubtitle: "the Son of Alma",
    bookOsisID: "Alma",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0091-01-01",
    dateLatest: "-0052-01-01",
    chapterCount: 63,
    verseCounts: [
      0,
      33,
      38,
      27,
      20,
      62,
      8,
      27,
      32,
      34,
      32,
      46,
      37,
      31,
      29,
      19,
      21,
      39,
      43,
      36,
      30,
      23,
      35,
      18,
      30,
      17,
      37,
      30,
      14,
      17,
      60,
      38,
      43,
      23,
      41,
      16,
      30,
      47,
      15,
      19,
      26,
      15,
      31,
      54,
      24,
      24,
      41,
      36,
      25,
      30,
      40,
      37,
      40,
      23,
      24,
      35,
      57,
      36,
      41,
      13,
      36,
      21,
      52,
      17
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Helaman",
    bookSubtitle: "",
    bookOsisID: "Hel",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [
      "He",
      "Hlm",
      "Helm"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-0052-01-01",
    dateLatest: "-0001-01-01",
    chapterCount: 16,
    verseCounts: [
      0,
      34,
      14,
      37,
      26,
      52,
      41,
      29,
      28,
      41,
      19,
      38,
      26,
      39,
      31,
      17,
      25
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "3 Nephi",
    bookSubtitle: "the Son of Nephi, Who Was the Son of Helaman",
    bookOsisID: "3Ne",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [
      "3 Ne",
      "3rd Nephi",
      "Third Nephi",
      "III Nephi"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "0005-01-01",
    dateLatest: "0035-01-01",
    chapterCount: 30,
    verseCounts: [
      0,
      30,
      19,
      26,
      33,
      26,
      30,
      26,
      25,
      22,
      19,
      41,
      48,
      34,
      27,
      24,
      20,
      25,
      39,
      36,
      46,
      29,
      17,
      14,
      18,
      6,
      21,
      33,
      40,
      9,
      2
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "4 Nephi",
    bookSubtitle: "Who Is the Son of Nephi—One of the Disciples of Jesus Christ",
    bookOsisID: "4Ne",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [
      "4 Ne",
      "4th Nephi",
      "Fourth Nephi",
      "IV Nephi"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "0035-01-01",
    dateLatest: "0321-01-01",
    chapterCount: 1,
    verseCounts: [
      0,
      49
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Mormon",
    bookSubtitle: "",
    bookOsisID: "Morm",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [
      "Mmn"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "0321-01-01",
    dateLatest: "0421-01-01",
    chapterCount: 9,
    verseCounts: [
      0,
      19,
      29,
      22,
      23,
      24,
      22,
      10,
      41,
      37
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Ether",
    bookSubtitle: "The record of the Jaredites, taken from the twenty-four plates found by the people of Limhi in the days of King Mosiah.",
    bookOsisID: "Eth",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "-2200-01-01",
    dateLatest: "-0350-01-01",
    chapterCount: 15,
    verseCounts: [
      0,
      43,
      25,
      28,
      19,
      6,
      30,
      27,
      26,
      35,
      34,
      23,
      41,
      31,
      31,
      34
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "BofM",
    bookName: "Moroni",
    bookSubtitle: "",
    bookOsisID: "Moro",
    paratext: null,
    groups: [
      "Book of Mormon",
      "LDS",
      "Mormon",
      "Large Plates of Nephi",
      "Abridgement"
    ],
    aliases: [
      "Mni"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Mormon"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "0401-01-01",
    dateLatest: "0401-01-01",
    chapterCount: 10,
    verseCounts: [
      0,
      4,
      3,
      4,
      3,
      2,
      9,
      48,
      30,
      26,
      34
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "PGP",
    bookName: "Moses",
    bookSubtitle: "Selections from the Book of Moses",
    bookOsisID: "Mos",
    paratext: null,
    groups: [
      "Pearl of Great Price",
      "Inspired Translation",
      "Joseph Smith Translation",
      "JST",
      "Joseph Smith",
      "LDS"
    ],
    aliases: [
      "The Book of Moses"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Moses"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1830-06-01",
    dateLatest: "1831-02-01",
    chapterCount: 8,
    verseCounts: [
      0,
      42,
      31,
      25,
      32,
      59,
      68,
      69,
      30
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "PGP",
    bookName: "Abraham",
    bookSubtitle: "Translated from the Papyrus, by Joseph Smith",
    bookOsisID: "Abr",
    paratext: null,
    groups: [
      "Pearl of Great Price",
      "Inspired Translation",
      "Joseph Smith Translation",
      "JST",
      "Joseph Smith",
      "LDS"
    ],
    aliases: [
      "The Book of Abraham"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Abraham"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1835-07-01",
    dateLatest: "1842-07-01",
    chapterCount: 5,
    verseCounts: [
      0,
      31,
      25,
      28,
      31,
      21
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "PGP",
    bookName: "Articles of Faith",
    bookSubtitle: "of The Church of Jesus Christ of Latter-day Saints",
    bookOsisID: "AofF",
    paratext: null,
    groups: [
      "Pearl of Great Price",
      "LDS",
      "Joseph Smith"
    ],
    aliases: [
      "AofF"
    ],
    chapterLabel: "",
    verseLabel: "Article",
    authors: [
      "Joseph Smith"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1842-03-01",
    dateLatest: "1842-03-01",
    chapterCount: 1,
    verseCounts: [
      0,
      13
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "PGP",
    bookName: "Joseph Smith—History",
    bookSubtitle: "Extracts from the History of Joseph Smith, the Prophet",
    bookOsisID: "JSH",
    paratext: null,
    groups: [
      "Pearl of Great Price",
      "Inspired Translation",
      "Joseph Smith Translation",
      "JST",
      "Joseph Smith",
      "LDS"
    ],
    aliases: [
      "JSH",
      "JS-H",
      "Joseph Smith History",
      "Joseph Smith--History"
    ],
    chapterLabel: "",
    verseLabel: "Verse",
    authors: [
      "Joseph Smith"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1838-04-01",
    dateLatest: "1838-04-30",
    chapterCount: 1,
    verseCounts: [
      0,
      75
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "PGP",
    bookName: "Joseph Smith—Matthew",
    bookSubtitle: "An extract from the translation of the Bible as revealed to Joseph Smith the Prophet in 1831: Matthew 23:39 and chapter 24",
    bookOsisID: "JSM",
    paratext: null,
    groups: [
      "Pearl of Great Price",
      "Inspired Translation",
      "Joseph Smith Translation",
      "JST",
      "Joseph Smith",
      "LDS"
    ],
    aliases: [
      "JSM",
      "JS-M",
      "Joseph Smith Matthew",
      "Joseph Smith--Matthew"
    ],
    chapterLabel: "",
    verseLabel: "Verse",
    authors: [
      "St. Matthew"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1831-03-07",
    dateLatest: "1831-03-10",
    chapterCount: 1,
    verseCounts: [
      0,
      55
    ],
    hasData: true,
    work: null
  },
  {
    workOsisID: "D&C",
    bookName: "D&C",
    bookSubtitle: "of The Church of Jesus Christ of Latter-day Saints",
    bookOsisID: "D&C",
    paratext: null,
    groups: [
      "Doctrine and Covenants",
      "LDS"
    ],
    aliases: [
      "D and C",
      "The Doctrine & Covenants",
      "Doctrine & Covenants",
      "The Doctrine and Covenants"
    ],
    chapterLabel: "Section",
    verseLabel: "Verse",
    authors: [
      "Joseph Smith"
    ],
    traditions: [
      "lds"
    ],
    dateEarliest: "1823-09-21",
    dateLatest: "1841-01-19",
    chapterCount: 138,
    verseCounts: [
      0,
      39,
      3,
      20,
      7,
      35,
      37,
      8,
      12,
      14,
      70,
      30,
      9,
      1,
      11,
      6,
      6,
      9,
      47,
      41,
      84,
      12,
      4,
      7,
      19,
      16,
      2,
      18,
      16,
      50,
      11,
      13,
      5,
      18,
      12,
      27,
      8,
      4,
      42,
      24,
      3,
      12,
      93,
      35,
      6,
      75,
      33,
      4,
      6,
      28,
      46,
      20,
      44,
      7,
      10,
      6,
      20,
      16,
      65,
      24,
      17,
      39,
      9,
      66,
      43,
      6,
      13,
      14,
      35,
      8,
      18,
      11,
      26,
      6,
      7,
      36,
      119,
      15,
      22,
      4,
      5,
      7,
      24,
      6,
      120,
      12,
      11,
      8,
      141,
      21,
      37,
      6,
      2,
      53,
      17,
      17,
      9,
      28,
      48,
      8,
      17,
      101,
      34,
      40,
      86,
      41,
      8,
      100,
      8,
      80,
      16,
      11,
      34,
      10,
      2,
      19,
      1,
      16,
      6,
      7,
      1,
      46,
      9,
      17,
      145,
      4,
      3,
      12,
      25,
      9,
      23,
      8,
      66,
      74,
      12,
      7,
      42,
      10,
      60
    ],
    hasData: true,
    work: null
  }
];
var b = books;
var booksLookup = {
  GENESIS: b[0],
  GEN: b[0],
  GE: b[0],
  GN: b[0],
  "THE FIRST BOOK OF MOSES CALLED GENESIS": b[0],
  EXODUS: b[1],
  EXOD: b[1],
  EXO: b[1],
  EX: b[1],
  "THE SECOND BOOK OF MOSES CALLED EXODUS": b[1],
  LEVITICUS: b[2],
  LEV: b[2],
  LE: b[2],
  "THE THIRD BOOK OF MOSES CALLED LEVITICUS": b[2],
  NUMBERS: b[3],
  NUM: b[3],
  NU: b[3],
  NM: b[3],
  NB: b[3],
  "THE FOURTH BOOK OF MOSES CALLED NUMBERS": b[3],
  DEUTERONOMY: b[4],
  DEUT: b[4],
  DEU: b[4],
  DT: b[4],
  DU: b[4],
  "THE FIFTH BOOK OF MOSES CALLED DEUTERONOMY": b[4],
  JOSHUA: b[5],
  JOSH: b[5],
  JOS: b[5],
  JUDGES: b[6],
  JUDG: b[6],
  JDG: b[6],
  JDGS: b[6],
  JG: b[6],
  RUTH: b[7],
  RUT: b[7],
  RTH: b[7],
  RU: b[7],
  "1 SAMUEL": b[8],
  "1SAM": b[8],
  "1SA": b[8],
  "1 SAM": b[8],
  "1 SM": b[8],
  "1 SA": b[8],
  "1 S": b[8],
  "I SAM": b[8],
  "I SA": b[8],
  "1S": b[8],
  "1ST SAMUEL": b[8],
  "1ST SAM": b[8],
  "FIRST SAMUEL": b[8],
  "FIRST SAM": b[8],
  "2 SAMUEL": b[9],
  "2SAM": b[9],
  "2SA": b[9],
  "2 SAM": b[9],
  "2 SM": b[9],
  "2 SA": b[9],
  "2 S": b[9],
  "II SAM": b[9],
  "II SA": b[9],
  "2S": b[9],
  "2ND SAMUEL": b[9],
  "2ND SAM": b[9],
  "SECOND SAMUEL": b[9],
  "SECOND SAM": b[9],
  "1 KINGS": b[10],
  "1KGS": b[10],
  "1KI": b[10],
  "1 KGS": b[10],
  "1 KI": b[10],
  "1KIN": b[10],
  "1K": b[10],
  "I KGS": b[10],
  "I KI": b[10],
  "1ST KINGS": b[10],
  "1ST KGS": b[10],
  "FIRST KINGS": b[10],
  "FIRST KGS": b[10],
  "2 KINGS": b[11],
  "2KGS": b[11],
  "2KI": b[11],
  "2 KGS": b[11],
  "2 KI": b[11],
  "2KIN": b[11],
  "2K": b[11],
  "II KGS": b[11],
  "II KI": b[11],
  "2ND KINGS": b[11],
  "2ND KGS": b[11],
  "SECOND KINGS": b[11],
  "SECOND KGS": b[11],
  "1 CHRONICLES": b[12],
  "1CHR": b[12],
  "1CH": b[12],
  "1 CHRON": b[12],
  "1 CHR": b[12],
  "1 CH": b[12],
  "1CHRON": b[12],
  "I CHRON": b[12],
  "I CHR": b[12],
  "I CH": b[12],
  "1ST CHRONICLES": b[12],
  "1ST CHRON": b[12],
  "FIRST CHRONICLES": b[12],
  "FIRST CHRON": b[12],
  "2 CHRONICLES": b[13],
  "2CHR": b[13],
  "2CH": b[13],
  "2 CHRON": b[13],
  "2 CHR": b[13],
  "2 CH": b[13],
  "2CHRON": b[13],
  "II CHRON": b[13],
  "II CHR": b[13],
  "II CH": b[13],
  "2ND CHRONICLES": b[13],
  "2ND CHRON": b[13],
  "SECOND CHRONICLES": b[13],
  "SECOND CHRON": b[13],
  EZRA: b[14],
  EZR: b[14],
  EZ: b[14],
  NEHEMIAH: b[15],
  NEH: b[15],
  NE: b[15],
  ESTHER: b[16],
  ESTH: b[16],
  EST: b[16],
  ES: b[16],
  JOB: b[17],
  JB: b[17],
  PSALMS: b[18],
  PS: b[18],
  PSA: b[18],
  PSALM: b[18],
  PSLM: b[18],
  PSM: b[18],
  PSS: b[18],
  PROVERBS: b[19],
  PROV: b[19],
  PRO: b[19],
  PRV: b[19],
  PV: b[19],
  ECCLESIASTES: b[20],
  ECCL: b[20],
  ECC: b[20],
  QOHELET: b[20],
  "SONG OF SOLOMON": b[21],
  SONG: b[21],
  SNG: b[21],
  "CANTICLE OF CANTICLES": b[21],
  "SOLOMON'S SONG": b[21],
  ISAIAH: b[22],
  ISA: b[22],
  IS: b[22],
  JEREMIAH: b[23],
  JER: b[23],
  JE: b[23],
  JR: b[23],
  LAMENTATIONS: b[24],
  LAM: b[24],
  LA: b[24],
  EZEKIEL: b[25],
  EZEK: b[25],
  EZK: b[25],
  DANIEL: b[26],
  DAN: b[26],
  DA: b[26],
  DN: b[26],
  HOSEA: b[27],
  HOS: b[27],
  HO: b[27],
  JOEL: b[28],
  JOL: b[28],
  JL: b[28],
  AMOS: b[29],
  AMO: b[29],
  AM: b[29],
  OBADIAH: b[30],
  OBAD: b[30],
  OBA: b[30],
  OB: b[30],
  JONAH: b[31],
  JON: b[31],
  MICAH: b[32],
  MIC: b[32],
  MC: b[32],
  NAHUM: b[33],
  NAH: b[33],
  NAM: b[33],
  NH: b[33],
  NHM: b[33],
  HABAKKUK: b[34],
  HAB: b[34],
  HB: b[34],
  ZEPHANIAH: b[35],
  ZEPH: b[35],
  ZEP: b[35],
  ZP: b[35],
  HAGGAI: b[36],
  HAG: b[36],
  HG: b[36],
  HGI: b[36],
  HAGI: b[36],
  ZECHARIAH: b[37],
  ZECH: b[37],
  ZEC: b[37],
  ZC: b[37],
  MALACHI: b[38],
  MAL: b[38],
  ML: b[38],
  MATTHEW: b[39],
  MATT: b[39],
  MAT: b[39],
  "ST MATTHEW": b[39],
  "ST. MATTHEW": b[39],
  "SAINT MATTHEW": b[39],
  "THE GOSPEL ACCORDING TO ST MATTHEW": b[39],
  "THE GOSPEL ACCORDING TO ST. MATTHEW": b[39],
  "THE GOSPEL ACCORDING TO SAINT MATTHEW": b[39],
  MARK: b[40],
  MRK: b[40],
  "ST MARK": b[40],
  "ST. MARK": b[40],
  "SAINT MARK": b[40],
  "THE GOSPEL ACCORDING TO ST MARK": b[40],
  "THE GOSPEL ACCORDING TO ST. MARK": b[40],
  "THE GOSPEL ACCORDING TO SAINT MARK": b[40],
  LUKE: b[41],
  LUK: b[41],
  "ST LUKE": b[41],
  "ST. LUKE": b[41],
  "SAINT LUKE": b[41],
  "THE GOSPEL ACCORDING TO ST LUKE": b[41],
  "THE GOSPEL ACCORDING TO ST. LUKE": b[41],
  "THE GOSPEL ACCORDING TO SAINT LUKE": b[41],
  JOHN: b[42],
  JHN: b[42],
  "ST JOHN": b[42],
  "ST. JOHN": b[42],
  "SAINT JOHN": b[42],
  "THE GOSPEL ACCORDING TO ST JOHN": b[42],
  "THE GOSPEL ACCORDING TO ST. JOHN": b[42],
  "THE GOSPEL ACCORDING TO SAINT JOHN": b[42],
  ACTS: b[43],
  ACT: b[43],
  AC: b[43],
  ROMANS: b[44],
  ROM: b[44],
  RO: b[44],
  RM: b[44],
  "1 CORINTHIANS": b[45],
  "1COR": b[45],
  "1CO": b[45],
  "1 COR": b[45],
  "1 CO": b[45],
  "I COR": b[45],
  "I CO": b[45],
  "I CORINTHIANS": b[45],
  "1CORINTHIANS": b[45],
  "1ST CORINTHIANS": b[45],
  "FIRST CORINTHIANS": b[45],
  "2 CORINTHIANS": b[46],
  "2COR": b[46],
  "2CO": b[46],
  "2 COR": b[46],
  "2 CO": b[46],
  "II COR": b[46],
  "II CO": b[46],
  "II CORINTHIANS": b[46],
  "2CORINTHIANS": b[46],
  "2ND CORINTHIANS": b[46],
  "SECOND CORINTHIANS": b[46],
  GALATIANS: b[47],
  GAL: b[47],
  GA: b[47],
  EPHESIANS: b[48],
  EPH: b[48],
  EPHES: b[48],
  EP: b[48],
  PHILIPPIANS: b[49],
  PHIL: b[49],
  PHP: b[49],
  PP: b[49],
  COLOSSIANS: b[50],
  COL: b[50],
  CO: b[50],
  "1 THESSALONIANS": b[51],
  "1THESS": b[51],
  "1TH": b[51],
  "1 THESS": b[51],
  "1 THES": b[51],
  "1 TH": b[51],
  "I THESSALONIANS": b[51],
  "I THESS": b[51],
  "I THES": b[51],
  "I TH": b[51],
  "1THESSALONIANS": b[51],
  "1THES": b[51],
  "1ST THESSALONIANS": b[51],
  "1ST THESS": b[51],
  "FIRST THESSALONIANS": b[51],
  "FIRST THESS": b[51],
  "2 THESSALONIANS": b[52],
  "2THESS": b[52],
  "2TH": b[52],
  "2 THESS": b[52],
  "2 THES": b[52],
  "2 TH": b[52],
  "II THESSALONIANS": b[52],
  "II THESS": b[52],
  "II THES": b[52],
  "II TH": b[52],
  "2THESSALONIANS": b[52],
  "2THES": b[52],
  "2ND THESSALONIANS": b[52],
  "2ND THESS": b[52],
  "SECOND THESSALONIANS": b[52],
  "SECOND THESS": b[52],
  "1 TIMOTHY": b[53],
  "1TIM": b[53],
  "1TI": b[53],
  "1 TIM": b[53],
  "1 TI": b[53],
  "I TIMOTHY": b[53],
  "I TIM": b[53],
  "I TI": b[53],
  "1TIMOTHY": b[53],
  "1ST TIMOTHY": b[53],
  "1ST TIM": b[53],
  "FIRST TIMOTHY": b[53],
  "FIRST TIM": b[53],
  "2 TIMOTHY": b[54],
  "2TIM": b[54],
  "2TI": b[54],
  "2 TIM": b[54],
  "2 TI": b[54],
  "II TIMOTHY": b[54],
  "II TIM": b[54],
  "II TI": b[54],
  "2TIMOTHY": b[54],
  "2ND TIMOTHY": b[54],
  "2ND TIM": b[54],
  "SECOND TIMOTHY": b[54],
  "SECOND TIM": b[54],
  TITUS: b[55],
  TIT: b[55],
  TI: b[55],
  TTS: b[55],
  PHILEMON: b[56],
  PHLM: b[56],
  PHM: b[56],
  PM: b[56],
  HEBREWS: b[57],
  HEB: b[57],
  JAMES: b[58],
  JAS: b[58],
  JM: b[58],
  "1 PETER": b[59],
  "1PET": b[59],
  "1PE": b[59],
  "1 PET": b[59],
  "1 PE": b[59],
  "1 PT": b[59],
  "1 P": b[59],
  "I PET": b[59],
  "I PT": b[59],
  "I PE": b[59],
  "1PETER": b[59],
  "1PT": b[59],
  "1P": b[59],
  "I PETER": b[59],
  "1ST PETER": b[59],
  "FIRST PETER": b[59],
  "2 PETER": b[60],
  "2PET": b[60],
  "2PE": b[60],
  "2 PET": b[60],
  "2 PE": b[60],
  "2 PT": b[60],
  "2 P": b[60],
  "II PETER": b[60],
  "II PET": b[60],
  "II PT": b[60],
  "II PE": b[60],
  "2PETER": b[60],
  "2PT": b[60],
  "2P": b[60],
  "2ND PETER": b[60],
  "SECOND PETER": b[60],
  "1 JOHN": b[61],
  "1JOHN": b[61],
  "1JN": b[61],
  "1 JHN": b[61],
  "1 JN": b[61],
  "1 J": b[61],
  "1JHN": b[61],
  "1JOH": b[61],
  "1JO": b[61],
  "1J": b[61],
  "I JOHN": b[61],
  "I JHN": b[61],
  "I JOH": b[61],
  "I JN": b[61],
  "I JO": b[61],
  "1ST JOHN": b[61],
  "FIRST JOHN": b[61],
  "2 JOHN": b[62],
  "2JOHN": b[62],
  "2JN": b[62],
  "2 JHN": b[62],
  "2 JN": b[62],
  "2 J": b[62],
  "2JHN": b[62],
  "2JOH": b[62],
  "2JO": b[62],
  "2J": b[62],
  "II JOHN": b[62],
  "II JHN": b[62],
  "II JOH": b[62],
  "II JN": b[62],
  "II JO": b[62],
  "2ND JOHN": b[62],
  "SECOND JOHN": b[62],
  "3 JOHN": b[63],
  "3JOHN": b[63],
  "3JN": b[63],
  "3 JHN": b[63],
  "3 JN": b[63],
  "3 J": b[63],
  "3JHN": b[63],
  "3JOH": b[63],
  "3JO": b[63],
  "3J": b[63],
  "III JOHN": b[63],
  "III JHN": b[63],
  "III JOH": b[63],
  "III JN": b[63],
  "III JO": b[63],
  "3RD JOHN": b[63],
  "THIRD JOHN": b[63],
  JUDE: b[64],
  JUD: b[64],
  JD: b[64],
  REVELATION: b[65],
  REV: b[65],
  RE: b[65],
  "THE REVELATION": b[65],
  TOBIT: b[66],
  TOB: b[66],
  JUDITH: b[67],
  JDT: b[67],
  "ADDITIONS TO ESTHER": b[68],
  ADDESTH: b[68],
  ADE: b[68],
  AES: b[68],
  WISDOM: b[69],
  WIS: b[69],
  "WISDOM OF SOLOMON": b[69],
  SIRACH: b[70],
  SIR: b[70],
  ECCLESIASTICUS: b[70],
  "EPISTLE OF JEREMIAH": b[71],
  EPJER: b[71],
  LJE: b[71],
  EPJ: b[71],
  "THE EPISTLE OF JEREMIAH": b[71],
  "THE LETTER OF JEREMIAH": b[71],
  "LETTER OF JEREMIAH": b[71],
  "PRAYER OF AZARIAH": b[72],
  PRAZAR: b[72],
  S3Y: b[72],
  "SONG OF THE THREE CHILDREN": b[72],
  "SONG OF THE THREE HOLY CHILDREN": b[72],
  AZA: b[72],
  SUSANNA: b[73],
  SUS: b[73],
  "BEL AND THE DRAGON": b[74],
  BEL: b[74],
  "1 MACCABEES": b[75],
  "1MACC": b[75],
  "1MA": b[75],
  MA1: b[75],
  "2 MACCABEES": b[76],
  "2MACC": b[76],
  "2MA": b[76],
  MA2: b[76],
  "PRAYER OF MANASSEH": b[77],
  PRMAN: b[77],
  MAN: b[77],
  "1 ESDRAS": b[78],
  "1ESD": b[78],
  "1ES": b[78],
  ES1: b[78],
  "2 ESDRAS": b[79],
  "2ESD": b[79],
  "2ES": b[79],
  ES2: b[79],
  "EPISTLE TO THE LAODICEANS": b[80],
  EPLAO: b[80],
  LAO: b[80],
  LAODICEANS: b[80],
  "PAUL'S EPISTLE TO THE LAODICEANS": b[80],
  DIDACHE: b[81],
  DID: b[81],
  "1 NEPHI": b[82],
  "1NE": b[82],
  "1 NE": b[82],
  "1ST NEPHI": b[82],
  "FIRST NEPHI": b[82],
  "THE FIRST BOOK OF NEPHI": b[82],
  "I NEPHI": b[82],
  "2 NEPHI": b[83],
  "2NE": b[83],
  "2 NE": b[83],
  "2ND NEPHI": b[83],
  "SECOND NEPHI": b[83],
  "THE SECOND BOOK OF NEPHI": b[83],
  "II NEPHI": b[83],
  JACOB: b[84],
  JAC: b[84],
  ENOS: b[85],
  JAROM: b[86],
  JAR: b[86],
  OMNI: b[87],
  "WORDS OF MORMON": b[88],
  WOM: b[88],
  MOSIAH: b[89],
  MOSI: b[89],
  ALMA: b[90],
  HELAMAN: b[91],
  HEL: b[91],
  HE: b[91],
  HLM: b[91],
  HELM: b[91],
  "3 NEPHI": b[92],
  "3NE": b[92],
  "3 NE": b[92],
  "3RD NEPHI": b[92],
  "THIRD NEPHI": b[92],
  "III NEPHI": b[92],
  "4 NEPHI": b[93],
  "4NE": b[93],
  "4 NE": b[93],
  "4TH NEPHI": b[93],
  "FOURTH NEPHI": b[93],
  "IV NEPHI": b[93],
  MORMON: b[94],
  MORM: b[94],
  MMN: b[94],
  ETHER: b[95],
  ETH: b[95],
  MORONI: b[96],
  MORO: b[96],
  MNI: b[96],
  MOSES: b[97],
  MOS: b[97],
  "THE BOOK OF MOSES": b[97],
  ABRAHAM: b[98],
  ABR: b[98],
  "THE BOOK OF ABRAHAM": b[98],
  "ARTICLES OF FAITH": b[99],
  AOFF: b[99],
  "JOSEPH SMITH—HISTORY": b[100],
  JSH: b[100],
  "JS-H": b[100],
  "JOSEPH SMITH HISTORY": b[100],
  "JOSEPH SMITH--HISTORY": b[100],
  "JOSEPH SMITH—MATTHEW": b[101],
  JSM: b[101],
  "JS-M": b[101],
  "JOSEPH SMITH MATTHEW": b[101],
  "JOSEPH SMITH--MATTHEW": b[101],
  "D&C": b[102],
  "D AND C": b[102],
  "THE DOCTRINE & COVENANTS": b[102],
  "DOCTRINE & COVENANTS": b[102],
  "THE DOCTRINE AND COVENANTS": b[102]
};
var groupsLookup = {
  "OLD TESTAMENT": [
    b[0],
    b[1],
    b[2],
    b[3],
    b[4],
    b[5],
    b[6],
    b[7],
    b[8],
    b[9],
    b[10],
    b[11],
    b[12],
    b[13],
    b[14],
    b[15],
    b[16],
    b[17],
    b[18],
    b[19],
    b[20],
    b[21],
    b[22],
    b[23],
    b[24],
    b[25],
    b[26],
    b[27],
    b[28],
    b[29],
    b[30],
    b[31],
    b[32],
    b[33],
    b[34],
    b[35],
    b[36],
    b[37],
    b[38]
  ],
  "HEBREW BIBLE": [
    b[0],
    b[1],
    b[2],
    b[3],
    b[4],
    b[5],
    b[6],
    b[7],
    b[8],
    b[9],
    b[10],
    b[11],
    b[12],
    b[13],
    b[14],
    b[15],
    b[16],
    b[17],
    b[18],
    b[19],
    b[20],
    b[21],
    b[22],
    b[23],
    b[24],
    b[25],
    b[26],
    b[27],
    b[28],
    b[29],
    b[30],
    b[31],
    b[32],
    b[33],
    b[34],
    b[35],
    b[36],
    b[37],
    b[38]
  ],
  BIBLE: [
    b[0],
    b[1],
    b[2],
    b[3],
    b[4],
    b[5],
    b[6],
    b[7],
    b[8],
    b[9],
    b[10],
    b[11],
    b[12],
    b[13],
    b[14],
    b[15],
    b[16],
    b[17],
    b[18],
    b[19],
    b[20],
    b[21],
    b[22],
    b[23],
    b[24],
    b[25],
    b[26],
    b[27],
    b[28],
    b[29],
    b[30],
    b[31],
    b[32],
    b[33],
    b[34],
    b[35],
    b[36],
    b[37],
    b[38],
    b[39],
    b[40],
    b[41],
    b[42],
    b[43],
    b[44],
    b[45],
    b[46],
    b[47],
    b[48],
    b[49],
    b[50],
    b[51],
    b[52],
    b[53],
    b[54],
    b[55],
    b[56],
    b[57],
    b[58],
    b[59],
    b[60],
    b[61],
    b[62],
    b[63],
    b[64],
    b[65]
  ],
  PENTATUECH: [
    b[0],
    b[1],
    b[2],
    b[3]
  ],
  TORAH: [
    b[0],
    b[1],
    b[2],
    b[3]
  ],
  KINGS: [
    b[10],
    b[11]
  ],
  "PERSIAN PERIOD": [
    b[12],
    b[13],
    b[14],
    b[15]
  ],
  "NEW TESTAMENT": [
    b[39],
    b[40],
    b[41],
    b[42],
    b[43],
    b[44],
    b[45],
    b[46],
    b[47],
    b[48],
    b[49],
    b[50],
    b[51],
    b[52],
    b[53],
    b[54],
    b[55],
    b[56],
    b[57],
    b[58],
    b[59],
    b[60],
    b[61],
    b[62],
    b[63],
    b[64],
    b[65]
  ],
  GOSPELS: [
    b[39],
    b[40],
    b[41],
    b[42]
  ],
  "PAULINE EPISTLES": [
    b[44],
    b[45],
    b[46],
    b[47],
    b[48],
    b[49],
    b[50],
    b[51],
    b[52],
    b[53],
    b[54],
    b[55],
    b[56]
  ],
  DEUTEROCANNON: [
    b[66],
    b[67],
    b[68],
    b[69],
    b[70],
    b[71],
    b[72],
    b[73],
    b[74],
    b[75],
    b[76],
    b[77],
    b[78],
    b[79]
  ],
  APOCRYPHA: [
    b[66],
    b[67],
    b[68],
    b[69],
    b[70],
    b[71],
    b[72],
    b[73],
    b[74],
    b[75],
    b[76],
    b[77],
    b[78],
    b[79],
    b[80],
    b[81]
  ],
  VULGATE: [
    b[80]
  ],
  "APOSTOLIC FATHERS": [
    b[81]
  ],
  "BOOK OF MORMON": [
    b[82],
    b[83],
    b[84],
    b[85],
    b[86],
    b[87],
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95],
    b[96]
  ],
  "SMALL PLATES OF NEPHI": [
    b[82],
    b[83],
    b[84],
    b[85],
    b[86],
    b[87]
  ],
  LDS: [
    b[82],
    b[83],
    b[84],
    b[85],
    b[86],
    b[87],
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95],
    b[96],
    b[97],
    b[98],
    b[99],
    b[100],
    b[101],
    b[102]
  ],
  MORMON: [
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95],
    b[96]
  ],
  "LARGE PLATES OF NEPHI": [
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95],
    b[96]
  ],
  ABRIDGEMENT: [
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95],
    b[96]
  ],
  "PEARL OF GREAT PRICE": [
    b[97],
    b[98],
    b[99],
    b[100],
    b[101]
  ],
  "INSPIRED TRANSLATION": [
    b[97],
    b[98],
    b[100],
    b[101]
  ],
  "JOSEPH SMITH TRANSLATION": [
    b[97],
    b[98],
    b[100],
    b[101]
  ],
  JST: [
    b[97],
    b[98],
    b[100],
    b[101]
  ],
  "JOSEPH SMITH": [
    b[97],
    b[98],
    b[99],
    b[100],
    b[101]
  ],
  "DOCTRINE AND COVENANTS": [
    b[102]
  ]
};
for (const book of books) {
  const work = worksLookup[book.workOsisID.toUpperCase()];
  if (!work) {
    console.error(`Unable to find work for book ${book.bookOsisID} with work ${book.workOsisID}`);
    continue;
  }
  if (!work.books) {
    work.books = [];
  }
  work.books.push(book);
  book.work = work;
}
for (const work of works) {
  work.bookCount = work.books.length;
}

// src/tools/getBookByName.ts
function getBookByName(name) {
  return booksLookup[String(name || "").toUpperCase()];
}
// src/tools/getWorkByName.ts
function getWorkByName(name) {
  return worksLookup[String(name || "").toUpperCase()];
}
// src/tools/parseVerseRange.ts
var trim = (s) => s.trim();
function parseVerseRange(givenVerseOsisIDs) {
  const [bookOsisID, chapterNumber] = givenVerseOsisIDs[0].split(".").map(trim);
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const givenVerseNumbers = givenVerseOsisIDs.map((v) => Number(v.split(".").pop())).filter(Boolean);
  const startNumber = givenVerseNumbers[0];
  const endNumber = givenVerseNumbers[givenVerseNumbers.length - 1];
  const verseOsisIDs = [];
  const verseNumbers = [];
  for (let i = startNumber;i <= endNumber; i++) {
    verseOsisIDs.push(`${chapterOsisID}.${i}`);
    verseNumbers.push(i);
  }
  const book = getBookByName(bookOsisID) || null;
  const work = book ? getWorkByName(book.workOsisID) || null : null;
  const workOsisID = book ? book.workOsisID : null;
  return {
    workOsisID,
    bookOsisID,
    chapterOsisID,
    chapterNumber,
    verseNumbers,
    verseOsisIDs,
    book,
    work
  };
}

// src/tools/parseCitation.ts
var trim2 = (s) => s.trim();
function parseCitation(citation) {
  const groups = citation.split(",").map(trim2);
  const verseOsisIDs = [];
  for (let group of groups) {
    if (/^[^:]+ \d+$/.test(group)) {
      group += ":1";
    }
    if (/^\d+$/.test(group)) {
      const last = verseOsisIDs[verseOsisIDs.length - 1];
      if (!last) {
        continue;
      }
      verseOsisIDs.push(last.replace(/\.\d+$/, `.${group}`));
      continue;
    }
    const numRange = group.match(/^([^–-]+?)\s*[–-]\s*(\d+)$/);
    if (numRange && group.includes(":")) {
      const { bookOsisID: bookOsisID2, chapter: chapter2, verse: verse2 } = parseVerse(numRange[1]);
      if (!bookOsisID2 || !chapter2 || !verse2) {
        continue;
      }
      const start = `${bookOsisID2}.${chapter2}.${verse2}`;
      if (verse2 > parseInt(numRange[2], 10)) {
        verseOsisIDs.push(start);
        continue;
      }
      const end = `${bookOsisID2}.${chapter2}.${numRange[2]}`;
      const range = parseVerseRange([start, end]);
      verseOsisIDs.push(...range.verseOsisIDs);
      continue;
    } else if (numRange) {
      const bookChapter = numRange[1].match(/^(.+?)\s(\d+)$/);
      if (!bookChapter) {
        continue;
      }
      const bookName = bookChapter[1];
      const book = getBookByName(bookName);
      const bookOsisID2 = book?.bookOsisID || bookName;
      verseOsisIDs.push(`${bookOsisID2}.${bookChapter[2]}.1`);
      continue;
    }
    const { bookOsisID, chapter, verse } = parseVerse(group);
    if (!bookOsisID || !chapter || !verse) {
      continue;
    }
    verseOsisIDs.push(`${bookOsisID}.${chapter}.${verse}`);
  }
  return verseOsisIDs;
}
function parseVerse(verseString) {
  const parts = verseString.split(/[.\s:]+/).map(trim2);
  const verse = parseInt(parts.pop() || "0", 10);
  const chapter = parseInt(parts.pop() || "0", 10);
  const bookName = parts.join(" ");
  const book = getBookByName(bookName);
  const bookOsisID = book?.bookOsisID || bookName;
  return { bookOsisID, chapter, verse };
}
// src/tools/parseVerseRangeWithContext.ts
var trim3 = (s) => s.trim();
function parseVerseRangeWithContext(givenVerseOsisIDs) {
  const [bookOsisID, chapterNumber] = givenVerseOsisIDs[0].split(".").map(trim3);
  const chapterOsisID = `${bookOsisID}.${chapterNumber}`;
  const givenVerseNumbers = givenVerseOsisIDs.map((v) => Number(v.split(".").pop())).filter(Boolean);
  const prevNumber = givenVerseNumbers[0] - 1 || givenVerseNumbers[0];
  const endNumber = givenVerseNumbers[givenVerseNumbers.length - 1];
  const nextNumber = endNumber + 1;
  const verseOsisIDs = [];
  const verseNumbers = [];
  for (let i = prevNumber;i <= nextNumber; i++) {
    verseOsisIDs.push(`${chapterOsisID}.${i}`);
    verseNumbers.push(i);
  }
  return {
    bookOsisID,
    chapterOsisID,
    chapterNumber,
    verseNumbers,
    verseOsisIDs
  };
}
// src/tools/osisToCitation.ts
var trim4 = (s) => s.trim();
function osisToCitation(osis) {
  if (!osis) {
    return null;
  }
  const [rawBook, chapter, verse] = osis.split(".").map(trim4);
  const book = getBookByName(rawBook);
  const shortName = book?.bookOsisID || rawBook;
  const fullName = book?.bookName || rawBook;
  if (chapter && verse) {
    return {
      short: `${shortName} ${chapter}:${verse}`,
      long: `${fullName} ${chapter}:${verse}`
    };
  } else if (chapter) {
    return {
      short: `${shortName} ${chapter}`,
      long: `${fullName} ${chapter}`
    };
  } else {
    return {
      short: shortName,
      long: fullName
    };
  }
}
// src/tools/getChapterList.ts
function getChapterList(bookOsisID) {
  const book = getBookByName(bookOsisID);
  if (!book) {
    throw new Error(`Book ${bookOsisID} not found`);
  }
  const list = [];
  for (let i = 0;i < book.verseCounts.length; i++) {
    const count = book.verseCounts[i];
    if (count === 0) {
      continue;
    }
    list.push({
      chapterNumber: i,
      chapterLabel: i === 0 ? "Prologue" : `${book.chapterLabel} ${i}`,
      chapterAbbr: i === 0 ? "P" : String(i),
      verseCount: book.verseCounts[i]
    });
  }
  return list;
}
// src/tools/getRelativeChapter.ts
function getRelativeChapter(bookOsisID, chapterNumber, add) {
  let book = getBookByName(bookOsisID);
  if (!book) {
    return null;
  }
  add = Math.round(add);
  if (add === 0) {
    return toObject(book, chapterNumber);
  }
  const siblings = book.work.books;
  let idx = siblings.indexOf(book);
  const inc = add > 0 ? 1 : -1;
  let toMove = Math.abs(add);
  while (book && toMove-- > 0) {
    chapterNumber += inc;
    const verseCount = book.verseCounts[chapterNumber];
    if (verseCount === 0) {
      toMove++;
    } else if (verseCount === undefined) {
      idx += inc;
      book = siblings[idx];
      if (!book) {
        break;
      }
      if (inc === -1) {
        chapterNumber = book.verseCounts.length - 1;
      } else if (inc === 1) {
        chapterNumber = 1;
      }
    }
  }
  if (book) {
    return toObject(book, chapterNumber);
  } else {
    return null;
  }
}
function getNextChapter(bookOsisID, chapterNumber) {
  return getRelativeChapter(bookOsisID, chapterNumber, 1);
}
function getPreviousChapter(bookOsisID, chapterNumber) {
  return getRelativeChapter(bookOsisID, chapterNumber, -1);
}
function toObject(book, chapterNumber) {
  return {
    workOsisID: book.workOsisID,
    bookOsisID: book.bookOsisID,
    chapterOsisID: `${book.bookOsisID}.${chapterNumber}`,
    chapterNumber,
    chapterTitle: chapterNumber === 0 ? "Prologue" : `${book.chapterCount} ${chapterNumber}`
  };
}
