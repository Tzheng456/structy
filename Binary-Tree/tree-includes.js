// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative
// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   const stack = [ root ];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val === target) return true;

//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }

//   return false;
// };

//depth first recursive
// const treeIncludes = (root, target) => {
//   if (root === null) return false;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// }

//breadth first
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) return true;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return false;
};

module.exports = {
  treeIncludes,
};
