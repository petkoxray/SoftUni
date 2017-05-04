function printNums([n]) {
    let num = Number(n);

    let result = `<ul>\n`;
    for (let i = 1; i <= num; i++) {
        let color = (i % 2 == 0) ? 'blue' : 'green';
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`
    }

    result += `</ul>\n`;
    console.log(result);
}
