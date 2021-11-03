const gameWinner = (gameBoard)=>{

    for(let row=0; row<3; row++){
        if(gameBoard[row][0] == null){
            console.log('continue');
        }else if(gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]){
            return gameBoard[row][0];
        }
    }

};

module.exports = gameWinner;
