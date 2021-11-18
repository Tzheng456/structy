// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const stack = [ root ];
//   const result = [];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return result;
// };

//recursive solution
const depthFirstValues = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValues(root.left); // b d e
  const rightValues = depthFirstValues(root.right); // c f

  return [root.val, ...leftValues, ...rightValues]; // a b d e c f
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

module.exports = {
  depthFirstValues,
};
