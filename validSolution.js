var validSolution = board => {
  for (var i = 0; i < board.length; i++) {
    if (board[i].indexOf(0) !== -1) return false;
  }
  if (!checkRows(board)) return false;
  if (!checkCols(board)) return false;
  if (!checkSubGrids(board)) return false;
  return true;

}

var checkRows = board => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 1; j <= 9; j++) {
      if (board[i].indexOf(j) === -1) return false;
    }
  }
  return true;
}

var checkCols = board => {
  var board = board[0].map(function (_, c) { return board.map(function (r) { return r[c]; }); });;
  return checkRows(board);
}

var checkSubGrids = board => {
  var gridBoard = [];
  for (var i = 0; i < board.length; i += 3) {
    for (var j = 0; j < board.length; j += 3) {
      var gridRow = [];
      gridRow.push(board[i][j]);
      gridRow.push(board[i][j + 1]);
      gridRow.push(board[i][j + 2]);
      gridRow.push(board[i + 1][j]);
      gridRow.push(board[i + 1][j + 1]);
      gridRow.push(board[i + 1][j + 2]);
      gridRow.push(board[i + 2][j]);
      gridRow.push(board[i + 2][j + 1]);
      gridRow.push(board[i + 2][j + 2]);
      gridBoard.push(gridRow);
    }
  }
  return checkRows(gridBoard);
}


console.log('---- true:: ', validSolution([
               [5, 3, 4, 6, 7, 8, 9, 1, 2], 
               [6, 7, 2, 1, 9, 5, 3, 4, 8],
               [1, 9, 8, 3, 4, 2, 5, 6, 7],
               [8, 5, 9, 7, 6, 1, 4, 2, 3],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 6, 1, 5, 3, 7, 2, 8, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 4, 5, 2, 8, 6, 1, 7, 9]])
);

console.log('---- false:: ', validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
               [6, 7, 2, 1, 9, 0, 3, 4, 8],
               [1, 0, 0, 3, 4, 2, 5, 6, 0],
               [8, 5, 9, 7, 6, 1, 0, 2, 0],
               [4, 2, 6, 8, 5, 3, 7, 9, 1],
               [7, 1, 3, 9, 2, 4, 8, 5, 6],
               [9, 0, 1, 5, 3, 7, 2, 1, 4],
               [2, 8, 7, 4, 1, 9, 6, 3, 5],
               [3, 0, 0, 4, 8, 1, 1, 7, 9]])
);