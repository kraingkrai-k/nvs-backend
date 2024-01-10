import premutations from "../app/premutations";

const mockCase = [
  {
    input: "a",
    expect: ["a"],
  },
  {
    input: "ab",
    expect: ["ab", "ba"],
  },
  {
    input: "abc",
    expect: ["abc", "acb", "bac", "bca", "cab", "cba"],
  },
  {
    input: "aabb",
    expect: ["aabb", "abab", "abba", "baab", "baba", "bbaa"],
  },
];

describe("Should shuffle string with premuatation correct", () => {
  mockCase.forEach((m) => {
    test(`should do input: ${m.input} correct`, () => {
      expect(premutations(m.input)).toEqual(m.expect);
    });
  });
});
