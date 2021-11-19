// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative
// const treeMinValue = (root) => {
//   const queue = [ root ];
//   let min = Infinity;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val < min) min = current.val;
//     if (current.left !== null) stack.push(current.left);
//     if (current.right !== null) stack.push(current.right);
//   }

//   return min;
// };

//depth first recursive
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
// }

//breadth first
const treeMinValue = (root) => {
  const queue = [root];
  let min = Infinity;
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < min) min = current.val;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return min;
};

module.exports = {
  treeMinValue,
};
