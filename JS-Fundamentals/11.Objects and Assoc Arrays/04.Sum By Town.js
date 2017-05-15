function solve(input) {
    let result = {};

    for (let i = 0; i < input.length; i+=2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if (result[town]) {
            result[town] += income;
        } else {
            result[town] = income;
        }
    }

    console.log(JSON.stringify(result));
}

solve(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4'
]);