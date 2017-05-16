function solve(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(/\s:\s/);
        let letter = product[0].toUpperCase();
        if (!result.has(letter))
            result.set(letter,new Map());
        result.get(letter).set(product, Number(price));
    }

    function abSort(a, b) {
        return a[0].localeCompare(b[0]);
    }

    let sortedArr = [...result].sort(abSort);
    for(let [key,val] of sortedArr) {
        console.log(key);
        for(let [name, price] of [...val].sort(abSort)) {
            console.log(`  ${name}: ${price}`);
        }
    }
}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);