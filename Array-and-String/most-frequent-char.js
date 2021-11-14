const mostFrequentChar = (s) => {
  const charCounts = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in charCounts)) {
      charCounts[char] = 0;
    } else {
      charCounts[char] += 1;
    }
  }

  let max = null;

  for (let char of s) {
    if (max === null || charCounts[char] > charCounts[max]) {
      max = char;
    }
  }

  return max;
};

module.exports = {
  mostFrequentChar,
};
