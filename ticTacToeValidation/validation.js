const validation = (inputPosition,gameBoard)=>{
    let positions = inputPosition.split(' '); // 1 2
    if(positions[0]<1 || positions[0]>=3 || positions[1]<1 || positions[1]>=3)
        throw new Error('Position should be in 3*3 grid');
    for(let row=0;row<gameBoard.length;row++){
        for(let col=0;col<gameBoard[row].length;col++){
            if(row===parseInt(positions[0]) && col===parseInt(positions[1]))
                if(gameBoard[row][col]!==null) throw new Error('input position is already filled');
        }
    }

};

module.exports = validation;
