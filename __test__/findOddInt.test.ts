import findTheOddInt from "../app/findOddInt";

const mockCase = [
  {
    input: [7],
    expect: 7,
  },
  {
    input: [0],
    expect: 0,
  },
  {
    input: [1, 1, 2],
    expect: 2,
  },
  {
    input: [0, 1, 0, 1, 0],
    expect: 0,
  },
  {
    input: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
    expect: 4,
  },
];

describe("Should shuffle string with premuatation correct", () => {
  mockCase.forEach((m) => {
    test(`should do input: ${m.input} correct`, () => {
      expect(findTheOddInt(m.input)).toEqual(m.expect);
    });
  });
});
