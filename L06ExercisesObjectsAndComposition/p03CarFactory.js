function solve(inputObj) {
    const resultObj = {};

    resultObj.model = inputObj.model;

    if (inputObj.power <= 90) {
        resultObj.engine = { power: 90, volume: 1800 };
    } else if (inputObj.power > 90 && inputObj.power <= 120) {
        resultObj.engine = { power: 120, volume: 2400 };
    } else if (inputObj.power > 120 && inputObj.power <= 200) {
        resultObj.engine = { power: 200, volume: 3500 };
    }

    resultObj.carriage = { type: inputObj.carriage, color: inputObj.color };

    let inputWheels = inputObj.wheelsize;

    if (inputWheels % 2 === 0) {
        resultObj.wheels = new Array(4).fill(inputWheels - 1);
    } else {
        resultObj.wheels = new Array(4).fill(inputWheels);
    }

    return resultObj;
}

console.log(
    solve({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);

console.log(
    solve({
        model: "Opel Vectra",
        power: 110,
        color: "grey",
        carriage: "coupe",
        wheelsize: 17,
    })
);
