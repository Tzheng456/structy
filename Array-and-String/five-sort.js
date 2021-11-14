const fiveSort = (nums) => {
  let j = nums.length - 1;
  let i = 0;

  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      i++;
    } else {
      // nums[i] !== 5 case, increment i
      i++;
    }
  }

  return nums;
};

module.exports = {
  fiveSort,
};
