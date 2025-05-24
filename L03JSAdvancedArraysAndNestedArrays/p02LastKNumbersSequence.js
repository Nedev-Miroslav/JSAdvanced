function lastKNumbersSequence(n, k) {
    let result = [1];

    while (result.length < n) {
        let sum = 0;
        for (let i = result.length - k; i < result.length; i++) {
            if (i >= 0) sum += result[i]; 
        }
        result.push(sum);
    }

    return result;
}


console.log(lastKNumbersSequence(6, 3)); // [1, 1, 2, 4, 7, 13]
console.log(lastKNumbersSequence(8, 2)); // [1, 1, 2, 3, 5, 8, 13, 21]