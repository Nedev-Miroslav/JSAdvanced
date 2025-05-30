function solve(inputArr, rotationCount){

    for(let i = 1; i <= rotationCount; i++){
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(" "));

}


solve(['1', 
    '2', 
    '3', 
    '4'], 
    2
    );
    
solve(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    );