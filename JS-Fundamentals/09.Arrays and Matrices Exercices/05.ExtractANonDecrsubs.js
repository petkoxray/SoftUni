function solve(input) {
    input = input.map(Number);
    let result = []; biggestNum = input[0];
    result.push(biggestNum);

    for (let i = 1; i < input.length; i++) {
        if (biggestNum < input[i]) {
            result.push(input[i]);
            biggestNum = input[i];
        }            
    }

    console.log(result.join('\n'));
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