function getValidMoves([i, j]) {
  if (i < 0 || j < 0) {
    console.error("Invalid vertex.");
    return []; // Early return to prevent undefined
  }

  const validMoves = [];

  function addValidMove(x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      validMoves.push([x, y]);
    }
  }

  if (i + 2 <= 7) {
    addValidMove(i + 2, j + 1);
    addValidMove(i + 2, j - 1);
  }
  if (i - 2 >= 0) {
    addValidMove(i - 2, j + 1);
    addValidMove(i - 2, j - 1);
  }
  if (j + 2 <= 7) {
    addValidMove(i + 1, j + 2);
    addValidMove(i - 1, j + 2);
  }
  if (j - 2 >= 0) {
    addValidMove(i + 1, j - 2);
    addValidMove(i - 1, j - 2);
  }

  return validMoves;
}
