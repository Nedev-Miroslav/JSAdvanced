function solve(inputArr) {
    let resultArr = [];

    for(const element of inputArr) {

        let [name, level, items] = element.split(' / ');
        if(name === ""){
            continue;
        }

        level = Number(level);
        items = items ? items.split(', ') : [];

        resultArr.push({name, level, items});
     
    }

    console.log(JSON.stringify(resultArr));

}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    )

