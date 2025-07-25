function cars(input) {
    let objects = {};

    input.forEach((command) => {
        const parts = command.split(" ");

        if (parts[0] === "create") {
            if (parts[2] === "inherit") {
                let name = parts[1];
                let parentName = parts[3];
                objects[name] = {
                    properties: {},
                    parent: objects[parentName],
                };
            } else {
                let name = parts[1];
                objects[name] = {
                    properties: {},
                    parent: null,
                };
            }
        } else if (parts[0] === "set") {
            let name = parts[1];
            let key = parts[2];
            let value = parts[3];
            objects[name].properties[key] = value;
        } else if (parts[0] === "print") {
            let name = parts[1];
            let obj = objects[name];
            let result = [];

            for (let key in obj.properties) {
                result.push(`${key}:${obj.properties[key]}`);
            }

            let parent = obj.parent;
            while (parent) {
                for (let key in parent.properties) {
                    if (!obj.properties.hasOwnProperty(key)) {
                        result.push(`${key}:${parent.properties[key]}`);
                    }
                }
                parent = parent.parent;
            }

            console.log(result.join(","));
        }
    });
}

const input = [
    "create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2",
];

cars(input);
