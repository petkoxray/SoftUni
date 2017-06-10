function main(input) {
    let message = input.shift();
    let magicNumber = Number(input.shift());
    let matrix = input.map(r => r.split(' ').map(Number));
    let key = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let num = matrix[row][col];
            let result = check(row, col + 1, num, matrix, magicNumber);
            if (result) {
                key = result[0] + result[1] + row + col;
                break;
            }
        }
    }

    let decryptedText = "";
    for (let i = 0; i < message.length; i++) {
        let char = message.charCodeAt(i);
        if (i % 2 === 0) {
            char += key;
        } else {
            char -= key;
        }
        decryptedText = decryptedText.concat(String.fromCharCode(char));
    }

    console.log(decryptedText);

    function check(row, col, num, matrix, magicNumber) {
        for (let i = row; i < matrix.length; i++) {
            for (let j = col; j < matrix[i].length; j++) {
                if ((matrix[i][j] + num) === magicNumber)
                    return [i, j];
            }
            col = 0;
        }
    }
}

main([
    "QqdvSpg",
    "400",
    "100 200 120",
    "120 300 310",
    "150 290 370"
]);