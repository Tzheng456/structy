class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const mergeLists = (head1, head2) => {
//   let dummy = new Node(null);
//   let tail = dummy;
//   let curr1 = head1;
//   let curr2 = head2;

//   while (curr1 !== null && curr2 !== null) {
//     if (curr1.val > curr2.val) {
//       tail.next = curr2;
//       curr2 = curr2.next;
//     } else {
//       tail.next = curr1;
//       curr1 = curr1.next;
//     }
//     tail = tail.next;
//   }

//   if (curr1 !== null) tail.next = curr1;
//   if (curr2 !== null) tail.next = curr2;

//   return dummy.next;
// };

//recursive solution
const mergeLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};

module.exports = {
  mergeLists,
};
