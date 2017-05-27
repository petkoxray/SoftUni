function main(input) {
    let matrix = input.map(r => r.split(" ").map(Number));

    let firstSum = 0, secondSum = 0;


    for (let row = 0; row < matrix.length; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrix.length - row - 1];
    }

    if (firstSum !== secondSum) {
        console.log(matrix.map(r => r.join(' ')).join('\n'));
        return;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col || row + col === matrix.length - 1)
                continue;
            matrix[row][col] = firstSum;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

main([
   '1 2 3',
   '1 2 3',
   '1 3 4',
]);

main([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);