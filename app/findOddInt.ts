const findTheOddInt = (input: number[]): number => {
  if (!input || !input.length) {
    return 0;
  }
  let dict: { [k: string]: number } = {};

  input.forEach((i) => (dict[i] ? (dict[i] += 1) : (dict[i] = 1)));

  let tempDict: { [k: string]: number } = {};
  Object.entries(dict).forEach(([key, value]) => {
    if (value % 2 !== 0) {
      tempDict[key] = value;
    }
  });

  const sort = Object.entries(tempDict).sort(() => -1);
  if (sort.length) {
    const [k, v] = sort.at(-1);
    return +k;
  }

  return 0;
};

export default findTheOddInt;
