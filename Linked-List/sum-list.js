// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const sumList = (head) => {
//   let current = head;
//   let sum = 0;
//   while (current !== null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// };

//recursive solution
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

module.exports = {
  sumList,
};
