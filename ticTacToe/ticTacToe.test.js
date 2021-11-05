const ticTacToe = require('./ticTacToe');
const gameWinner = require('../ticTacToeDecision/gameWinner');
const gameDraw = require("../ticTacToeDecision/gameDraw");
const findWinner = jest.spyOn(gameWinner, 'findWinner');
const findDraw = jest.spyOn(gameDraw, 'findDraw');

afterEach(() => {
    jest.clearAllMocks();
});

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
        let position = [[null,null,'X'],[null,null,null],[null,null,null]];
        //Act
        ticTacToe.gamePlay('0 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith(position);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
        expect(findDraw)
            .toHaveBeenCalledWith(position);
        expect(findDraw)
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
        let position = [[null,null,'X'],[null,null,'O'],[null,null,null]];
        //Act
        ticTacToe.gamePlay('1 2');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith(position);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
        expect(findDraw)
            .toHaveBeenCalledWith(position);
        expect(findDraw)
            .toHaveBeenCalledTimes(1);
    });
    test("Check 2nd input X",()=>{
        //Arrange
        let position = [['X',null,'X'],[null,null,'O'],[null,null,null]];
        //Act
        ticTacToe.gamePlay('0 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith(position);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
        expect(findDraw)
            .toHaveBeenCalledWith(position);
        expect(findDraw)
            .toHaveBeenCalledTimes(1);
    });
    test("Check 2nd input O",()=>{
        //Arrange
        let position = [['X',null,'X'],['O',null,'O'],[null,null,null]];
        //Act
        ticTacToe.gamePlay('1 0');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith(position);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
        expect(findDraw)
            .toHaveBeenCalledWith(position);
        expect(findDraw)
            .toHaveBeenCalledTimes(1);
    });
    test("Check 3rd input X",()=>{
        //Arrange
        let position = [['X','X','X'],['O',null,'O'],[null,null,null]]
        //Act
        const inputPositionToWin = ticTacToe.gamePlay('0 1');
        //Assert
        expect(findWinner)
            .toHaveBeenCalledWith(position);
        expect(findWinner)
            .toHaveBeenCalledTimes(1);
        expect(inputPositionToWin).toBe('X is the winner')
    });
});




