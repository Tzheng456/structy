// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const linkedListValues = (head) => {
//   const values = [];
//   let current = head;
//   while (current !== null) {
//     values.push(current.val);
//     current = current.next;
//   }
//   return values;
// };

//recursive solution
const linkedListValues = (head) => {
  const values = [];
  populateValues(head, values);
  return values;
};

const populateValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  populateValues(head.next, values);
};

module.exports = {
  linkedListValues,
};
