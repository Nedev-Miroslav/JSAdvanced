function solve(inputArr){
    let resultArr = [];
    let currentNum = Number.MIN_SAFE_INTEGER;

    for (const element of inputArr) {
        if(element >= currentNum){
            currentNum = element;
            resultArr.push(element);
        }
        
    }

    return(resultArr);

}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))