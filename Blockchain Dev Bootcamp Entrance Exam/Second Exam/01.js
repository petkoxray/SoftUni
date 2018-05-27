function main(input) {
    let teams = Number(input.shift());
    let dhv = Number(input.shift());
    let sum = 0;

    for (let index = 0; index < teams; index++) {
        let [dragonHatched, teamCount] = input[index].split(" ").map(Number);
        sum += dragonHatched / teamCount;
    }

    if (dhv === 0) {
        console.log(sum.toFixed(3));
    } else {
        let result = (sum / dhv).toFixed(3);
        console.log(result);
    }
}

main([
    '4',
    '4',
    '2000 10',
    '1000 5',
    '5000 2000',
    '3000 30'
]);