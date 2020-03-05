var allSquares = $('.square');

function initBoard() {
    for (var i = 0; i < squarenum; i++) {
        board[i] = new Array(squarenum);
    }
    
    for (var x = 0; x < squarenum; ++x) {
        for (var y = 0; y < squarenum; ++y) {
            board[x][y] = new Square(x, y, false, null);
        }
    }
}

function addPieces() {
    for (var x = 0; x < squarenum; ++x) {
        for (var y = 0; y < squarenum; ++y) {
            if (x == 1 || x == 6) {
                board[x][y].piece = "pawn";
                board[x][y].taken = true;
            }
            if (x == 0 && y == 0 || x == 0 && y == 7 || x == 7 && y == 0 || x == 7 && y == 7 ) {
                board[x][y].piece = "rook";
                board[x][y].taken = true;
            }
            if (x == 0 && y == 1 || x == 0 && y == 6 || x == 7 && y == 1 || x == 7 && y == 6) {
                board[x][y].piece = "knight";
                board[x][y].taken = true;
            }
            if (x == 0 && y == 2 || x == 0 && y == 5 || x == 7 && y == 2 || x == 7 && y == 5) {
                board[x][y].piece = "bishop";
                board[x][y].taken = true;
            }
        }
    }
    //add logic for king/queen
    board[0][3].piece = "king";
    board[0][4].piece = "queen";
    board[7][3].piece = "queen";
    board[7][4].piece = "king";
    board[0][3].taken = true;
    board[0][4].taken = true;
    board[7][3].taken = true;
    board[7][4].taken = true;
}

function addAttributes() {
    for (i = 0; i < (Math.pow(squarenum, 2)); i++) {
        allSquares[i].setAttribute('data-board-index', i);
    }
}