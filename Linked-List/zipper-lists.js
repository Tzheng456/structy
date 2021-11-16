// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const zipperLists = (head1, head2) => {
//   let tail = head1;
//   let curr1 = head1.next;
//   let curr2 = head2;
//   let count = 0;

//   while (curr1 !== null && curr2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = curr2;
//       curr2 = curr2.next;
//     } else {
//       tail.next = curr1;
//       curr1 = curr1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (curr1 !== null) tail.next = curr1;
//   if (curr2 !== null) tail.next = curr2;

//   return head1;
// };

//recursive solution
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;

  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};

module.exports = {
  zipperLists,
};
