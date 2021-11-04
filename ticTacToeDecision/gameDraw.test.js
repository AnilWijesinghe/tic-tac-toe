const gameDraw = require('./gameDraw');


test("Game draw; All cells are filled",()=>{
    //Arrange
    const filledGrid = [['X','X','O'],['O','X','O'],['X','O','X']];

    //Act
    const isGameDraw = gameDraw.findDraw(filledGrid);

    //Assert
    expect(isGameDraw).toBe(true);
});
