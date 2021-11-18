// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  let currentNode = head;
  let prevVal = null;
  let currentStreak = 0;
  let maxStreak = 0;

  while (currentNode !== null) {
    if (currentNode.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak) maxStreak = currentStreak;

    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }

  return maxStreak;
};

module.exports = {
  longestStreak,
};
