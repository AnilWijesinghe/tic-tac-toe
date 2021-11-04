const gameWinner = require("../ticTacToeDecision/gameWinner");
let gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
let currentPlayer = 'X';

const gamePlay = (inputPosition)=>{

    let posArray = inputPosition.split(' ');
    gameBoard[parseInt(posArray[0])][parseInt(posArray[1])]=currentPlayer;
    const winner = gameWinner.findWinner(gameBoard);
    if(currentPlayer==='X'){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
    console.log(winner);
    if(winner!==null){
        return winner[0]+" is the winner";
    }else{
        return ""
    }



};


module.exports = {gamePlay};

