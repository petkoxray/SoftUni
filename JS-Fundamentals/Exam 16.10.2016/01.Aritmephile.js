function solve(input) {
    input = input.map(Number);
    let maxMult = -Infinity;

    while (input.length > 0) {
        let count = input.shift();
        if (count >= 10 || count < 0)
            continue;

        let currentMult = 1;
        for (let i = 0; i < count; i++) {
            currentMult *= input[i];
        }

        if (currentMult > maxMult)
            maxMult = currentMult;
    }

    console.log(maxMult);
}

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);