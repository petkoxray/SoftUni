function solve(array) {
    let matrix = array.map(r => r.split(' ').map(Number));
    let sumFirst = 0;
    let sumSecond = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumFirst += matrix[i][i];
        sumSecond += matrix[i][matrix.length - 1 - i];
    }

    console.log(sumFirst + ' ' + sumSecond);
}

solve(['20 40',
 '10 60']
);