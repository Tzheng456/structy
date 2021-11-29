// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

//depth first iterative
const allTreePaths = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [[root.val]];

  const paths = [];

  const leftSide = allTreePaths(root.left);
  for (let subPath of leftSide) {
    paths.push([root.val, ...subPath]);
  }

  const rightSide = allTreePaths(root.right);
  for (let subPath of rightSide) {
    paths.push([root.val, ...subPath]);
  }

  return paths;
};

module.exports = {
  allTreePaths,
};
