const intersection = (a, b) => {
  const aSet = new Set(a);
  const result = [];

  for (let num of b) {
    if (aSet.has(num)) {
      result.push(num);
    }
  }

  return result;
};

module.exports = {
  intersection,
};
