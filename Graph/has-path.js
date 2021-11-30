//DF recursive
// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst) === true) return true;
//   }

//   return false;
// };

//DF iterative
// const hasPath = (graph, src, dst) => {
//   const stack = [ src ];

//   while (stack.length) {
//     const current = stack.pop();
//     if (current === dst) return true;

//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
//     }
//   }

//   return false;
// }

//BF
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

module.exports = {
  hasPath,
};
