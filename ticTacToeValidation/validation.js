/**
 * handle validations
 * @param inputPosition
 * @param gameBoard
 * @returns {null}
 */
const checkValidation = function (inputPosition, gameBoard) {
    let positions = inputPosition.split(' ');
    if (positions[0] < 0 || positions[0] >= 3 || positions[1] < 0 || positions[1] >= 3)
        throw new Error('Position should be in 3*3 grid');
    for (let row = 0; row < gameBoard.length; row++) {
        for (let col = 0; col < gameBoard[row].length; col++) {
            if (row === parseInt(positions[0]) && col === parseInt(positions[1]))
                if (gameBoard[row][col] !== null) throw new Error('input position is already filled');
                else return null;
        }
    }
    return null;
};

module.exports = {checkValidation};
