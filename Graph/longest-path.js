const longestPath = (graph) => {
  const distance = {};

  //initialize starting distance key:values (the nodes with no neighbours -> have distance = 0)
  for (const node in graph) {
    if (graph[node].length === 0) {
      distance[node] = 0;
    }
  }
  //traverse through the nodes in the graph
  for (const node in graph) {
    explore(graph, node, distance);
  }

  return Math.max(...Object.values(distance));
};

const explore = (graph, nodes, distance) => {
  //if the node is a key in distance, return
  if (node in distance) return distance[node];

  let max = 0;
  //traverse through neighbouring nodes of current node
  for (const neighbour of graph[node]) {
    //refers to the distance of neighbour node
    const attempt = explore(graph, neighbour, distance);
    if (attempt > max) max = attempt;
  }

  //mutate the distance by adding 1 (node is 1 distance greater than distance of neighbour)
  distance[node] = max + 1;
  return distance[node];
};

module.exports = {
  longestPath,
};
