function solve(input) {
    let args = input.map(s => JSON.parse(s));
    let html = '<table>\n';

    for(let person of args) {
        html += '  <tr>\n';
        html += `   <td>${escape(person.name)}</td>\n`;
        html += `   <td>${escape(person.position)}</td>\n`;
        html += `   <td>${person.salary}</td>\n`;
        html += '  <tr>\n';
    }

    html += '</table>\n';
    console.log(html);

    function escape(text) {
        text = text.replace(/&/g,'&amp;');
        text = text.replace(/</g,'&lt;');
        text = text.replace(/>/g,'&gt;');
        text = text.replace(/"/g, '&quot;');
        text = text.replace(/'/g, '&#39;');

        return text;       
    }
}

solve([
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);