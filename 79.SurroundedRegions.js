function solve(board) {
  if (!board || board.length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== "O"
    ) {
      return;
    }

    board[row][col] = "#";

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === "O") {
      dfs(i, 0);
    }
    if (board[i][cols - 1] === "O") {
      dfs(i, cols - 1);
    }
  }

  for (let j = 0; j < cols; j++) {
    if (board[0][j] === "O") {
      dfs(0, j);
    }
    if (board[rows - 1][j] === "O") {
      dfs(rows - 1, j);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "#") {
        board[i][j] = "O";
      }
    }
  }
}
