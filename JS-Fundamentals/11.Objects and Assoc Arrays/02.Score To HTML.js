function solve(input) {
    let data = JSON.parse(input[0]);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    for (let i = 0; i < data.length; i++) {
        let name = escape(data[i].name);
        let score = data[i].score;

        html += `  <tr><td>${name}</td><td>${score}</td></tr>\n`;
    }

    html += `</table>\n`;
    console.log(html);

    function escape(text) {
        text = text.replace(/&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');
        text = text.replace(/'/g, '&#39;');

        return text;
    }
}

solve(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);