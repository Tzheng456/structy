const maxValue = (nums) => {
  let max = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

module.exports = {
  maxValue,
};
