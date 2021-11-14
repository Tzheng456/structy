const uncompress = (s) => {
  const result = [];
  const nums = '0123456789'; //0-9 numbers
  let i = 0; //number of iterations index
  let j = 0; //char index

  while (j < s.length) {
    if (nums.includes(s[j])) {
      j++;
    } else {
      //found char
      const num = Number(s.slice(i, j)); //extract iterations count
      for (let k = 0; k < num; k++) {
        result.push(s[j]); //append repeated chars to result
      }
      j++; //move j to next "group"
      i = j; //move i to next "group" too
    }
  }

  return result.join('');
};

module.exports = {
  uncompress,
};
