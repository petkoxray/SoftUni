function main(input) {
    let templateMatrixLength = input.shift();

    let templateMatrix = [];
    for (let i = 0; i < templateMatrixLength; i++) {
        templateMatrix.push(input.shift().split(" ").map(Number));
    }

    let encodedMatrix = [];
    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(" ").map(Number);
        encodedMatrix.push(row);
    }

    let message = '';

    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[row].length; col++) {
            let char = encodedMatrix[row][col] + templateMatrix[row % templateMatrixLength][col % templateMatrix[1].length];
            message += String.fromCharCode((char % 27) + 64);
        }
    }

    console.log(message.replace(/@+/g, " "));
}

main([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);

main([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);