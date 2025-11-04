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
  worksLookup: () => worksLookup2,
  works: () => works2,
  verseOsisIDToCitation: () => verseOsisIDToCitation,
  parseVerseRangeWithContext: () => parseVerseRangeWithContext,
  parseVerseRange: () => parseVerseRange,
  parseCitation: () => parseCitation,
  osisToHuman: () => osisToHuman,
  groupsLookup: () => groupsLookup2,
  getWorkByName: () => getWorkByName,
  getBookByName: () => getBookByName,
  booksLookup: () => booksLookup2,
  books: () => books2
});
module.exports = __toCommonJS(exports_public_domain_books);

// src/data/allData.ts
var works = [
  {
    workOsisID: "KJV",
    workTitle: "The Holy Bible",
    workSubtitle: "King James Version",
    aliases: [
      "Bible",
      "Holy Bible"
    ]
  },
  {
    workOsisID: "KJVA",
    workTitle: "The Holy Bible Apocrypha",
    workSubtitle: "King James Version",
    aliases: [
      "King James Apocrypha"
    ]
  },
  {
    workOsisID: "T12Patr",
    workTitle: "Testaments of the Twelve Patriarchs",
    workSubtitle: "",
    aliases: [
      "The Testaments of the Twelve Patriarchs",
      "Testament of the Twelve Patriarchs",
      "Testament of the 12 Patriarchs",
      "Testaments of the 12 Patriarchs",
      "12 Patriarchs",
      "The 12 Patriarchs",
      "The Twelve Patriarchs",
      "T 12 Patriarchs",
      "12 Patr"
    ]
  },
  {
    workOsisID: "Didache",
    workTitle: "Didache",
    workSubtitle: "The Lord's Teaching Through the Twelve Apostles to the Nations",
    aliases: [
      "The Didache"
    ]
  },
  {
    workOsisID: "BofM",
    workTitle: "The Book of Mormon",
    workSubtitle: "Another Testament of Jesus Christ",
    aliases: [
      "BOM",
      "Book of Mormon"
    ]
  },
  {
    workOsisID: "PGP",
    workTitle: "Pearl of Great Price",
    workSubtitle: "",
    aliases: [
      "The Pearl of Great Price",
      "PGoP"
    ]
  },
  {
    workOsisID: "D&C",
    workTitle: "Doctrine and Covenants",
    workSubtitle: "",
    aliases: [
      "D and C",
      "The Doctrine & Covenants",
      "Doctrine & Covenants",
      "The Doctrine and Covenants"
    ]
  }
];
var w = works;
var worksLookup = {
  "THE HOLY BIBLE": w[0],
  KJV: w[0],
  BIBLE: w[0],
  "HOLY BIBLE": w[0],
  "THE HOLY BIBLE APOCRYPHA": w[1],
  KJVA: w[1],
  "KING JAMES APOCRYPHA": w[1],
  "TESTAMENTS OF THE TWELVE PATRIARCHS": w[2],
  T12PATR: w[2],
  "THE TESTAMENTS OF THE TWELVE PATRIARCHS": w[2],
  "TESTAMENT OF THE TWELVE PATRIARCHS": w[2],
  "TESTAMENT OF THE 12 PATRIARCHS": w[2],
  "TESTAMENTS OF THE 12 PATRIARCHS": w[2],
  "12 PATRIARCHS": w[2],
  "THE 12 PATRIARCHS": w[2],
  "THE TWELVE PATRIARCHS": w[2],
  "T 12 PATRIARCHS": w[2],
  "12 PATR": w[2],
  DIDACHE: w[3],
  "THE DIDACHE": w[3],
  "THE BOOK OF MORMON": w[4],
  BOFM: w[4],
  BOM: w[4],
  "BOOK OF MORMON": w[4],
  "PEARL OF GREAT PRICE": w[5],
  PGP: w[5],
  "THE PEARL OF GREAT PRICE": w[5],
  PGOP: w[5],
  "DOCTRINE AND COVENANTS": w[6],
  "D&C": w[6],
  "D AND C": w[6],
  "THE DOCTRINE & COVENANTS": w[6],
  "DOCTRINE & COVENANTS": w[6],
  "THE DOCTRINE AND COVENANTS": w[6]
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Exodus",
    bookSubtitle: "The Second Book of Moses, called Exodus",
    bookOsisID: "Exod",
    paratext: "EXO",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Leviticus",
    bookSubtitle: "The Third Book of Moses, called Leviticus",
    bookOsisID: "Lev",
    paratext: "LEV",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Numbers",
    bookSubtitle: "The Fourth Book of Moses, called Numbers",
    bookOsisID: "Num",
    paratext: "NUM",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Deuteronomy",
    bookSubtitle: "The Fifth Book of Moses, called Deuteronomy",
    bookOsisID: "Deut",
    paratext: "DEU",
    groups: [
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Joshua",
    bookSubtitle: "The Book of Joshua",
    bookOsisID: "Josh",
    paratext: "JOS",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Josh"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Judges",
    bookSubtitle: "The Book of Judges",
    bookOsisID: "Judg",
    paratext: "JDG",
    groups: [
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
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ruth",
    bookSubtitle: "The Book of Ruth",
    bookOsisID: "Ruth",
    paratext: "RUT",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Rth",
      "Ru"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Samuel",
    bookSubtitle: "The Book of 1 Samuel",
    bookOsisID: "1Sam",
    paratext: "1SA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "1 Sam",
      "1SA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Samuel",
    bookSubtitle: "The Book of 2 Samuel",
    bookOsisID: "2Sam",
    paratext: "2SA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "2 Sam",
      "2SA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Kings",
    bookSubtitle: "The First Book of Kings",
    bookOsisID: "1Kgs",
    paratext: "1KI",
    groups: [
      "Old Testament",
      "Bible",
      "Kings"
    ],
    aliases: [
      "1Kgs",
      "1KI"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Kings",
    bookSubtitle: "The Second Book of Kings",
    bookOsisID: "2Kgs",
    paratext: "2KI",
    groups: [
      "Old Testament",
      "Bible",
      "Kings"
    ],
    aliases: [
      "2Kgs",
      "2KI"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Chronicles",
    bookSubtitle: "The First Book of Chronicles",
    bookOsisID: "1Chr",
    paratext: "1CH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "1Chr",
      "1CH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Chronicles",
    bookSubtitle: "The Second Book of Chronicals",
    bookOsisID: "2Chr",
    paratext: "2CH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "2Chr",
      "2CH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ezra",
    bookSubtitle: "The Book of Ezra",
    bookOsisID: "Ezra",
    paratext: "EZR",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Nehemiah",
    bookSubtitle: "The Book of Nehemiah",
    bookOsisID: "Neh",
    paratext: "NEH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "Neh",
      "NEH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Esther",
    bookSubtitle: "The Book of Esther",
    bookOsisID: "Esth",
    paratext: "EST",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Esth",
      "EST"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Job",
    bookSubtitle: "The Book of Job",
    bookOsisID: "Job",
    paratext: "JOB",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Job",
      "JOB"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Psalms",
    bookSubtitle: "The Book of Psalms",
    bookOsisID: "Ps",
    paratext: "PSA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ps",
      "PSA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Proverbs",
    bookSubtitle: "The Book of Proverbs",
    bookOsisID: "Prov",
    paratext: "PRO",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Prov",
      "PRO"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ecclesiastes",
    bookSubtitle: "The Book of Ecclesiastes",
    bookOsisID: "Eccl",
    paratext: "ECC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Qohelet",
      "Eccl",
      "ECC"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Song of Solomon",
    bookSubtitle: "The Book of Song of Solomon",
    bookOsisID: "Song",
    paratext: "SNG",
    groups: [
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
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Isaiah",
    bookSubtitle: "The Book of Isaiah",
    bookOsisID: "Isa",
    paratext: "ISA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Isaiah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Jeremiah",
    bookSubtitle: "The Book of Jeremiah",
    bookOsisID: "Jer",
    paratext: "JER",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Lamentations",
    bookSubtitle: "The Book of Lamentations",
    bookOsisID: "Lam",
    paratext: "LAM",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ezekiel",
    bookSubtitle: "The Book of Ezekiel",
    bookOsisID: "Ezek",
    paratext: "EZK",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezekiel"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Daniel",
    bookSubtitle: "The Book of Daniel",
    bookOsisID: "Dan",
    paratext: "DAN",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Daniel"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Hosea",
    bookSubtitle: "The Book of Hosea",
    bookOsisID: "Hos",
    paratext: "HOS",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Joel",
    bookSubtitle: "The Book of Joel",
    bookOsisID: "Joel",
    paratext: "JOL",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Amos",
    bookSubtitle: "The Book of Amos",
    bookOsisID: "Amos",
    paratext: "AMO",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Obadiah",
    bookSubtitle: "The Book of Obadiah",
    bookOsisID: "Obad",
    paratext: "OBA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Jonah",
    bookSubtitle: "The Book of Jonah",
    bookOsisID: "Jonah",
    paratext: "JON",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Micah",
    bookSubtitle: "The Book of Micah",
    bookOsisID: "Mic",
    paratext: "MIC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Nahum",
    bookSubtitle: "The Book of Nahum",
    bookOsisID: "Nah",
    paratext: "NAM",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Habakkuk",
    bookSubtitle: "The Book of Habakkuk",
    bookOsisID: "Hab",
    paratext: "HAB",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Zephaniah",
    bookSubtitle: "The Book of Zephaniah",
    bookOsisID: "Zeph",
    paratext: "ZEP",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Haggai",
    bookSubtitle: "The Book of Haggai",
    bookOsisID: "Hag",
    paratext: "HAG",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Zechariah",
    bookSubtitle: "The Book of Zechariah",
    bookOsisID: "Zech",
    paratext: "ZEC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Malachi",
    bookSubtitle: "The Book of Malachi",
    bookOsisID: "Mal",
    paratext: "MAL",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "James"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jude"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "John the Revelator"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJVA",
    bookName: "Sirach Prologue",
    bookSubtitle: "The Wisdom of Jesus the Son of Sirach (Prologue)",
    bookOsisID: "SirP",
    paratext: null,
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Ecclesiasticus Prologue"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Sirach"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Sirach"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "S3Y"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Azariah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Susanna"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Esdras"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Esdras"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Laodiceans"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    authors: [
      "Apostalic Fathers"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "-0600-01-01",
    dateLatest: "-0570-01-01",
    hasData: true
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
    dateEarliest: "-0588-01-01",
    dateLatest: "-0545-01-01",
    hasData: true
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
    dateEarliest: "-0544-01-01",
    dateLatest: "-0421-01-01",
    hasData: true
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
    dateEarliest: "-0420-01-01",
    dateLatest: "-0420-01-01",
    hasData: true
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
    dateEarliest: "-0399-01-01",
    dateLatest: "-0361-01-01",
    hasData: true
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
    dateEarliest: "-0323-01-01",
    dateLatest: "-0130-01-01",
    hasData: true
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
    dateEarliest: "0385-01-01",
    dateLatest: "0385-01-01",
    hasData: true
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
    dateEarliest: "-0130-01-01",
    dateLatest: "-0091-01-01",
    hasData: true
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
    dateEarliest: "-0091-01-01",
    dateLatest: "-0052-01-01",
    hasData: true
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
    dateEarliest: "-0052-01-01",
    dateLatest: "-0001-01-01",
    hasData: true
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
    dateEarliest: "0005-01-01",
    dateLatest: "0035-01-01",
    hasData: true
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
    dateEarliest: "0035-01-01",
    dateLatest: "0321-01-01",
    hasData: true
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
    dateEarliest: "0321-01-01",
    dateLatest: "0421-01-01",
    hasData: true
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
    dateEarliest: "-2200-01-01",
    dateLatest: "-0350-01-01",
    hasData: true
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
    dateEarliest: "0401-01-01",
    dateLatest: "0401-01-01",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "D&C",
    bookName: "Doctrine and Covenants",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
  "2 SAMUEL": b[9],
  "2SAM": b[9],
  "2SA": b[9],
  "2 SAM": b[9],
  "1 KINGS": b[10],
  "1KGS": b[10],
  "1KI": b[10],
  "2 KINGS": b[11],
  "2KGS": b[11],
  "2KI": b[11],
  "1 CHRONICLES": b[12],
  "1CHR": b[12],
  "1CH": b[12],
  "2 CHRONICLES": b[13],
  "2CHR": b[13],
  "2CH": b[13],
  EZRA: b[14],
  EZR: b[14],
  NEHEMIAH: b[15],
  NEH: b[15],
  ESTHER: b[16],
  ESTH: b[16],
  EST: b[16],
  JOB: b[17],
  PSALMS: b[18],
  PS: b[18],
  PSA: b[18],
  PROVERBS: b[19],
  PROV: b[19],
  PRO: b[19],
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
  JEREMIAH: b[23],
  JER: b[23],
  LAMENTATIONS: b[24],
  LAM: b[24],
  EZEKIEL: b[25],
  EZEK: b[25],
  EZK: b[25],
  DANIEL: b[26],
  DAN: b[26],
  HOSEA: b[27],
  HOS: b[27],
  JOEL: b[28],
  JOL: b[28],
  AMOS: b[29],
  AMO: b[29],
  OBADIAH: b[30],
  OBAD: b[30],
  OBA: b[30],
  JONAH: b[31],
  JON: b[31],
  MICAH: b[32],
  MIC: b[32],
  NAHUM: b[33],
  NAH: b[33],
  NAM: b[33],
  HABAKKUK: b[34],
  HAB: b[34],
  ZEPHANIAH: b[35],
  ZEPH: b[35],
  ZEP: b[35],
  HAGGAI: b[36],
  HAG: b[36],
  ZECHARIAH: b[37],
  ZECH: b[37],
  ZEC: b[37],
  MALACHI: b[38],
  MAL: b[38],
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
  ROMANS: b[44],
  ROM: b[44],
  "1 CORINTHIANS": b[45],
  "1COR": b[45],
  "1CO": b[45],
  "2 CORINTHIANS": b[46],
  "2COR": b[46],
  "2CO": b[46],
  GALATIANS: b[47],
  GAL: b[47],
  EPHESIANS: b[48],
  EPH: b[48],
  PHILIPPIANS: b[49],
  PHIL: b[49],
  PHP: b[49],
  COLOSSIANS: b[50],
  COL: b[50],
  "1 THESSALONIANS": b[51],
  "1THESS": b[51],
  "1TH": b[51],
  "2 THESSALONIANS": b[52],
  "2THESS": b[52],
  "2TH": b[52],
  "1 TIMOTHY": b[53],
  "1TIM": b[53],
  "1TI": b[53],
  "2 TIMOTHY": b[54],
  "2TIM": b[54],
  "2TI": b[54],
  TITUS: b[55],
  TIT: b[55],
  PHILEMON: b[56],
  PHLM: b[56],
  PHM: b[56],
  HEBREWS: b[57],
  HEB: b[57],
  JAMES: b[58],
  JAS: b[58],
  "1 PETER": b[59],
  "1PET": b[59],
  "1PE": b[59],
  "2 PETER": b[60],
  "2PET": b[60],
  "2PE": b[60],
  "1 JOHN": b[61],
  "1JOHN": b[61],
  "1JN": b[61],
  "2 JOHN": b[62],
  "2JOHN": b[62],
  "2JN": b[62],
  "3 JOHN": b[63],
  "3JOHN": b[63],
  "3JN": b[63],
  JUDE: b[64],
  JUD: b[64],
  REVELATION: b[65],
  REV: b[65],
  TOBIT: b[66],
  TOB: b[66],
  JUDITH: b[67],
  JDT: b[67],
  "ADDITIONS TO ESTHER": b[68],
  ADDESTH: b[68],
  ADE: b[68],
  WISDOM: b[69],
  WIS: b[69],
  "WISDOM OF SOLOMON": b[69],
  "SIRACH PROLOGUE": b[70],
  SIRP: b[70],
  "ECCLESIASTICUS PROLOGUE": b[70],
  SIRACH: b[71],
  SIR: b[71],
  ECCLESIASTICUS: b[71],
  "PRAYER OF AZARIAH": b[72],
  PRAZAR: b[72],
  S3Y: b[72],
  "SONG OF THE THREE CHILDREN": b[72],
  "SONG OF THE THREE HOLY CHILDREN": b[72],
  SUSANNA: b[73],
  SUS: b[73],
  "1 MACCABEES": b[74],
  "1MACC": b[74],
  "1MA": b[74],
  "2 MACCABEES": b[75],
  "2MACC": b[75],
  "2MA": b[75],
  "PRAYER OF MANASSEH": b[76],
  PRMAN: b[76],
  MAN: b[76],
  "1 ESDRAS": b[77],
  "1ESD": b[77],
  "1ES": b[77],
  "2 ESDRAS": b[78],
  "2ESD": b[78],
  "2ES": b[78],
  "EPISTLE TO THE LAODICEANS": b[79],
  EPLAO: b[79],
  LAO: b[79],
  LAODICEANS: b[79],
  DIDACHE: b[80],
  DID: b[80],
  "1 NEPHI": b[81],
  "1NE": b[81],
  "1 NE": b[81],
  "1ST NEPHI": b[81],
  "FIRST NEPHI": b[81],
  "THE FIRST BOOK OF NEPHI": b[81],
  "I NEPHI": b[81],
  "2 NEPHI": b[82],
  "2NE": b[82],
  "2 NE": b[82],
  "2ND NEPHI": b[82],
  "SECOND NEPHI": b[82],
  "THE SECOND BOOK OF NEPHI": b[82],
  "II NEPHI": b[82],
  JACOB: b[83],
  JAC: b[83],
  ENOS: b[84],
  JAROM: b[85],
  JAR: b[85],
  OMNI: b[86],
  "WORDS OF MORMON": b[87],
  WOM: b[87],
  MOSIAH: b[88],
  MOSI: b[88],
  ALMA: b[89],
  HELAMAN: b[90],
  HEL: b[90],
  HE: b[90],
  HLM: b[90],
  HELM: b[90],
  "3 NEPHI": b[91],
  "3NE": b[91],
  "3 NE": b[91],
  "3RD NEPHI": b[91],
  "THIRD NEPHI": b[91],
  "III NEPHI": b[91],
  "4 NEPHI": b[92],
  "4NE": b[92],
  "4 NE": b[92],
  "4TH NEPHI": b[92],
  "FOURTH NEPHI": b[92],
  "IV NEPHI": b[92],
  MORMON: b[93],
  MORM: b[93],
  MMN: b[93],
  ETHER: b[94],
  ETH: b[94],
  MORONI: b[95],
  MORO: b[95],
  MNI: b[95],
  MOSES: b[96],
  MOS: b[96],
  "THE BOOK OF MOSES": b[96],
  ABRAHAM: b[97],
  ABR: b[97],
  "THE BOOK OF ABRAHAM": b[97],
  "ARTICLES OF FAITH": b[98],
  AOFF: b[98],
  "JOSEPH SMITH—HISTORY": b[99],
  JSH: b[99],
  "JS-H": b[99],
  "JOSEPH SMITH HISTORY": b[99],
  "JOSEPH SMITH--HISTORY": b[99],
  "JOSEPH SMITH—MATTHEW": b[100],
  JSM: b[100],
  "JS-M": b[100],
  "JOSEPH SMITH MATTHEW": b[100],
  "JOSEPH SMITH--MATTHEW": b[100],
  "DOCTRINE AND COVENANTS": b[101],
  "D&C": b[101],
  "D AND C": b[101],
  "THE DOCTRINE & COVENANTS": b[101],
  "DOCTRINE & COVENANTS": b[101],
  "THE DOCTRINE AND COVENANTS": b[101]
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
    b[78]
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
    b[80]
  ],
  VULGATE: [
    b[79]
  ],
  "APOSTOLIC FATHERS": [
    b[80]
  ],
  "BOOK OF MORMON": [
    b[81],
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
    b[95]
  ],
  "SMALL PLATES OF NEPHI": [
    b[81],
    b[82],
    b[83],
    b[84],
    b[85],
    b[86]
  ],
  LDS: [
    b[81],
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
    b[101]
  ],
  MORMON: [
    b[87],
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95]
  ],
  "LARGE PLATES OF NEPHI": [
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95]
  ],
  ABRIDGEMENT: [
    b[88],
    b[89],
    b[90],
    b[91],
    b[92],
    b[93],
    b[94],
    b[95]
  ],
  "PEARL OF GREAT PRICE": [
    b[96],
    b[97],
    b[98],
    b[99],
    b[100]
  ],
  "INSPIRED TRANSLATION": [
    b[96],
    b[97],
    b[99],
    b[100]
  ],
  "JOSEPH SMITH TRANSLATION": [
    b[96],
    b[97],
    b[99],
    b[100]
  ],
  JST: [
    b[96],
    b[97],
    b[99],
    b[100]
  ],
  "JOSEPH SMITH": [
    b[96],
    b[97],
    b[98],
    b[99],
    b[100]
  ],
  "DOCTRINE AND COVENANTS": [
    b[101]
  ]
};

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
  return {
    bookOsisID,
    chapterOsisID,
    chapterNumber,
    verseNumbers,
    verseOsisIDs
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
// src/tools/verseOsisIDToCitation.ts
var trim4 = (s) => s.trim();
function verseOsisIDToCitation(osis) {
  if (!osis) {
    return null;
  }
  const [rawBook, chapter, verse] = osis.split(".").map(trim4);
  const book = getBookByName(rawBook);
  const shortName = book?.bookOsisID || rawBook;
  const fullName = book?.bookName || rawBook;
  return {
    short: `${shortName} ${chapter}:${verse}`,
    long: `${fullName} ${chapter}:${verse}`
  };
}
// src/tools/osisToHuman.ts
function osisToHuman(osis) {
  if (!osis) {
    return "";
  }
  const [rawBook, chapter, verse] = osis.split(".");
  const book = rawBook.replace(/^[0-9]+/, (n) => `${n} `);
  return `${book.trim()} ${chapter}:${verse}`;
}
// data/compiled/books-and-works.ts
var works2 = [
  {
    workOsisID: "KJV",
    workTitle: "The Holy Bible",
    workSubtitle: "King James Version",
    aliases: [
      "Bible",
      "Holy Bible"
    ]
  },
  {
    workOsisID: "KJVA",
    workTitle: "The Holy Bible Apocrypha",
    workSubtitle: "King James Version",
    aliases: [
      "King James Apocrypha"
    ]
  },
  {
    workOsisID: "T12Patr",
    workTitle: "Testaments of the Twelve Patriarchs",
    workSubtitle: "",
    aliases: [
      "The Testaments of the Twelve Patriarchs",
      "Testament of the Twelve Patriarchs",
      "Testament of the 12 Patriarchs",
      "Testaments of the 12 Patriarchs",
      "12 Patriarchs",
      "The 12 Patriarchs",
      "The Twelve Patriarchs",
      "T 12 Patriarchs",
      "12 Patr"
    ]
  },
  {
    workOsisID: "Didache",
    workTitle: "Didache",
    workSubtitle: "The Lord's Teaching Through the Twelve Apostles to the Nations",
    aliases: [
      "The Didache"
    ]
  },
  {
    workOsisID: "BofM",
    workTitle: "The Book of Mormon",
    workSubtitle: "Another Testament of Jesus Christ",
    aliases: [
      "BOM",
      "Book of Mormon"
    ]
  },
  {
    workOsisID: "PGP",
    workTitle: "Pearl of Great Price",
    workSubtitle: "",
    aliases: [
      "The Pearl of Great Price",
      "PGoP"
    ]
  },
  {
    workOsisID: "D&C",
    workTitle: "Doctrine and Covenants",
    workSubtitle: "",
    aliases: [
      "D and C",
      "The Doctrine & Covenants",
      "Doctrine & Covenants",
      "The Doctrine and Covenants"
    ]
  }
];
var w2 = works2;
var worksLookup2 = {
  "THE HOLY BIBLE": w2[0],
  KJV: w2[0],
  BIBLE: w2[0],
  "HOLY BIBLE": w2[0],
  "THE HOLY BIBLE APOCRYPHA": w2[1],
  KJVA: w2[1],
  "KING JAMES APOCRYPHA": w2[1],
  "TESTAMENTS OF THE TWELVE PATRIARCHS": w2[2],
  T12PATR: w2[2],
  "THE TESTAMENTS OF THE TWELVE PATRIARCHS": w2[2],
  "TESTAMENT OF THE TWELVE PATRIARCHS": w2[2],
  "TESTAMENT OF THE 12 PATRIARCHS": w2[2],
  "TESTAMENTS OF THE 12 PATRIARCHS": w2[2],
  "12 PATRIARCHS": w2[2],
  "THE 12 PATRIARCHS": w2[2],
  "THE TWELVE PATRIARCHS": w2[2],
  "T 12 PATRIARCHS": w2[2],
  "12 PATR": w2[2],
  DIDACHE: w2[3],
  "THE DIDACHE": w2[3],
  "THE BOOK OF MORMON": w2[4],
  BOFM: w2[4],
  BOM: w2[4],
  "BOOK OF MORMON": w2[4],
  "PEARL OF GREAT PRICE": w2[5],
  PGP: w2[5],
  "THE PEARL OF GREAT PRICE": w2[5],
  PGOP: w2[5],
  "DOCTRINE AND COVENANTS": w2[6],
  "D&C": w2[6],
  "D AND C": w2[6],
  "THE DOCTRINE & COVENANTS": w2[6],
  "DOCTRINE & COVENANTS": w2[6],
  "THE DOCTRINE AND COVENANTS": w2[6]
};
var books2 = [
  {
    workOsisID: "KJV",
    bookName: "Genesis",
    bookSubtitle: "The First Book of Moses called Genesis",
    bookOsisID: "Gen",
    paratext: "GEN",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Exodus",
    bookSubtitle: "The Second Book of Moses, called Exodus",
    bookOsisID: "Exod",
    paratext: "EXO",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Leviticus",
    bookSubtitle: "The Third Book of Moses, called Leviticus",
    bookOsisID: "Lev",
    paratext: "LEV",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Numbers",
    bookSubtitle: "The Fourth Book of Moses, called Numbers",
    bookOsisID: "Num",
    paratext: "NUM",
    groups: [
      "Old Testament",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Deuteronomy",
    bookSubtitle: "The Fifth Book of Moses, called Deuteronomy",
    bookOsisID: "Deut",
    paratext: "DEU",
    groups: [
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Joshua",
    bookSubtitle: "The Book of Joshua",
    bookOsisID: "Josh",
    paratext: "JOS",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Josh"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Judges",
    bookSubtitle: "The Book of Judges",
    bookOsisID: "Judg",
    paratext: "JDG",
    groups: [
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
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ruth",
    bookSubtitle: "The Book of Ruth",
    bookOsisID: "Ruth",
    paratext: "RUT",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Rth",
      "Ru"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Samuel",
    bookSubtitle: "The Book of 1 Samuel",
    bookOsisID: "1Sam",
    paratext: "1SA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "1 Sam",
      "1SA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Samuel",
    bookSubtitle: "The Book of 2 Samuel",
    bookOsisID: "2Sam",
    paratext: "2SA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "2 Sam",
      "2SA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Kings",
    bookSubtitle: "The First Book of Kings",
    bookOsisID: "1Kgs",
    paratext: "1KI",
    groups: [
      "Old Testament",
      "Bible",
      "Kings"
    ],
    aliases: [
      "1Kgs",
      "1KI"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Kings",
    bookSubtitle: "The Second Book of Kings",
    bookOsisID: "2Kgs",
    paratext: "2KI",
    groups: [
      "Old Testament",
      "Bible",
      "Kings"
    ],
    aliases: [
      "2Kgs",
      "2KI"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "1 Chronicles",
    bookSubtitle: "The First Book of Chronicles",
    bookOsisID: "1Chr",
    paratext: "1CH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "1Chr",
      "1CH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "2 Chronicles",
    bookSubtitle: "The Second Book of Chronicals",
    bookOsisID: "2Chr",
    paratext: "2CH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "2Chr",
      "2CH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ezra",
    bookSubtitle: "The Book of Ezra",
    bookOsisID: "Ezra",
    paratext: "EZR",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Nehemiah",
    bookSubtitle: "The Book of Nehemiah",
    bookOsisID: "Neh",
    paratext: "NEH",
    groups: [
      "Old Testament",
      "Bible",
      "Persian Period"
    ],
    aliases: [
      "Neh",
      "NEH"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Esther",
    bookSubtitle: "The Book of Esther",
    bookOsisID: "Esth",
    paratext: "EST",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Esth",
      "EST"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Job",
    bookSubtitle: "The Book of Job",
    bookOsisID: "Job",
    paratext: "JOB",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Job",
      "JOB"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Psalms",
    bookSubtitle: "The Book of Psalms",
    bookOsisID: "Ps",
    paratext: "PSA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Ps",
      "PSA"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Proverbs",
    bookSubtitle: "The Book of Proverbs",
    bookOsisID: "Prov",
    paratext: "PRO",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Prov",
      "PRO"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ecclesiastes",
    bookSubtitle: "The Book of Ecclesiastes",
    bookOsisID: "Eccl",
    paratext: "ECC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [
      "Qohelet",
      "Eccl",
      "ECC"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Song of Solomon",
    bookSubtitle: "The Book of Song of Solomon",
    bookOsisID: "Song",
    paratext: "SNG",
    groups: [
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
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Isaiah",
    bookSubtitle: "The Book of Isaiah",
    bookOsisID: "Isa",
    paratext: "ISA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Isaiah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Jeremiah",
    bookSubtitle: "The Book of Jeremiah",
    bookOsisID: "Jer",
    paratext: "JER",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jeremiah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Lamentations",
    bookSubtitle: "The Book of Lamentations",
    bookOsisID: "Lam",
    paratext: "LAM",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Ezekiel",
    bookSubtitle: "The Book of Ezekiel",
    bookOsisID: "Ezek",
    paratext: "EZK",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Ezekiel"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Daniel",
    bookSubtitle: "The Book of Daniel",
    bookOsisID: "Dan",
    paratext: "DAN",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Daniel"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Hosea",
    bookSubtitle: "The Book of Hosea",
    bookOsisID: "Hos",
    paratext: "HOS",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Joel",
    bookSubtitle: "The Book of Joel",
    bookOsisID: "Joel",
    paratext: "JOL",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Amos",
    bookSubtitle: "The Book of Amos",
    bookOsisID: "Amos",
    paratext: "AMO",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Obadiah",
    bookSubtitle: "The Book of Obadiah",
    bookOsisID: "Obad",
    paratext: "OBA",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Jonah",
    bookSubtitle: "The Book of Jonah",
    bookOsisID: "Jonah",
    paratext: "JON",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Micah",
    bookSubtitle: "The Book of Micah",
    bookOsisID: "Mic",
    paratext: "MIC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Nahum",
    bookSubtitle: "The Book of Nahum",
    bookOsisID: "Nah",
    paratext: "NAM",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Habakkuk",
    bookSubtitle: "The Book of Habakkuk",
    bookOsisID: "Hab",
    paratext: "HAB",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Zephaniah",
    bookSubtitle: "The Book of Zephaniah",
    bookOsisID: "Zeph",
    paratext: "ZEP",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Haggai",
    bookSubtitle: "The Book of Haggai",
    bookOsisID: "Hag",
    paratext: "HAG",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Zechariah",
    bookSubtitle: "The Book of Zechariah",
    bookOsisID: "Zech",
    paratext: "ZEC",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJV",
    bookName: "Malachi",
    bookSubtitle: "The Book of Malachi",
    bookOsisID: "Mal",
    paratext: "MAL",
    groups: [
      "Old Testament",
      "Bible"
    ],
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    authors: [
      "Paul"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "James"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Peter"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "The Apostle John"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Jude"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "John the Revelator"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "KJVA",
    bookName: "Sirach Prologue",
    bookSubtitle: "The Wisdom of Jesus the Son of Sirach (Prologue)",
    bookOsisID: "SirP",
    paratext: null,
    groups: [
      "Deuterocannon",
      "Apocrypha"
    ],
    aliases: [
      "Ecclesiasticus Prologue"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Sirach"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Sirach"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "S3Y"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Azariah"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Susanna"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Esdras"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    aliases: [],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [
      "Esdras"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
      "Laodiceans"
    ],
    chapterLabel: "Chapter",
    verseLabel: "Verse",
    authors: [],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    authors: [
      "Apostalic Fathers"
    ],
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "-0600-01-01",
    dateLatest: "-0570-01-01",
    hasData: true
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
    dateEarliest: "-0588-01-01",
    dateLatest: "-0545-01-01",
    hasData: true
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
    dateEarliest: "-0544-01-01",
    dateLatest: "-0421-01-01",
    hasData: true
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
    dateEarliest: "-0420-01-01",
    dateLatest: "-0420-01-01",
    hasData: true
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
    dateEarliest: "-0399-01-01",
    dateLatest: "-0361-01-01",
    hasData: true
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
    dateEarliest: "-0323-01-01",
    dateLatest: "-0130-01-01",
    hasData: true
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
    dateEarliest: "0385-01-01",
    dateLatest: "0385-01-01",
    hasData: true
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
    dateEarliest: "-0130-01-01",
    dateLatest: "-0091-01-01",
    hasData: true
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
    dateEarliest: "-0091-01-01",
    dateLatest: "-0052-01-01",
    hasData: true
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
    dateEarliest: "-0052-01-01",
    dateLatest: "-0001-01-01",
    hasData: true
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
    dateEarliest: "0005-01-01",
    dateLatest: "0035-01-01",
    hasData: true
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
    dateEarliest: "0035-01-01",
    dateLatest: "0321-01-01",
    hasData: true
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
    dateEarliest: "0321-01-01",
    dateLatest: "0421-01-01",
    hasData: true
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
    dateEarliest: "-2200-01-01",
    dateLatest: "-0350-01-01",
    hasData: true
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
    dateEarliest: "0401-01-01",
    dateLatest: "0401-01-01",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  },
  {
    workOsisID: "D&C",
    bookName: "Doctrine and Covenants",
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
    dateEarliest: "",
    dateLatest: "",
    hasData: true
  }
];
var b2 = books2;
var booksLookup2 = {
  GENESIS: b2[0],
  GEN: b2[0],
  GE: b2[0],
  GN: b2[0],
  "THE FIRST BOOK OF MOSES CALLED GENESIS": b2[0],
  EXODUS: b2[1],
  EXOD: b2[1],
  EXO: b2[1],
  EX: b2[1],
  "THE SECOND BOOK OF MOSES CALLED EXODUS": b2[1],
  LEVITICUS: b2[2],
  LEV: b2[2],
  LE: b2[2],
  "THE THIRD BOOK OF MOSES CALLED LEVITICUS": b2[2],
  NUMBERS: b2[3],
  NUM: b2[3],
  NU: b2[3],
  NM: b2[3],
  NB: b2[3],
  "THE FOURTH BOOK OF MOSES CALLED NUMBERS": b2[3],
  DEUTERONOMY: b2[4],
  DEUT: b2[4],
  DEU: b2[4],
  DT: b2[4],
  DU: b2[4],
  "THE FIFTH BOOK OF MOSES CALLED DEUTERONOMY": b2[4],
  JOSHUA: b2[5],
  JOSH: b2[5],
  JOS: b2[5],
  JUDGES: b2[6],
  JUDG: b2[6],
  JDG: b2[6],
  JDGS: b2[6],
  JG: b2[6],
  RUTH: b2[7],
  RUT: b2[7],
  RTH: b2[7],
  RU: b2[7],
  "1 SAMUEL": b2[8],
  "1SAM": b2[8],
  "1SA": b2[8],
  "1 SAM": b2[8],
  "2 SAMUEL": b2[9],
  "2SAM": b2[9],
  "2SA": b2[9],
  "2 SAM": b2[9],
  "1 KINGS": b2[10],
  "1KGS": b2[10],
  "1KI": b2[10],
  "2 KINGS": b2[11],
  "2KGS": b2[11],
  "2KI": b2[11],
  "1 CHRONICLES": b2[12],
  "1CHR": b2[12],
  "1CH": b2[12],
  "2 CHRONICLES": b2[13],
  "2CHR": b2[13],
  "2CH": b2[13],
  EZRA: b2[14],
  EZR: b2[14],
  NEHEMIAH: b2[15],
  NEH: b2[15],
  ESTHER: b2[16],
  ESTH: b2[16],
  EST: b2[16],
  JOB: b2[17],
  PSALMS: b2[18],
  PS: b2[18],
  PSA: b2[18],
  PROVERBS: b2[19],
  PROV: b2[19],
  PRO: b2[19],
  ECCLESIASTES: b2[20],
  ECCL: b2[20],
  ECC: b2[20],
  QOHELET: b2[20],
  "SONG OF SOLOMON": b2[21],
  SONG: b2[21],
  SNG: b2[21],
  "CANTICLE OF CANTICLES": b2[21],
  "SOLOMON'S SONG": b2[21],
  ISAIAH: b2[22],
  ISA: b2[22],
  JEREMIAH: b2[23],
  JER: b2[23],
  LAMENTATIONS: b2[24],
  LAM: b2[24],
  EZEKIEL: b2[25],
  EZEK: b2[25],
  EZK: b2[25],
  DANIEL: b2[26],
  DAN: b2[26],
  HOSEA: b2[27],
  HOS: b2[27],
  JOEL: b2[28],
  JOL: b2[28],
  AMOS: b2[29],
  AMO: b2[29],
  OBADIAH: b2[30],
  OBAD: b2[30],
  OBA: b2[30],
  JONAH: b2[31],
  JON: b2[31],
  MICAH: b2[32],
  MIC: b2[32],
  NAHUM: b2[33],
  NAH: b2[33],
  NAM: b2[33],
  HABAKKUK: b2[34],
  HAB: b2[34],
  ZEPHANIAH: b2[35],
  ZEPH: b2[35],
  ZEP: b2[35],
  HAGGAI: b2[36],
  HAG: b2[36],
  ZECHARIAH: b2[37],
  ZECH: b2[37],
  ZEC: b2[37],
  MALACHI: b2[38],
  MAL: b2[38],
  MATTHEW: b2[39],
  MATT: b2[39],
  MAT: b2[39],
  "ST MATTHEW": b2[39],
  "ST. MATTHEW": b2[39],
  "SAINT MATTHEW": b2[39],
  "THE GOSPEL ACCORDING TO ST MATTHEW": b2[39],
  "THE GOSPEL ACCORDING TO ST. MATTHEW": b2[39],
  "THE GOSPEL ACCORDING TO SAINT MATTHEW": b2[39],
  MARK: b2[40],
  MRK: b2[40],
  "ST MARK": b2[40],
  "ST. MARK": b2[40],
  "SAINT MARK": b2[40],
  "THE GOSPEL ACCORDING TO ST MARK": b2[40],
  "THE GOSPEL ACCORDING TO ST. MARK": b2[40],
  "THE GOSPEL ACCORDING TO SAINT MARK": b2[40],
  LUKE: b2[41],
  LUK: b2[41],
  "ST LUKE": b2[41],
  "ST. LUKE": b2[41],
  "SAINT LUKE": b2[41],
  "THE GOSPEL ACCORDING TO ST LUKE": b2[41],
  "THE GOSPEL ACCORDING TO ST. LUKE": b2[41],
  "THE GOSPEL ACCORDING TO SAINT LUKE": b2[41],
  JOHN: b2[42],
  JHN: b2[42],
  "ST JOHN": b2[42],
  "ST. JOHN": b2[42],
  "SAINT JOHN": b2[42],
  "THE GOSPEL ACCORDING TO ST JOHN": b2[42],
  "THE GOSPEL ACCORDING TO ST. JOHN": b2[42],
  "THE GOSPEL ACCORDING TO SAINT JOHN": b2[42],
  ACTS: b2[43],
  ACT: b2[43],
  ROMANS: b2[44],
  ROM: b2[44],
  "1 CORINTHIANS": b2[45],
  "1COR": b2[45],
  "1CO": b2[45],
  "2 CORINTHIANS": b2[46],
  "2COR": b2[46],
  "2CO": b2[46],
  GALATIANS: b2[47],
  GAL: b2[47],
  EPHESIANS: b2[48],
  EPH: b2[48],
  PHILIPPIANS: b2[49],
  PHIL: b2[49],
  PHP: b2[49],
  COLOSSIANS: b2[50],
  COL: b2[50],
  "1 THESSALONIANS": b2[51],
  "1THESS": b2[51],
  "1TH": b2[51],
  "2 THESSALONIANS": b2[52],
  "2THESS": b2[52],
  "2TH": b2[52],
  "1 TIMOTHY": b2[53],
  "1TIM": b2[53],
  "1TI": b2[53],
  "2 TIMOTHY": b2[54],
  "2TIM": b2[54],
  "2TI": b2[54],
  TITUS: b2[55],
  TIT: b2[55],
  PHILEMON: b2[56],
  PHLM: b2[56],
  PHM: b2[56],
  HEBREWS: b2[57],
  HEB: b2[57],
  JAMES: b2[58],
  JAS: b2[58],
  "1 PETER": b2[59],
  "1PET": b2[59],
  "1PE": b2[59],
  "2 PETER": b2[60],
  "2PET": b2[60],
  "2PE": b2[60],
  "1 JOHN": b2[61],
  "1JOHN": b2[61],
  "1JN": b2[61],
  "2 JOHN": b2[62],
  "2JOHN": b2[62],
  "2JN": b2[62],
  "3 JOHN": b2[63],
  "3JOHN": b2[63],
  "3JN": b2[63],
  JUDE: b2[64],
  JUD: b2[64],
  REVELATION: b2[65],
  REV: b2[65],
  TOBIT: b2[66],
  TOB: b2[66],
  JUDITH: b2[67],
  JDT: b2[67],
  "ADDITIONS TO ESTHER": b2[68],
  ADDESTH: b2[68],
  ADE: b2[68],
  WISDOM: b2[69],
  WIS: b2[69],
  "WISDOM OF SOLOMON": b2[69],
  "SIRACH PROLOGUE": b2[70],
  SIRP: b2[70],
  "ECCLESIASTICUS PROLOGUE": b2[70],
  SIRACH: b2[71],
  SIR: b2[71],
  ECCLESIASTICUS: b2[71],
  "PRAYER OF AZARIAH": b2[72],
  PRAZAR: b2[72],
  S3Y: b2[72],
  "SONG OF THE THREE CHILDREN": b2[72],
  "SONG OF THE THREE HOLY CHILDREN": b2[72],
  SUSANNA: b2[73],
  SUS: b2[73],
  "1 MACCABEES": b2[74],
  "1MACC": b2[74],
  "1MA": b2[74],
  "2 MACCABEES": b2[75],
  "2MACC": b2[75],
  "2MA": b2[75],
  "PRAYER OF MANASSEH": b2[76],
  PRMAN: b2[76],
  MAN: b2[76],
  "1 ESDRAS": b2[77],
  "1ESD": b2[77],
  "1ES": b2[77],
  "2 ESDRAS": b2[78],
  "2ESD": b2[78],
  "2ES": b2[78],
  "EPISTLE TO THE LAODICEANS": b2[79],
  EPLAO: b2[79],
  LAO: b2[79],
  LAODICEANS: b2[79],
  DIDACHE: b2[80],
  DID: b2[80],
  "1 NEPHI": b2[81],
  "1NE": b2[81],
  "1 NE": b2[81],
  "1ST NEPHI": b2[81],
  "FIRST NEPHI": b2[81],
  "THE FIRST BOOK OF NEPHI": b2[81],
  "I NEPHI": b2[81],
  "2 NEPHI": b2[82],
  "2NE": b2[82],
  "2 NE": b2[82],
  "2ND NEPHI": b2[82],
  "SECOND NEPHI": b2[82],
  "THE SECOND BOOK OF NEPHI": b2[82],
  "II NEPHI": b2[82],
  JACOB: b2[83],
  JAC: b2[83],
  ENOS: b2[84],
  JAROM: b2[85],
  JAR: b2[85],
  OMNI: b2[86],
  "WORDS OF MORMON": b2[87],
  WOM: b2[87],
  MOSIAH: b2[88],
  MOSI: b2[88],
  ALMA: b2[89],
  HELAMAN: b2[90],
  HEL: b2[90],
  HE: b2[90],
  HLM: b2[90],
  HELM: b2[90],
  "3 NEPHI": b2[91],
  "3NE": b2[91],
  "3 NE": b2[91],
  "3RD NEPHI": b2[91],
  "THIRD NEPHI": b2[91],
  "III NEPHI": b2[91],
  "4 NEPHI": b2[92],
  "4NE": b2[92],
  "4 NE": b2[92],
  "4TH NEPHI": b2[92],
  "FOURTH NEPHI": b2[92],
  "IV NEPHI": b2[92],
  MORMON: b2[93],
  MORM: b2[93],
  MMN: b2[93],
  ETHER: b2[94],
  ETH: b2[94],
  MORONI: b2[95],
  MORO: b2[95],
  MNI: b2[95],
  MOSES: b2[96],
  MOS: b2[96],
  "THE BOOK OF MOSES": b2[96],
  ABRAHAM: b2[97],
  ABR: b2[97],
  "THE BOOK OF ABRAHAM": b2[97],
  "ARTICLES OF FAITH": b2[98],
  AOFF: b2[98],
  "JOSEPH SMITH—HISTORY": b2[99],
  JSH: b2[99],
  "JS-H": b2[99],
  "JOSEPH SMITH HISTORY": b2[99],
  "JOSEPH SMITH--HISTORY": b2[99],
  "JOSEPH SMITH—MATTHEW": b2[100],
  JSM: b2[100],
  "JS-M": b2[100],
  "JOSEPH SMITH MATTHEW": b2[100],
  "JOSEPH SMITH--MATTHEW": b2[100],
  "DOCTRINE AND COVENANTS": b2[101],
  "D&C": b2[101],
  "D AND C": b2[101],
  "THE DOCTRINE & COVENANTS": b2[101],
  "DOCTRINE & COVENANTS": b2[101],
  "THE DOCTRINE AND COVENANTS": b2[101]
};
var groupsLookup2 = {
  "OLD TESTAMENT": [
    b2[0],
    b2[1],
    b2[2],
    b2[3],
    b2[4],
    b2[5],
    b2[6],
    b2[7],
    b2[8],
    b2[9],
    b2[10],
    b2[11],
    b2[12],
    b2[13],
    b2[14],
    b2[15],
    b2[16],
    b2[17],
    b2[18],
    b2[19],
    b2[20],
    b2[21],
    b2[22],
    b2[23],
    b2[24],
    b2[25],
    b2[26],
    b2[27],
    b2[28],
    b2[29],
    b2[30],
    b2[31],
    b2[32],
    b2[33],
    b2[34],
    b2[35],
    b2[36],
    b2[37],
    b2[38]
  ],
  BIBLE: [
    b2[0],
    b2[1],
    b2[2],
    b2[3],
    b2[4],
    b2[5],
    b2[6],
    b2[7],
    b2[8],
    b2[9],
    b2[10],
    b2[11],
    b2[12],
    b2[13],
    b2[14],
    b2[15],
    b2[16],
    b2[17],
    b2[18],
    b2[19],
    b2[20],
    b2[21],
    b2[22],
    b2[23],
    b2[24],
    b2[25],
    b2[26],
    b2[27],
    b2[28],
    b2[29],
    b2[30],
    b2[31],
    b2[32],
    b2[33],
    b2[34],
    b2[35],
    b2[36],
    b2[37],
    b2[38],
    b2[39],
    b2[40],
    b2[41],
    b2[42],
    b2[43],
    b2[44],
    b2[45],
    b2[46],
    b2[47],
    b2[48],
    b2[49],
    b2[50],
    b2[51],
    b2[52],
    b2[53],
    b2[54],
    b2[55],
    b2[56],
    b2[57],
    b2[58],
    b2[59],
    b2[60],
    b2[61],
    b2[62],
    b2[63],
    b2[64],
    b2[65]
  ],
  PENTATUECH: [
    b2[0],
    b2[1],
    b2[2],
    b2[3]
  ],
  TORAH: [
    b2[0],
    b2[1],
    b2[2],
    b2[3]
  ],
  KINGS: [
    b2[10],
    b2[11]
  ],
  "PERSIAN PERIOD": [
    b2[12],
    b2[13],
    b2[14],
    b2[15]
  ],
  "NEW TESTAMENT": [
    b2[39],
    b2[40],
    b2[41],
    b2[42],
    b2[43],
    b2[44],
    b2[45],
    b2[46],
    b2[47],
    b2[48],
    b2[49],
    b2[50],
    b2[51],
    b2[52],
    b2[53],
    b2[54],
    b2[55],
    b2[56],
    b2[57],
    b2[58],
    b2[59],
    b2[60],
    b2[61],
    b2[62],
    b2[63],
    b2[64],
    b2[65]
  ],
  GOSPELS: [
    b2[39],
    b2[40],
    b2[41],
    b2[42]
  ],
  "PAULINE EPISTLES": [
    b2[44],
    b2[45],
    b2[46],
    b2[47],
    b2[48],
    b2[49],
    b2[50],
    b2[51],
    b2[52],
    b2[53],
    b2[54],
    b2[55],
    b2[56]
  ],
  DEUTEROCANNON: [
    b2[66],
    b2[67],
    b2[68],
    b2[69],
    b2[70],
    b2[71],
    b2[72],
    b2[73],
    b2[74],
    b2[75],
    b2[76],
    b2[77],
    b2[78]
  ],
  APOCRYPHA: [
    b2[66],
    b2[67],
    b2[68],
    b2[69],
    b2[70],
    b2[71],
    b2[72],
    b2[73],
    b2[74],
    b2[75],
    b2[76],
    b2[77],
    b2[78],
    b2[79],
    b2[80]
  ],
  VULGATE: [
    b2[79]
  ],
  "APOSTOLIC FATHERS": [
    b2[80]
  ],
  "BOOK OF MORMON": [
    b2[81],
    b2[82],
    b2[83],
    b2[84],
    b2[85],
    b2[86],
    b2[87],
    b2[88],
    b2[89],
    b2[90],
    b2[91],
    b2[92],
    b2[93],
    b2[94],
    b2[95]
  ],
  "SMALL PLATES OF NEPHI": [
    b2[81],
    b2[82],
    b2[83],
    b2[84],
    b2[85],
    b2[86]
  ],
  LDS: [
    b2[81],
    b2[82],
    b2[83],
    b2[84],
    b2[85],
    b2[86],
    b2[87],
    b2[88],
    b2[89],
    b2[90],
    b2[91],
    b2[92],
    b2[93],
    b2[94],
    b2[95],
    b2[96],
    b2[97],
    b2[98],
    b2[99],
    b2[100],
    b2[101]
  ],
  MORMON: [
    b2[87],
    b2[88],
    b2[89],
    b2[90],
    b2[91],
    b2[92],
    b2[93],
    b2[94],
    b2[95]
  ],
  "LARGE PLATES OF NEPHI": [
    b2[88],
    b2[89],
    b2[90],
    b2[91],
    b2[92],
    b2[93],
    b2[94],
    b2[95]
  ],
  ABRIDGEMENT: [
    b2[88],
    b2[89],
    b2[90],
    b2[91],
    b2[92],
    b2[93],
    b2[94],
    b2[95]
  ],
  "PEARL OF GREAT PRICE": [
    b2[96],
    b2[97],
    b2[98],
    b2[99],
    b2[100]
  ],
  "INSPIRED TRANSLATION": [
    b2[96],
    b2[97],
    b2[99],
    b2[100]
  ],
  "JOSEPH SMITH TRANSLATION": [
    b2[96],
    b2[97],
    b2[99],
    b2[100]
  ],
  JST: [
    b2[96],
    b2[97],
    b2[99],
    b2[100]
  ],
  "JOSEPH SMITH": [
    b2[96],
    b2[97],
    b2[98],
    b2[99],
    b2[100]
  ],
  "DOCTRINE AND COVENANTS": [
    b2[101]
  ]
};
