function solve(inputArr){
    let result = '';

    for(let i = 0; i < inputArr.length; i++){
        
        if(i % 2 === 0){
            result += inputArr[i];
            result += ' '
        }

    }

    console.log(result);

}

solve(['20', '30', '40', '50', '60']);

