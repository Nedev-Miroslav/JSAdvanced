function solve(inputArr){

let resultArr = [];

for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i] < 0){
        resultArr.unshift(inputArr[i])
    } else{
        resultArr.push(inputArr[i]);
    }
}

for (const currentNum of resultArr) {
    console.log(currentNum);
}

}

solve([7, -2, 8, 9]);