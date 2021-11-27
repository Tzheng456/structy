// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first recursive
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   const result = root.val === target ? 1 : 0;

//   return result + treeValueCount(root.right, target) + treeValueCount(root.left, target);
// }

//depth first iterative
// const treeValueCount = (root, target) => {
//   if (root === null) return 0;
//   const stack = [root];
//   let count = 0;

//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current.val === target) count += 1;

//     if(current.right !== null) stack.push(current.right);
//     if(current.left !== null) stack.push(current.left);
//   }

//   return count;
// }

//breadth first iterative
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const queue = [root];
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) count += 1;

    if (current.right !== null) queue.push(current.right);
    if (current.left !== null) queue.push(current.left);
  }

  return count;
};

module.exports = {
  treeValueCount,
};
