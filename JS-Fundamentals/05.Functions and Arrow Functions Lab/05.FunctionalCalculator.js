function solve([num1, num2, operand]) {
    [num1, num2] = [num1, num2].map(Number);

    switch(operand) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}
