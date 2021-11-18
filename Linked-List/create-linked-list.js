class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const createLinkedList = (values) => {

//   let dummyHead = new Node(null);
//   let current = dummyHead;
//   for (let i = 0; i < values.length; i++) {
//     current.next = new Node(values[i]);
//     current = current.next;
//   }

//   return dummyHead.next;
// };

//recursive solution
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};

module.exports = {
  createLinkedList,
};
