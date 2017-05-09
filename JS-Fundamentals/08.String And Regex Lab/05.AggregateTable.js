function aggregate(input) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split('|').map(x => x.trim()).filter(x => x !== '');
        let town = data[0];
        sum += Number(data[1]);
        result.push(town);
    }

    console.log(result.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);