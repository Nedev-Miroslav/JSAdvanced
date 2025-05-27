function solve(inputArr){

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    

    for (let i = 0; i < inputArr.length; i++) {

        firstDiagonal += inputArr[i][i];
        secondDiagonal += inputArr[i][inputArr.length - 1 -i];
        
    }

    console.log(`${firstDiagonal} ${secondDiagonal}`);


}

solve([[20, 40],
    [10, 60]]
   );

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
