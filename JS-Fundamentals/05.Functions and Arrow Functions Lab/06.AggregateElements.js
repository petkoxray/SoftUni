function solve(arr) {
    let sum = arr.reduce((total, element) => total + element);
    let sumInverse = arr.map(a => 1 / a)
        .reduce((total, element) => total + element);
    let concat = arr.reduce((total, element) => total + element.toString());
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

solve([2, 4, 8, 16]);