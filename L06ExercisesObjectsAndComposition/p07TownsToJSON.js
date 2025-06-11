function solve(input){
    let result = [];
    
    for (let i = 1; i < input.length; i++) {
        let [_, town, latitude, longitude] = input[i].split('|').map(x => x.trim());
        
        result.push({
            Town: town,
            Latitude: parseFloat(Number(latitude).toFixed(2)),
            Longitude: parseFloat(Number(longitude).toFixed(2))
        });
    }
    
    console.log(JSON.stringify(result));
}



solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    )
