function main(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (Number.isInteger(input[i])) {
            result.push(input[i]);
            continue;
        }

        if (result.length < 2) {
            console.log("Error: not enough operands!");
            return;
        }

        let second = result.pop();
        let first = result.pop();

        if (input[i] === '-')
            result.push(first - second);
        if (input[i] === '+')
            result.push(first + second);
        if (input[i] === '/')
            result.push(first / second);
        if (input[i] === '*')
            result.push(first * second);
    }

    if (result.length === 1)
        console.log(result[0]);
    else
        console.log("Error: too many operands! ");
}

main([5,
    3,
    4,
    '*',
    '-']
);

console.log('--------------');

main([31,
    2,
    '+',
    11,
    '/']
);