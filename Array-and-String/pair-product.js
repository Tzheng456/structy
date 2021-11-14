const pairProduct = (numbers, targetProduct) => {
  const prev = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetProduct / numbers[i];
    if (!(complement in prev)) {
      prev[numbers[i]] = i;
    } else {
      return [prev[complement], i];
    }
  }
};

module.exports = {
  pairProduct,
};
