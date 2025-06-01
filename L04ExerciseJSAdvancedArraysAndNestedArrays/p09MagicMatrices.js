function solve(inputMatrix){

    let n = inputMatrix.length;
    for (let row of inputMatrix) {
        if (row.length !== n) {
            console.log(false);
            return;
        }
    }

    let resultSet = new Set();

    let currentRow = 0;
    let currentCol = 0;

    let result;

    for(let row = 0; row < inputMatrix.length; row++){

        for(let col = 0; col < inputMatrix[row].length; col++){
                        
            currentRow += inputMatrix[row][col];
            currentCol += inputMatrix[col][row];
         
        }

        resultSet.add(currentRow);
        resultSet.add(currentCol)

        currentRow = 0;
        currentCol = 0

    }

    if(resultSet.size > 1){
        result = false;
    }else{
        result = true;
    }

    console.log(result);

}


solve([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
   );


solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );


solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );




// Друго решение

// function isMagicMatrix(matrix) {
//     const sumRow = matrix[0].reduce((sum, num) => sum + num, 0);
    
//     for (let row of matrix) {
//         if (row.reduce((sum, num) => sum + num, 0) !== sumRow) {
//             console.log(false);
//             return;
//         }
//     }
    
//     for (let col = 0; col < matrix[0].length; col++) {
//         let colSum = 0;
//         for (let row = 0; row < matrix.length; row++) {
//             colSum += matrix[row][col];
//         }
//         if (colSum !== sumRow) {
//             console.log(false);
//             return;
//         }
//     }
    
//     console.log(true);
// }

// isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// isMagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// isMagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]); 