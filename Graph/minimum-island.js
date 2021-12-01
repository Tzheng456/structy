const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let currentSize = explore(grid, r, c, visited);
      if (currentSize > 0 && currentSize < minSize) minSize = currentSize;
    }
  }
  return minSize;
};

const explore = (grid, r, c, visited) => {
  const inboundsR = r >= 0 && r < grid.length;
  const inboundsC = c >= 0 && c < grid[0].length;
  if (!inboundsR || !inboundsC) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r, c + 1, visited);
  size += explore(grid, r, c - 1, visited);

  return size;
};

module.exports = {
  minimumIsland,
};
