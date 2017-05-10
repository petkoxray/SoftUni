function htmlEscape(input) {
    let html = `<ul>\n`;
    for (let i = 0; i < input.length; i++) {
        html += `   <li>`;
        input[i] = escape(input[i]);
        html += input[i] + `</li>\n`;
    }

    function escape(text) {
    text = text.replace(/&/g,'&amp;');
    text = text.replace(/</g,'&lt;');
    text = text.replace(/>/g,'&gt;');
    text = text.replace(/"/g, '&quot;');
    text = text.replace(/'/g, '&#39;');

    return text;       
}

html += `</ul>\n`;

console.log(html);

}

htmlEscape(['<b>unescaped text</b>', 'normal text']);

