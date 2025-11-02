var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __reExport = (target, mod, secondTarget) => {
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(target, key) && key !== "default")
      __defProp(target, key, {
        get: () => mod[key],
        enumerable: true
      });
  if (secondTarget) {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(secondTarget, key) && key !== "default")
        __defProp(secondTarget, key, {
          get: () => mod[key],
          enumerable: true
        });
    return secondTarget;
  }
};
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
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
  verseOsisIDToCitation: () => import_verseOsisIDToCitation.default,
  parseVerseRangeWithContext: () => import_parseVerseRangeWithContext.default,
  parseVerseRange: () => import_parseVerseRange.default,
  parseCitation: () => import_parseCitation.default,
  getWorkByName: () => import_getWorkByName.default,
  getBookByName: () => import_getBookByName.default
});
module.exports = __toCommonJS(exports_public_domain_books);
var import_getBookByName = __toESM(require("src/tools/getBookByName.ts"));
var import_getWorkByName = __toESM(require("src/tools/getWorkByName.ts"));
var import_parseCitation = __toESM(require("src/tools/parseCitation.ts"));
var import_parseVerseRange = __toESM(require("src/tools/parseVerseRange.ts"));
var import_parseVerseRangeWithContext = __toESM(require("src/tools/parseVerseRangeWithContext.ts"));
var import_verseOsisIDToCitation = __toESM(require("src/tools/verseOsisIDToCitation.ts"));
__reExport(exports_public_domain_books, require("src/types/data-shapes.ts"), module.exports);
