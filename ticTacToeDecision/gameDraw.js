const findDraw = function(gameBoard){
    for(let row=0;row<gameBoard.length;row++){
        for(let col=0;col<gameBoard[row].length;col++){
            if(gameBoard[row][col]===null) return false;
        }
    }
    return true;
}

module.exports = {findDraw};
