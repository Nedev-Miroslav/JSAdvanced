function orbit([width, height, x, y]) {

    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push(new Array(width).fill(0));
    }


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {

            let distance = Math.max(Math.abs(i - x), Math.abs(j - y));
            matrix[i][j] = distance + 1;
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}


orbit([4, 4, 0, 0]);
console.log('---');
orbit([5, 5, 2, 2]);
console.log('---');
orbit([3, 3, 2, 2]);


