/**
 * find winner
 * @param gameBoard
 * @returns {null|*}
 */
const findWinner = (gameBoard) => {
    for (let row = 0; row < 3; row++) {
        if (gameBoard[row][0] == null) break;
        else if (gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2]) return gameBoard[row][0];
    }

    for (let column = 0; column < 3; column++) {
        if (gameBoard[0][column] == null) break;
        else if (gameBoard[0][column] === gameBoard[1][column] && gameBoard[1][column] === gameBoard[2][column]) return gameBoard[0][column];
    }

    if (gameBoard[0][0] != null && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
        return gameBoard[0][0];
    }

    if (gameBoard[0][2] != null && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
        return gameBoard[0][2];
    }

    return null;
};

module.exports = {findWinner};
