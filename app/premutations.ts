const premutations = (input: string): string[] => {
  if (!input || !input.length) {
    return [];
  }
  const result: string[] = [];

  const genPremutations = (curr: string, prev: string) => {
    if (prev.length === 0 && result.indexOf(curr) === -1) {
      result.push(curr);
      return;
    }

    for (let i = 0; i < prev.length; i++) {
      if (!prev) {
        continue;
      }

      const newCurr = curr + prev[i];
      const newPrev = prev.slice(0, i) + prev.slice(i + 1);

      genPremutations(newCurr, newPrev);
    }
  };

  genPremutations("", input);

  return result;
};

export default premutations;
