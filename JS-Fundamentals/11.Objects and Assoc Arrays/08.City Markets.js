function solve(input) {
    let towns = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, product, quantity, price] = input[i].split(/:|->/).map(x => x.trim());
        let income = Number(quantity) * Number(price);

        if (!towns.has(town))
            towns.set(town, new Map());

        let oldIncome = towns.get(town).get(product);
        if (oldIncome) 
            income += oldIncome;
        towns.get(town).set(product,income);
    }

    for(let [town, products] of towns) {
        console.log('Town - ' + town);
        for(let [product, income] of products) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);