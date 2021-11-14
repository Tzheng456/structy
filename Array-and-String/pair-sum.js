const pairSum = (numbers, targetSum) => {
  const prev = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];
    if (!(complement in prev)) {
      prev[numbers[i]] = i;
    } else {
      return [prev[complement], i];
    }
  }
};

module.exports = {
  pairSum,
};
