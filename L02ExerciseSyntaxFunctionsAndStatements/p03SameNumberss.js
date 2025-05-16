function solve(input) {
    let inputAsArr = String(input).split("");

    let isSame = true;
    let sum = 0;
    
    for(let i = 0; i < inputAsArr.length; i++){
        let firtDigit = inputAsArr[0];
        sum += Number(inputAsArr[i]);

        if(firtDigit !== inputAsArr[i]){
            isSame = false;
        }


    }

    console.log(isSame);
    console.log(sum);

}

solve(2222222);
solve(1234)