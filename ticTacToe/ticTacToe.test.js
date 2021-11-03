const gamePlay = require('./ticTacToe');
const gameWinner = require('../ticTacToeDecision/gameWinner')
const findWinner = jest.spyOn(gameWinner, 'gameWinner');

let winningGrid;

beforeEach(()=>{
    winningGrid = [['X','X','X'],['O','X','O'],['X','O','O']];
})

test("Check game win when input symbol by player",()=>{
    //Arrange
    //Act
    const inputPositionToWin = gamePlay('0 3');

    //Assert
    expect(findWinner)
        .toHaveBeenCalledWith(winningGrid);
    expect(findWinner)
        .toHaveBeenCalledTimes(1);
    expect(inputPositionToWin).toBe('X is winner');
});
