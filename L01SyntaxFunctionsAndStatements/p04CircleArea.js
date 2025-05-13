function solve(input){
    const type = typeof input
    if(type === "number") {
        const result = Math.PI * (input ** 2)
        console.log(`${result.toFixed(2)}`)
    } else{
        
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }

}

solve(5);
solve('name')