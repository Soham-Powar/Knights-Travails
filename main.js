function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const visited = new Set();
  const queue = [{ position: start, path: [start] }];

  while (queue.length > 0) {
    const current = queue.shift();
    const [x, y] = current.position;

    if (x === end[0] && y === end[1]) {
      return current.path;
    }

    for (let [dx, dy] of directions) {
      const next = [x + dx, y + dy];
      const key = next.toString();

      if (isValid(next) && !visited.has(key)) {
        visited.add(key);
        queue.push({ position: next, path: [...current.path, next] });
      }
    }
  }

  return null; // theoretically unreachable on a normal 8x8 chessboard
}
