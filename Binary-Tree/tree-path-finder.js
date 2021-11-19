// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// in order to use array.push() for faster array times
// (rather than constructing a new array for each recursive call)
// the final result array needs to be reversed (as node values are pushed from the target to the root)

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];
  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};

module.exports = {
  pathFinder,
};
