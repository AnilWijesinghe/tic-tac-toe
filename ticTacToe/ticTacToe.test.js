const ticTacToe = require('./ticTacToe');
const gameWinner = require('../ticTacToeDecision/gameWinner');
const findWinner = jest.spyOn(gameWinner, 'findWinner');

let winningGrid;

beforeEach(()=>{
    winningGrid = [['X','X','X'],['O','X','O'],['X','O','O']];
})

describe("Test for winning scenario", () => {
    test("Check 1st input X",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('0 2');

        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([[null,null,'X'],[null,null,null],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
    });

});


