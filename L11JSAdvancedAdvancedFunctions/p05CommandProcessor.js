function solution() {
    let resultText = "";

    return {
        append: function (text) {
            resultText += text;
        },

        removeStart: function (conutLethers) {
            resultText = resultText.substring(conutLethers);
        },

        removeEnd: function (conutLethers) {
            resultText = resultText.substring(0, resultText.length - conutLethers);
        },

        print: function () {
            console.log(resultText);
        },
    };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

