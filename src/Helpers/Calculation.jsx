export const getAllPermutations = (arr) => {
  const results = [];

  const permute = (current, remaining) => {
    if (remaining.length === 0) {
      results.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = [...current, remaining[i]];
      const rest = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permute(next, rest);
    }
  };

  permute([], arr);
  return results;
};
