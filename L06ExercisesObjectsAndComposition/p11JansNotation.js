function parsePostfixNotation(instructions) {
    let stack = [];  // Това ще бъде нашия стек, в който ще съхраняваме числата

    for (let instruction of instructions) {
        if (typeof instruction === 'number') {
            // Ако инструкциите е число, го добавяме в стека
            stack.push(instruction);
        } else if (typeof instruction === 'string') {
            // Ако инструкциите е оператор (+, -, *, /), проверяваме дали имаме достатъчно операнди
            if (stack.length < 2) {
                // Ако няма достатъчно операнди, изписваме грешка
                console.log("Error: not enough operands!");
                return;
            }

            // Премахваме последните два елемента от стека
            let b = stack.pop();
            let a = stack.pop();

            // Изпълняваме операцията в зависимост от оператора
            let result;
            switch (instruction) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    console.log("Error: invalid operator!");
                    return;
            }

            // Добавяме резултата обратно в стека
            stack.push(result);
        } else {
            console.log("Error: invalid instruction!");
            return;
        }
    }

    // След като обработим всички инструкции, проверяваме дължината на стека
    if (stack.length === 1) {
        // Ако в стека има само едно число, това е резултатът
        console.log(stack[0]);
    } else {
        // Ако в стека има повече от едно число, значи има твърде много операнди
        console.log("Error: too many operands!");
    }
}

// Примери за използване
parsePostfixNotation([3, 4, '+']);  // Изход: 7
parsePostfixNotation([5, 3, 4, '*', '-']);  // Изход: -7
parsePostfixNotation([7, 33, 8, '-']);  // Изход: Error: too many operands!
parsePostfixNotation([15, '/']);  // Изход: Error: not enough operands!
