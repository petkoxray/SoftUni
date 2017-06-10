function main(input) {
    let n = Number(input.pop());
    let matrix = input.map(r => r.split(' '));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (checkMatrix(row, col, n, matrix)) {
                matrix = filterMatrix(row, col, matrix, n);
            }
        }
    }

    for (let rowcol of matrix) {
        rowcol = rowcol.filter(x => x !== '');
        if (rowcol.length === 0) {
            console.log('(empty)');
        } else {
            console.log(rowcol.join(' '));
        }
    }

    function checkMatrix(row, col, n, matrix) {
        let currentElement = matrix[row][col];
        col++;
        for (let i = 0; i < n - 1; i++) {
            if (col >= matrix[row].length) {
                row++;
                col = 0;
            }

            if (row >= matrix.length) {
                return false;
            }

            if (currentElement !== matrix[row][col])
                return false;
            col++;
        }

        return true;
    }

    function filterMatrix(row, col, matrix, n) {
        matrix[row][col] = '';
        for (let i = 0; i < n - 1; i++) {
            col++;
            if (col >= matrix[row].length) {
                row++;
                col = 0;
            }
            matrix[row][col] = '';
        }

        return matrix;
    }
}

main([
    "3 3 3 2 5 9 9 9 9 1 2",
    "1 1 1 1 1 2 5 8 1 1 7",
    "7 7 1 2 3 5 7 4 4 1 2",
    "2"
]);

main([
    "2 1 1 1",
    "1 1 1",
    "3 7 3 3 1",
    "2"
]);