const validation = require('./validation');

let positionFilledArr;

beforeEach(() => {
    positionFilledArr = [
        ["X", "O", null],
        ["X", "O", "O"],
        ["X", null, "O"]
    ];
})

afterEach(() => {
    jest.clearAllMocks();
});

test("Invalid argument; input position not in grid", () => {
    // Arrange
    let inputPosition = '1 4';

    // Act and assert
    expect(() => validation.checkValidation(inputPosition)).toThrow('Position should be in 3*3 grid');
});

test("Invalid argument; input position is already filled", () => {
    // Arrange
    let inputPosition = '1 2';

    // Act and assert
    expect(() => validation.checkValidation(inputPosition, positionFilledArr)).toThrow('input position is already filled');
});
