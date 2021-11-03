const validation = require('./validation');

test("",()=>{
    // Arrange
    let inputPosition = '1 4';

    // Act and assert
    expect(()=>validation()).toThrow('Position should be in 3*3 grid');


});
