function solve(input) {
    let result = [];

    for (let i = 1; i < input.length; i++) {
        let data = input[i].split(/[\s\|]+/).filter(x => x !== '');
        let obj = {};
        obj['Town'] = data[0];
        obj['Latitude'] = Number(data[1]);
        obj['Longitude'] = Number(data[2]);
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);