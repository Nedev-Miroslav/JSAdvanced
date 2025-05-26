function solve(inputArr) {
    return inputArr
            .filter((num, index) => index % 2 !== 0)
            .map(dobleNum => dobleNum * 2)
            .reverse();
    
}

console.log(solve([10, 15, 20, 25]))