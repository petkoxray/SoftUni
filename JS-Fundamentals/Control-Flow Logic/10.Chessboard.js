function chessboard(input) {
    let num = Number(input);
    let html = '<div class="chessboard">\n';
    for(let col = 1; col <= num; col++) {
        html += '   <div>\n'
        let color = (col % 2 == 0) ? 'black' : 'white';
        for(let row = 1; row <= num; row++) {
            if (color == 'black') {
                color = 'white';
                html += `       <span class="${color}"></span>\n`;
            }
            else {
                color = 'black';
                html += `       <span class="${color}"></span>\n`;
            }
        }
        html += `   </div>\n`
    }

    html += '</div>';

    console.log(html);
}

chessboard(3);