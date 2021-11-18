// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const isUnivalueList = (head) => {
//   let current = head;
//   let value = head.val;
//   while (current !== null) {
//     if (current.val !== value) return false;
//     current = current.next;
//   }
//   return true;
// };

//recursive solution
const isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal !== null && head.val !== prevVal) return false;
  return isUnivalueList(head.next, head.val);
};

module.exports = {
  isUnivalueList,
};
