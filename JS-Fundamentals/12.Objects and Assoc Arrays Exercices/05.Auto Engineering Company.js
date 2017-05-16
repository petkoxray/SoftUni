function solve(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i++) {
        let [brand, model, cars] = input[i].split(/ \| /);
        cars = Number(cars);

        if (!result.has(brand)) 
            result.set(brand, new Map());

        let oldCars = result.get(brand).get(model);
        if (oldCars)
            cars += oldCars;
            
        result.get(brand).set(model,cars);
    }

    for(let [brand, models] of result) {
        console.log(brand);
        for(let [model, price] of models) {
            console.log(`###${model} -> ${price}`);
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