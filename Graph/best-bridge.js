const bestBridge = (grid) => {
  let breakNow = false;
  const mainIsland = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 'L') {
        searchIsland(grid, r, c, mainIsland);
        breakNow = true;
        break;
      }
    }
    if (breakNow) break;
  }

  const visited = new Set(mainIsland);
  const queue = [];

  for (const coords of mainIsland) {
    const [r, c] = coords.split(',').map(Number);
    queue.push([r, c, 0]);
  }

  while (queue.length) {
    const [r, c, distance] = queue.shift();
    const pos = r + ',' + c;
    if (grid[r][c] === 'L' && !mainIsland.has(pos)) return distance - 1;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const delta of deltas) {
      const [rDelta, cDelta] = delta;
      const nextRow = r + rDelta;
      const nextCol = c + cDelta;
      const rowInbounds = nextRow >= 0 && nextRow < grid.length;
      const colInbounds = nextCol >= 0 && nextCol < grid[0].length;
      const pos = nextRow + ',' + nextCol;

      if (rowInbounds && colInbounds && !visited.has(pos)) {
        visited.add(pos);
        queue.push([nextRow, nextCol, distance + 1]);
      }
    }
  }
};

const searchIsland = (grid, r, c, mainIsland) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  const pos = r + ',' + c;

  if (rowInbounds && colInbounds && grid[r][c] !== 'W' && !mainIsland.has(pos)) {
    mainIsland.add(pos);
    searchIsland(grid, r - 1, c, mainIsland);
    searchIsland(grid, r + 1, c, mainIsland);
    searchIsland(grid, r, c - 1, mainIsland);
    searchIsland(grid, r, c + 1, mainIsland);
  }
};

module.exports = {
  bestBridge,
};
