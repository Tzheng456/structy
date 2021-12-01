const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set([startRow + ',' + startCol]);
  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();
    const deltas = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    if (grid[r][c] === 'C') return dist;

    for (const delta of deltas) {
      const [rDelta, cDelta] = delta;
      const neighbourRow = r + rDelta;
      const rInbounds = neighbourRow >= 0 && neighbourRow < grid.length;
      const neighbourCol = c + cDelta;
      const cInbounds = neighbourCol >= 0 && neighbourCol < grid[0].length;
      const pos = neighbourRow + ',' + neighbourCol;

      if (rInbounds && cInbounds && grid[neighbourRow][neighbourCol] !== 'X' && !visited.has(pos)) {
        queue.push([neighbourRow, neighbourCol, dist + 1]);
        visited.add(pos);
      }
    }
  }

  return -1;
};

module.exports = {
  closestCarrot,
};
