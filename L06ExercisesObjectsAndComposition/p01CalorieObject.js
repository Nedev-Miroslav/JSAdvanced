function solve(inputArr){

    const resultObj = {};


    for(let i = 0; i < inputArr.length; i += 2){
        let currentProduct = inputArr[i];
        let currentWeight = Number(inputArr[i + 1]);

        resultObj[currentProduct] = currentWeight;
    }
    
    console.log(resultObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);