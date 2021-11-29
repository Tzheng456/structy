class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  const queue = [root];

  while (queue) {
    const current = queue.shift();
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);

    if (queue.length === 0) return current.val;
  }
};

module.exports = {
  bottomRightValue,
};
