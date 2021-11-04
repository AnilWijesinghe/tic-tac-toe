const gameWinner = require('./gameWinner');

let rowWinner;
let columnWinner;
let diagonalWinner;

beforeEach(()=>{
    rowWinner = [['X','X','X'],['O','X','O'],['X','O','O']];
    columnWinner = [['X','X','O'],['O','X','O'],['X','O','O']];
    diagonalWinner = [['X','O','O'],['O','X','O'],['X','O','X']];
});

test("Find winner from row check",()=>{
    //Arrange
    // Act
    const winner = gameWinner.findWinner(rowWinner);

    //Assert
    expect(winner).toBe('X');

});

test("Find winner from column check",()=>{
    //Arrange
    // Act
    const winner = gameWinner.findWinner(columnWinner);

    //Assert
    expect(winner).toBe('O');
});

test("Find winner from diagonal check",()=>{
    //Arrange
    // Act
    const winner = gameWinner.findWinner(diagonalWinner);

    //Assert
    expect(winner).toBe('X');
});
