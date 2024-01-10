const countSmileys = (input: string[]): number => {
  if (!input || !input.length) {
    return 0;
  }
  const regex = /(:|;)+(-|~)?(\)|D)+/gm;

  return input.filter((i) => i.match(regex)).length;
};

export default countSmileys;
