class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let curr1 = head1;
  let curr2 = head2;
  let carry = 0;

  while (curr1 !== null || curr2 !== null || carry === 1) {
    let val1 = curr1 === null ? 0 : curr1.val;
    let val2 = curr2 === null ? 0 : curr2.val;

    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    let digit = sum % 10;

    if (curr1 !== null) curr1 = curr1.next;
    if (curr2 !== null) curr2 = curr2.next;

    tail.next = new Node(digit);
    tail = tail.next;
  }

  return dummyHead.next;
};

//recursive solution
// const addLists = (head1, head2, carry = 0) => {
//   if (head1 === null && head2 === null && carry === 0) return null;

//   let val1 = head1 === null ? 0 : head1.val;
//   let val2 = head2 === null ? 0 : head2.val;

//   let sum = val1 + val2 + carry;
//   let newCarry = sum > 9 ? 1 : 0;
//   let digit = sum % 10;

//   const resultNode = new Node(digit);
//   let next1 = head1 === null ? null : head1.next;
//   let next2 = head2 === null ? null : head2.next;

//   resultNode.next = addLists(next1, next2, newCarry);

//   return resultNode;
// };

module.exports = {
  addLists,
};
