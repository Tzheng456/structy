// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//DF iterative
// const treeLevels = (root) => {
//   if (root === null) return [];

//   const result = [];
//   const stack = [{ node: root, level: 0 }];
//   while (stack.length > 0) {
//     const { node, level } = stack.pop();
//     console.log('node:', node, 'level:', level);
//     if (result.length === level) {
//       result[level] = [node.val];
//     } else {
//       result[level].push(node.val);
//     }

//     if (node.right !== null) stack.push({ node: node.right, level: level + 1 });
//     if (node.left !== null) stack.push({ node: node.left, level: level + 1 });
//   }

//   return result;
// };

//DF recursive
const treeLevels = (root) => {
  const levels = [];
  helper(root, levels, 0);
  return levels;
};

const helper = (root, levels, level) => {
  if (root === null) return;

  if (levels.length === level) {
    levels[level] = [root.val];
  } else {
    levels[level].push(root.val);
  }

  helper(root.left, levels, level + 1);
  helper(root.right, levels, level + 1);
};

//BF
// const treeLevels = (root) => {
//   if (root === null) return [];

//   const result = [];
//   const queue = [{ node: root, level: 0 }];
//   while (queue.length > 0) {
//     const { node, level } = queue.shift();
//     console.log('node:', node, 'level:', level);
//     if (result.length === level) {
//       result[level] = [node.val];
//     } else {
//       result[level].push(node.val);
//     }

//     if (node.left !== null) queue.push({ node: node.left, level: level + 1 });
//     if (node.right !== null) queue.push({ node: node.right, level: level + 1 });
//   }

//   return result;
// };

module.exports = {
  treeLevels,
};
