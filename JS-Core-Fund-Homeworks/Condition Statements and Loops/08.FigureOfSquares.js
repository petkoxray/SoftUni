function solve([n]) {
    n = Number(n);
    let lines = (n % 2 == 0) ? n - 1 : n;
    let firstLine = '+' + '-'.repeat(n - 2) + '+' + '-'.repeat(n - 2) + '+';
    let line = '|' + ' '.repeat(n - 2) + '|' + ' '.repeat(n - 2) + '|';

    console.log(firstLine);

    for(let i = 1; i <= (lines - 2) / 2; i++) {
        console.log(line);
    }
    
    console.log(firstLine);

    for(let i = 1; i <= (lines - 2) / 2; i++) {
        console.log(line);
    }

    console.log(firstLine);
}

solve([6]);