function solve(inputArr){
    let sortedArr = inputArr.sort((a, b) => a - b);
    let countOfElement = Math.floor(sortedArr.length / 2);
    let result = sortedArr.slice(countOfElement, sortedArr.length);
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6])