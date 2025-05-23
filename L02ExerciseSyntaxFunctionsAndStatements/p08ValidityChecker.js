function solve(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isDistanceValid(x1, y1, x2, y2) {
        const distance = calculateDistance(x1, y1, x2, y2);
        const isValid = Number.isInteger(distance);
        const status = isValid ? "valid" : "invalid";

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
    }

    isDistanceValid(x1, y1, 0, 0);
    isDistanceValid(x2, y2, 0, 0);
    isDistanceValid(x1, y1, x2, y2);
}


solve(3, 0, 0, 4);
solve(2, 1, 1, 1);