function solve(inputArr){
    let firstNum = Number(inputArr.shift());
    let lastNum = Number(inputArr.pop());

    let result = firstNum + lastNum;

    return result;
}


console.log(solve(['20', '30', '40']));
