// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// DF iterative
// const leafList = (root) => {
//   if (root === null) return [];
//   const stack = [ root ];
//   const leaves = [];

//   while (stack.length) {
//     const current = stack.pop();

//     if (current.left === null && current.right === null) leaves.push(current.val);
//     if (current.right !== null) stack.push(current.right);
//     if (current.left !== null) stack.push(current.left);
//   }
//   return leaves;
// };

//DF recursive
const leafList = (root) => {
  const leaves = [];
  fill(root, leaves);
  return leaves;
};

const fill = (root, leaves) => {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);
  fill(root.left, leaves);
  fill(root.right, leaves);
};

module.exports = {
  leafList,
};
