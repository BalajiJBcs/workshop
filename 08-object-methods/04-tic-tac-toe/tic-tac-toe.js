// YOUR CODE BELOW

let ticTacToe = {
    board : [
        [null, null, null],
        [null, null, null],
        [null, null,  null]],
    move: function(va, x, y) {
        if(!this.board[x][y]) {
            this.board[x][y] = va;
            return this.board;
        }
        return this.board;
    },
    clear: function() {

        let mat = this.board;
        for(let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                this.board[i][j] = null;
            }
        }

        return this.board;
    }

};