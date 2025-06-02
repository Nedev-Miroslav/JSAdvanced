function ticTacToe(moves) {
    let board = Array.from({ length: 3 }, () => Array(3).fill(false));
    let players = ["X", "O"];
    let turn = 0;
    
    function printBoard() {
        board.forEach(row => console.log(row.join("\t")));
    }
    
    function checkWinner(player) {
        for (let row of board) {
            if (row.every(cell => cell === player)) return true;
        }
        for (let col = 0; col < 3; col++) {
            if (board.every(row => row[col] === player)) return true;
        }
        if ([0, 1, 2].every(i => board[i][i] === player) || [0, 1, 2].every(i => board[i][2 - i] === player)) {
            return true;
        }
        return false;
    }
    
    for (let move of moves) {
        let [row, col] = move.split(" ").map(Number);
        if (board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        
        board[row][col] = players[turn % 2];
        if (checkWinner(players[turn % 2])) {
            console.log(`Player ${players[turn % 2]} wins!`);
            printBoard();
            return;
        }
        
        turn++;
        
        if (turn === 9) { 
            console.log("The game ended! Nobody wins :(");
            printBoard();
            return;
        }
    }
}


ticTacToe(["0 1",
    "0 0",
    "0 2", 
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
   );