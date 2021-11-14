// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const getNodeValue = (head, index) => {
//   let count = 0;
//   let current = head;

//   while (current !== null) {
//     if (count === index) return current.val;
//     current = current.next;
//     count++;
//   }
//   return null;
// };

//recursive solution
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, --index);
};

module.exports = {
  getNodeValue,
};
