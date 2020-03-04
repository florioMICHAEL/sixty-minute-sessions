var board = [];
const squareCount = 9;
var allSquares = document.getElementsByClassName("square");
var turn = 0;
var currentMove = "";

for (var i = 0; i < squareCount; ++i) {
    board[i] = null;
    allSquares[i].setAttribute('data-board-index', i);
}

$(".square").click(function() {
    var squareNum = $(this).attr('data-board-index');
    if (board[squareNum] == null) {
        ++turn % 2 === 0 ? currentMove = "o" : currentMove = "x";
        board[squareNum] = currentMove;
        $(this).text(currentMove);
        console.log(board);
        checkWin();
    }
});

function checkWin() {
    if (board[0] == currentMove && board[1] == currentMove && board[2] == currentMove  || board[3] == currentMove && board[4] == currentMove && board[5] == currentMove  || board[6] == currentMove && board[7] == currentMove && board[8] == currentMove  || board[0] == currentMove && board[3] == currentMove && board[6] == currentMove  || board[1] == currentMove && board[4] == currentMove && board[7] == currentMove  || board[2] == currentMove && board[5] == currentMove && board[8] == currentMove  || board[0] == currentMove && board[4] == currentMove && board[8] == currentMove  || board[2] == currentMove && board[4] == currentMove && board[6] == currentMove) {
        console.log(currentMove + '  won!');
    }
}