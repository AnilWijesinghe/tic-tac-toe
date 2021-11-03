const validation = (inputPosition,gameBoard)=>{
    let positions = inputPosition.split(' '); // 1 2
    if(positions[0]<1 || positions[0]>=3 || positions[1]<1 || positions[1]>=3)
        throw new Error('Position should be in 3*3 grid');

};

module.exports = validation;
