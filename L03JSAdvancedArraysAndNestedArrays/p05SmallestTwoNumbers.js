function solve(inputArr){
    
    let sortedArr = inputArr.sort((a, b) => a - b);

    let result = inputArr.slice(0, 2).join(" ");
    console.log(result);


}


solve([30, 15, 50, 5]);