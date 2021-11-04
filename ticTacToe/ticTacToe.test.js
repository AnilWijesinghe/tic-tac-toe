const ticTacToe = require('./ticTacToe');
const gameWinner = require('../ticTacToeDecision/gameWinner');
const validation = require("../ticTacToeValidation/validation");

jest.mock('../ticTacToeValidation/validation');
const findWinner = jest.spyOn(gameWinner, 'findWinner');

let winningGrid;

beforeEach(()=>{
    winningGrid = [['X','X','X'],['O','X','O'],['X','O','O']];
})

describe("Test for validation scenario", () => {
    test("Validation when input position not in 3*3 grid",()=>{
        //Arrange
        let inputPosition = '0 4';
        //Act
        //Assert
        expect(validation)
            .toHaveBeenCalledWith(inputPosition);
        expect(validation)
            .toHaveBeenCalledTimes(1);
        expect(()=>ticTacToe.gamePlay()).toThrow('Position should be in 3*3 grid');
    });
});

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
    test("Check 1st input O",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('1 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([[null,null,'X'],[null,null,'O'],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(2);
    });
    test("Check 2nd input X",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('0 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,'X'],[null,null,'O'],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(3);
    });
    test("Check 2nd input O",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('1 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,'X'],['O',null,'O'],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(4);
    });
    test("Check 3rd input X",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('0 1');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X','X','X'],['O',null,'O'],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(5);
        expect(inputPositionToWin).toBe('X is the winner')
    });
});


