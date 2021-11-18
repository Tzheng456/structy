// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const removeNode = (head, targetVal) => {
  let firstNode = head;
  let current = head;
  let prev = null;

  while (current !== null) {
    const next = current.next;
    if (current.val === targetVal) {
      if (prev !== null) {
        prev.next = next;
        return firstNode;
      } else {
        return next;
      }
    }
    prev = current;
    current = current.next;
  }

  return firstNode;
};

//alvin's solution
// const removeNode = (head, targetVal) => {
//   if (head.val === targetVal) return head.next;

//   let current = head;
//   let prev = null;

//   while (current !== null) {
//     if (current.val === targetVal) {
//       prev.next = current.next;
//       break;
//     }

//     prev = current;
//     current = current.next;
//   }

//   return head;
// }

module.exports = {
  removeNode,
};
