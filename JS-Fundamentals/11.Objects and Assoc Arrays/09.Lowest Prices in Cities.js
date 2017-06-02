function solve(input) {
    let products = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i]
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim());
        price = Number(price);

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, price);
    }

    for (let [name, towns] of products) {
        let result = name + ' -> ';
        let townName = '';
        let lowestPrice = +Infinity;
        for (let [town, price] of towns) {
            if (price < lowestPrice){
                lowestPrice = price;
                townName = town;
            }
        }
        result += lowestPrice.toString() + ` (${townName})`;
        console.log(result);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);