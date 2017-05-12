function solve(array) {
    let matrix = array.map(r => r.split(' ').map(Number));
    let sum = matrix[0].reduce((total,val) => total + val);

    for (let i = 1; i < matrix.length; i++) {
        let currentSumRow = matrix[i].reduce((total,val) => total + val);
        if (currentSumRow !== sum)
            return false;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let currentSumCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentSumCol += matrix[i][j];
        }

        if (currentSumCol !== sum)
            return false;
    }

    return true;
}

console.log(solve(['4 5 6',
'6 5 4',
'5 5 5']
));

console.log(solve(['11 32 45',
'21 0 1',
'21 1 1']
));