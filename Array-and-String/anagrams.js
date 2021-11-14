const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const stringMap = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!stringMap[char]) {
      stringMap[char] = 0;
    }
    stringMap[char] += 1;
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (!stringMap[char]) {
      return false;
    } else {
      stringMap[char] -= 1;
    }
  }

  for (let char in stringMap) {
    if (stringMap[char] !== 0) {
      return false;
    }
  }

  return true;
};

module.exports = {
  anagrams,
};
