function main(input) {
    let matrix = input.map(row => row.split(''));
    let cloneMatrix = input.map(x => x.toLowerCase()).map(row => row.split(''));

    for (let row = 0; row < cloneMatrix.length - 2; row++) {
        for (let col = 0; col < cloneMatrix[row].length - 2; col++) {
            let sign = cloneMatrix[row][col];
            if (sign === cloneMatrix[row][col + 2] &&
                sign === cloneMatrix[row + 1][col + 1] &&
                sign === cloneMatrix[row + 2][col] &&
                sign === cloneMatrix[row + 2][col + 2])
            {
                matrix[row][col] = '';
                matrix[row][col + 2] = '';
                matrix[row + 1][col + 1] = '';
                matrix[row + 2][col]  = '';
                matrix[row + 2][col + 2] = '';
            }
        }

    }
    let result = matrix.map(row => row.filter(x => x !== ''));
    for (let current of result) {
        console.log(current.join(''));
    }
}

main([
    "abnbjs",
    "xoBab",
    "Abmbh",
    "aabab",
    "ababvvvv"
]);