// DF recursive
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);

//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => {
//   if (src === dst) return true;
//   if (visited.has(src)) return false;
//   visited.add(src);
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst)) return true;
//   }

//   return false;
// }

//DF iterative
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const stack = [nodeA];
  const visited = new Set();

  while (stack.length) {
    const current = stack.pop();
    if (current === nodeB) return true;

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};
  for (const pair of edges) {
    const [a, b] = pair;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

module.exports = {
  undirectedPath,
};
