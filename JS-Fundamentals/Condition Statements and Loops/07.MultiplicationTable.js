function multTable([num]) {
    n = Number(num);
    let html = '<table border="1"\n';
    html += ' <tr><th>x</th>'

    for(let firstCol = 1; firstCol <=n; firstCol++) {
            html += `<th>${firstCol}</th>`
    }

    html += '</tr>\n'

    for(let col = 1; col <= n; col++) {
        html += ` <tr><th>${col}</th>`;
        for(let row = col; row <= n * col; row+=col) {
            html += `<td>${row}</td>`
        }
        html += '</tr>\n'
    }

    html += '</table>';
    console.log(html);
}

multTable([5]);