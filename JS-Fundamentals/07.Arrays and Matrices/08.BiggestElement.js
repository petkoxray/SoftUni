function solve(array) {
    let matrix = array.map(r => r.split(' ').map(Number));
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach(n => biggestNum = Math.max(n,biggestNum)));

    console.log(biggestNum);
}

solve(['20 50 10',
 '8 33 145']
);