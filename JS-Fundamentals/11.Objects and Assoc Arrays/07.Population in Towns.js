function solve(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, population] = input[i].split(/\s*<->\s*/);
        if (result.has(town))
            result.set(town, result.get(town) + Number(population));
        else
            result.set(town, Number(population));
    }

    result.forEach((value, key) => console.log(key + ' : ' + value));
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]);

solve([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
]);