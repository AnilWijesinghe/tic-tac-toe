const ticTacToe = require('./ticTacToe');
const gameWinner = require('../ticTacToeDecision/gameWinner');
const findWinner = jest.spyOn(gameWinner, 'findWinner');


describe("Test for validation scenario", () => {
    test("Validation when input position not in 3*3 grid",()=>{
        //Arrange
        let inputPosition = "0 3";
        //Act
        //Assert
        expect(()=>{
            ticTacToe.gamePlay(inputPosition);
        }).toThrowError('Position should be in 3*3 grid');
    });
});

describe("Test for winning scenario,Validation when input already filled position", () => {
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

    test("Validation when input already filled position",()=>{
        //Arrange
        let inputPosition = "0 2";
        //Act
        //Assert
        expect(()=>{
            ticTacToe.gamePlay(inputPosition);
        }).toThrowError('input position is already filled');
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

describe("Test for game draw", () => {
    test("Check 1st input X",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('0 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,null],[null,null,null],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
    });
    test("Check 1st input O",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('1 1');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,null],[null,'O',null],[null,null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(2);
    });
    test("Check 2nd input X",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('2 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,null],[null,'O',null],['X',null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(3);
    });
    test("Check 2nd input O",()=>{
        //Arrange
        //Act
        ticTacToe.gamePlay('1 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,null],['O','O',null],['X',null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(4);
    });
    test("Check 3rd input X",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('1 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X',null,null],['O','O','X'],['X',null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(5);
    });
    test("Check 3rd input O",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('0 1');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X','O',null],['O','O','X'],['X',null,null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(6);
    });
    test("Check 4th input X",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('2 1');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X','O',null],['O','O','X'],['X','X',null]]);
        expect(findWinner)
            .toHaveBeenCalledTimes(7);
    });
    test("Check 4th input O",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('2 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X','O',null],['O','O','X'],['X','X','O']]);
        expect(findWinner)
            .toHaveBeenCalledTimes(8);
    });
    test("Check 5th input X",()=>{
        //Arrange
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('0 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith([['X','O','X'],['O','O','X'],['X','X','O']]);
        expect(findWinner)
            .toHaveBeenCalledTimes(9);
    });
});


