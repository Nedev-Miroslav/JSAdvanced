function solve(str1, str2, str3){
    const allStrCount = str1.length + str2.length + str3.length;
    const average = Math.floor(allStrCount / 3);

    console.log(allStrCount);
    console.log(average);

}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');