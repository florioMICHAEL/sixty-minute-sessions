const   squarenum = 8,
        board = new Array(squarenum),
        pieces = [
            {
                name: "pawnOne",
                rank: 1,
                file: 0,
                // move: mpvePiece(pawn),
                team: "black",
            },
            {
                name: "pawnTwo",
                rank: 1,
                file: 1,
                // move: mpvePiece(pawn),
                team: "black",
            },
            {
                name: "pawnThree",
                rank: 1,
                file: 2,
                // move: mpvePiece(pawn),
                team: "black",
            }
        ];

class Square {
    constructor(x, y, bool, string) {
        this.rank = x;
        this.file = y;
        this.taken = bool;
        this.piece = string;
    }
}

for (var i = 0; i < squarenum; i++) {
    board[i] = new Array(squarenum);
}

for (var x = 0; x < squarenum; ++x) {
    for (var y = 0; y < squarenum; ++y) {
        board[x][y] = new Square( x, y, false, null );
    }
}


pieces.forEach(function(piece)  {
    board.forEach(function(rank) {
        rank.forEach(function(file) {
            if ( piece.rank == file.rank && piece.file == file.file ) {
                file.taken = true;
                file.piece = piece.name;
            }
        })
    })
})

console.log(board)