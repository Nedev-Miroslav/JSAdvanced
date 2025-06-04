function solve(city, population, treasury){

    const cityRecord = {
        name: city,
        population,
        treasury
    };

    return(cityRecord);

}

console.log(solve('Tortuga',
7000,
15000
));