function solve(inputArr){
    
    inputArr.sort((a, b) => a - b);
        
    let resultArr = [];

    while(inputArr.length > 0){

        let smallest = inputArr.shift();
        let biggest = inputArr.pop();

        resultArr.push(smallest, biggest);
        
    } 

    return(resultArr);

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

