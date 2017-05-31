function solve(input) {
    let biggestNum = -Infinity;

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNum) {
            console.log(input[i]);
            biggestNum = input[i];
        }
    }
}

solve([1,
3,
8,
4,
10,
12,
3,
2,
24]);