function solve(inputMatrix){

    let biggestNum = -Infinity;

    for(let i = 0;  i < inputMatrix.length; i++){

        for(let j = 0; j < inputMatrix[i].length; j++){
            
            let currentNumber = inputMatrix[i][j];

            if(currentNumber > biggestNum){
                biggestNum = currentNumber
            }

        }

    }

    return biggestNum;

}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));