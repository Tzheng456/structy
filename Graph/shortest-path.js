const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [{ node: nodeA, dist: 0 }];

  while (queue.length > 0) {
    const { node, dist } = queue.shift();
    if (node === nodeB) return dist;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ node: neighbor, dist: dist + 1 });
      }
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let pair of edges) {
    const [a, b] = pair;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

module.exports = {
  shortestPath,
};
