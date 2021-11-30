// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//DF iterative
// const levelAverages = (root) => {
//   if (root === null) return [];
//   const stack = [{ node: root, level: 0}];
//   const levels = [];
//   const averages = [];
//   while (stack.length) {
//     const { node, level } = stack.pop();
//     if (levels.length === level) {
//       levels[level] = [node.val];
//     } else {
//       levels[level].push(node.val);
//     }

//     if (node.right !== null) stack.push({node: node.right, level: level + 1});
//     if (node.left !== null) stack.push({node: node.left, level: level + 1});
//   }
//   for (const level of levels) {
//     const sum = level.reduce((a, b) => a + b)
//     const avg = sum / level.length;
//     averages.push(avg);
//   }
//   return averages;
// };

//DF recursive
const levelAverages = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);

  const averages = [];
  for (const level of levels) {
    averages.push(avg(level));
  }
  return averages;
};

const fillLevels = (root, levels, level) => {
  if (root === null) return;
  if (levels.length === level) {
    levels[level] = [root.val];
  } else {
    levels[level].push(root.val);
  }
  fillLevels(root.left, levels, level + 1);
  fillLevels(root.right, levels, level + 1);
};

const avg = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
};

module.exports = {
  levelAverages,
};
