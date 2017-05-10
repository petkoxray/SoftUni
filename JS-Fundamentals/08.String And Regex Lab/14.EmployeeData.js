function solve(input) {
    let regex = /^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([A-Za-z\s0-9-]+)$/;

    for(let str of input) {
        let match = regex.exec(str);
        if (match)
            console.log(`Name: ${match[1]}\n` +
            `Position: ${match[3]}\n` +
            `Salary: ${match[2]} `);
    }
}

solve(['Isacc - 1000 - CEO',
'Ivan - 500 - Employee',
'Peter - 500 - Employee']);