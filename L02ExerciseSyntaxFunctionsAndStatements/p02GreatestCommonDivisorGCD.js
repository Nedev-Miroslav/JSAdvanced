// function solve(num1, num2){
//     let GCD = num1 % num2;

//     while(GCD > 0) {
//         num1 = num2;
//         num2 = GCD;

//         GCD = num1 % num2;

//     }
//     console.log(num2);

// }

// По елегантното решение
function solve(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}


solve(15, 5);
solve(2154, 458);