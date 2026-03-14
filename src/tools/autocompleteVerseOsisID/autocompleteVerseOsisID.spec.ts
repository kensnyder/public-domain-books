import { expect, it, describe } from "bun:test";
import autocompleteVerseOsisID from "./autocompleteVerseOsisID.ts";

describe("autocompleteVerseOsisID", () => {
  it("should suggest book names from partial input (Mode 1)", () => {
    const results = autocompleteVerseOsisID("ma", 6);
    expect(results).toBe(["Joseph Smith—Matthew",
      
      "Malachi", "Matthew", "Mark", "Romans", "Alma"]);
  });

  it("should suggest book names when input matches middle of name (Mode 1)", () => {
    const results = autocompleteVerseOsisID("atth", 3);
    expect(results).toContain("Matthew");
  });

  it("should suggest chapter numbers when exact book is provided (Mode 2)", () => {
    const results = autocompleteVerseOsisID("Matthew", 3);
    expect(results).toEqual(["Matthew 1", "Matthew 2", "Matthew 3"]);
  });

  it("should suggest chapter numbers starting with input (Mode 2)", () => {
    const results = autocompleteVerseOsisID("Matthew 1", 3);
    expect(results).toEqual(["Matthew 1", "Matthew 10", "Matthew 11"]);
  });

  it("should suggest verse numbers when exact chapter is provided (Mode 3)", () => {
    const results = autocompleteVerseOsisID("Matthew 15", 3);
    expect(results).toEqual(["Matthew 15:1", "Matthew 15:2", "Matthew 15:3"]);
  });

  it("should suggest verse numbers starting with input (Mode 3)", () => {
    const results = autocompleteVerseOsisID("Matthew 15:3", 3);
    expect(results).toEqual(["Matthew 15:3", "Matthew 15:30", "Matthew 15:31"]);
  });

  it("returns single suggestion when fully qualified verse is provided", () => {
    const results = autocompleteVerseOsisID("Matthew 15:33", 3);
    expect(results).toEqual(["Matthew 15:33"]);
  });

  it("should suggest chapters when an alias that matches exactly is provided", () => {
    const results = autocompleteVerseOsisID("Matt", 3);
    expect(results).toEqual(["Matthew 1", "Matthew 2", "Matthew 3"]);
  });

  it("should handle empty input", () => {
    const results = autocompleteVerseOsisID("", 5);
    expect(results).toEqual([]);
  });

  it("should respect limit", () => {
    const results = autocompleteVerseOsisID("M", 2);
    expect(results.length).toBe(2);
  });
});
