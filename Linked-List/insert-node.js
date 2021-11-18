class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const insertNode = (head, value, index) => {
//   let current = head;
//   let count = 0;

//   if (index === 0) {
//     const newNode = new Node(value);
//     newNode.next = head;
//     return newNode;
//   }

//   while (current !== null) {
//     if (count === index - 1) {
//       const next = current.next;
//       const newNode = new Node(value);
//       current.next = newNode;
//       newNode.next = next;
//     }
//     current = current.next;
//     count++;
//   }
//   return head;
// };

// recursive solution

const insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  if (count === index - 1) {
    const next = head.next;
    const newNode = new Node(value);
    head.next = newNode;
    newNode.next = next;
    return;
  }

  insertNode(head.next, value, index, count + 1);
  return head;
};

module.exports = {
  insertNode,
};
