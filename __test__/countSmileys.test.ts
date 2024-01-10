import countSmileys from "../app/countSmileys";

const mockCase = [
  {
    input: [":)", ";(", ";}", ":-D"],
    expect: 2,
  },
  {
    input: [";D", ":-(", ":-)", ";~)"],
    expect: 3,
  },
  {
    input: [";]", ":[", ";*", ":$", ";-D"],
    expect: 1,
  },
  {
    input: [":-)"],
    expect: 1,
  },
];

describe("Should count the smiley faces correct", () => {
  mockCase.forEach((m) => {
    test(`should do input: ${m.input} correct`, () => {
      expect(countSmileys(m.input)).toEqual(m.expect);
    });
  });
});
