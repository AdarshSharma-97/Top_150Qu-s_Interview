var gameOfLife = function (board) {
  const newState = Array(board.length)
    .fill(0)
    .map(() => Array(board[0].length).fill(0));

  //Iterate over the board and populate the newState
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      setNewState(i, j, board, newState);
    }
  }

  //Iterate over the board again and set the board to the newState values
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = newState[i][j];
    }
  }

  //Function to set values in newState
  function setNewState(i, j, board, newState) {
    const cell = board[i][j];
    const colMax = board[i].length;
    const rowMax = board.length;
    let total = 0;

    // look north
    if (i - 1 >= 0) total += board[i - 1][j];
    // look northeast
    if (i - 1 >= 0 && j + 1 < colMax) total += board[i - 1][j + 1];
    // look east
    if (j + 1 < colMax) total += board[i][j + 1];
    // look southeast
    if (i + 1 < rowMax && j + 1 < colMax) total += board[i + 1][j + 1];
    // look south
    if (i + 1 < rowMax) total += board[i + 1][j];
    // look southwest
    if (i + 1 < rowMax && j - 1 >= 0) total += board[i + 1][j - 1];
    // look west
    if (j - 1 >= 0) total += board[i][j - 1];
    // look northwest
    if (j - 1 >= 0 && i - 1 >= 0) total += board[i - 1][j - 1];

    // Set values in newState to 1 if it follows the provided life rules
    if ((cell === 1 && total === 2) || total === 3) {
      newState[i][j] = 1;
    } else if (cell === 0 && total === 3) {
      newState[i][j] = 1;
    }
  }
};
