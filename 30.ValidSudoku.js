const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    let row = new Set();
    let column = new Set();
    let miniBoard = new Set();

    for (let j = 0; j < board.length; j++) {
      let rowNum = board[i][j];
      let colNum = board[j][i];
      let miniNum =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowNum != ".") {
        if (row.has(rowNum)) {
          return false;
        } else {
          row.add(rowNum);
        }
      }
      if (colNum != ".") {
        if (column.has(colNum)) {
          return false;
        } else {
          column.add(colNum);
        }
      }
      if (miniNum != ".") {
        if (miniBoard.has(miniNum)) {
          return false;
        } else {
          miniBoard.add(miniNum);
        }
      }
    }
  }
  return true;
};
