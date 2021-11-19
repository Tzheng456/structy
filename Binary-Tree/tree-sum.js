// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first
// const treeSum = (root) => {
//   if (root === null) return 0;
//   const stack = [ root ];
//   let sum = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     sum += current.val;

//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }
//   return sum;
// };

//depth first recursive
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};

//breadth first
// const treeSum = (root) => {
//   if (root === null) return 0;
//   const queue = [ root ];
//   let sum = 0;

//   while (queue.length > 0) {
//     const current = queue.shift();
//     sum += current.val;

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }

//   return sum;
// }

module.exports = {
  treeSum,
};
