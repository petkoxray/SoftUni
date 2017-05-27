function spiralMatrix(rows, cols) {
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
    }

    let starRow = 0, endRow = rows - 1, startCol = 0, endCol = cols - 1;
    let number = 1;

    while (starRow <= endRow || startCol <= endCol) {

        for (let col = startCol; col <= endCol; col++) {
            matrix[starRow][col] = number++;
        }

        for (let row = starRow + 1; row <= endRow; row++) {
            matrix[row][endCol] = number++;
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            matrix[endRow][col] = number++;
        }

        for (let row = endRow - 1; row > starRow; row--) {
            matrix[row][startCol] = number++;
        }

        startCol++;
        starRow++;
        endRow--;
        endCol--;
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}
spiralMatrix(5, 5);

