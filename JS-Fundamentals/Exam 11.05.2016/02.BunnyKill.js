function main(input) {
    let coordinates = input.pop().split(' ');
    let field = input.map(r => r.split(' ').map(Number));
    let snowBallDamage = 0;
    let bunnyKills = 0;

    for (let i = 0; i < coordinates.length; i++) {
        [row, col] = coordinates[i].split(',').map(Number);
        let damage = field[row][col];

        if (isInMatrix(field, row - 1, col - 1))
            field[row -1][col - 1] -= damage;
        if (isInMatrix(field, row - 1, col))
            field[row - 1][col] -= damage;
        if (isInMatrix(field, row - 1, col + 1))
            field[row - 1][col + 1] -= damage;
        if (isInMatrix(field, row, col - 1))
            field[row][col-1] -= damage;
        if (isInMatrix(field, row, col + 1))
            field[row][col+1] -= damage;
        if (isInMatrix(field, row + 1, col - 1))
            field[row + 1][col - 1] -= damage;
        if (isInMatrix(field, row + 1, col))
            field[row + 1][col] -= damage;
        if (isInMatrix(field, row + 1, col + 1))
            field[row + 1][col + 1] -= damage;

    }

    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[row].length; col++) {
            let currentBunny = field[row][col];
            if (currentBunny > 0) {
                snowBallDamage += currentBunny;
                bunnyKills++;
            }
        }
    }

    function isInMatrix(field, row, col) {
        if (row >= 0 &&
            row < field.length  && col >= 0 && col < field[row].length &&
        field[row][col] > 0) {
            return true;
        }
        return false;
    }

    console.log(snowBallDamage);
    console.log(bunnyKills);

}

main([
    "10 10 10",
    "10 10 10",
    "10 10 10",
    "0,0"
]);

main([
    "5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1"
]);