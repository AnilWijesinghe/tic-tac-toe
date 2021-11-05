const gameWinner = require("../ticTacToeDecision/gameWinner");
const validation = require("../ticTacToeValidation/validation");
const gameDraw = require("../ticTacToeDecision/gameDraw");

let gameBoard = [[null, null, null], [null, null, null], [null, null, null]];
let currentPlayer = 'X';

/**
 * Enter point to the game execution
 * @param inputPosition
 * @returns {string}
 */
const gamePlay = (inputPosition) => {
    let posArray = inputPosition.split(' ');
    validation.checkValidation(inputPosition, gameBoard);
    gameBoard[parseInt(posArray[0])][parseInt(posArray[1])] = currentPlayer;
    const winner = gameWinner.findWinner(gameBoard);
    (currentPlayer === 'X') ? currentPlayer = 'O' : currentPlayer = 'X';
    if (winner !== null) return winner[0] + " is the winner";
    else {
        const draw = gameDraw.findDraw(gameBoard);
        if (draw) return "Game is draw";
        else return `${currentPlayer} please enter the input position :`;
    }
};

module.exports = {gamePlay};

