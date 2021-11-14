const compress = (s) => {
  let i = 0; //index
  let j = 0; //new char index

  const result = [];

  while (j <= s.length) {
    const current = s[i];

    if (current === s[j]) {
      j++;
    } else {
      const count = j - i;

      if (count === 1) {
        result.push(current);
      } else {
        result.push(count, current);
      }

      i = j;
    }
  }
  return result.join('');
};

module.exports = {
  compress,
};
