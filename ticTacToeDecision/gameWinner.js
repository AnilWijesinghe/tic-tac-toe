const gameWinner = (gameBoard)=>{

    for(let row=0; row<3; row++){
        if(gameBoard[row][0] == null) continue;
        else if(gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]) return gameBoard[row][0];
    }

    for(let column=0; column<3; column++){
        if(gameBoard[0][column] == null){
            console.log('continue')
        }else if(gameBoard[0][column] === gameBoard[1][column] && gameBoard[1][column] === gameBoard[2][column]){
            return gameBoard[0][column];
        }
    }





};

module.exports = gameWinner;
