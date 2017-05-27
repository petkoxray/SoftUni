function main(input) {
    input = input.map(Number)
        .map(Math.floor)
        .filter(x => x > 10);
    let html = `<table border="1">\n`;
    html += "<thead>\n";
    html += `<tr><th colspan="3">Blades</th></tr>\n`;
    html += `<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n`;
    html += "</thead>\n<tbody>\n";

    for (let length of input) {
        html += `<tr><td>${length}</td>`;
        let blade = '';
        let type = length > 40 ? 'sword' : 'dagger';
            html += `<td>${type}</td>`;

        switch (length % 5) {
            case 0: blade = '*rap-poker'; break;
            case 1: blade = 'blade'; break;
            case 2: blade = 'quite a blade'; break;
            case 3: blade = 'pants-scraper'; break;
            case 4: blade = 'frog-butcher'; break;
        }
        html += `<td>${blade}</td></tr>\n`;
    }

    html += `</tbody>\n</table>\n`;
    console.log(html);
}

main([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);