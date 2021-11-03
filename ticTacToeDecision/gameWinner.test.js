const gameWinner = require('./gameWinner');

let rowWinner;

beforeEach(()=>{
    rowWinner = [['X','X','X'],['O','X','O'],['X','O','O']];
});

test("Find winner from row check",()=>{
    //Arrange
    // Act
    const winner = gameWinner(rowWinner);

    //Assert
    expect(winner).toBe('X');

});
