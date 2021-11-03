const gameWinner = require('./gameWinner');

let rowWinner;
let columnWinner;

beforeEach(()=>{
    rowWinner = [['X','X','X'],['O','X','O'],['X','O','O']];
    columnWinner = [['X','X','O'],['O','X','O'],['X','O','O']];
});

test("Find winner from row check",()=>{
    //Arrange
    // Act
    const winner = gameWinner(rowWinner);

    //Assert
    expect(winner).toBe('X');

});

test("Find winner from column check",()=>{
    //Arrange
    // Act
    const winner = gameWinner(columnWinner);

    //Assert
    expect(winner).toBe('O');

});
