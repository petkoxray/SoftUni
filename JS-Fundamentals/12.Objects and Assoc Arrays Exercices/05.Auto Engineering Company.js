function solve(input) {
    let cars = new Map();

    for (let i = 0; i < input.length; i++) {
        let [brand, model, quantity] = input[i].split(' | ');
        quantity = Number(quantity);

        if (!cars.has(brand)) {
            cars.set(brand, new Map);
        }

        if (!cars.get(brand).has(model)) {
            cars.get(brand).set(model, 0);
        }

        let currenQuantity = cars.get(brand).get(model);
        cars.get(brand).set(model, currenQuantity + quantity);
    }

    for (let [brand, models] of cars) {
        console.log(brand);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

solve([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10',
]);

















