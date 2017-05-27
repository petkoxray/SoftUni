function main(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(' ');
        let model = args[0];
        let fuelType = args[1];
        let route = Number(args[2]);
        let luggage = Number(args[3]);
        let neededFuel = 0;
        let baseFuelConsumption = 10;

        if (fuelType === 'diesel')
            baseFuelConsumption *= 0.8;
        else if (fuelType === 'gas')
            baseFuelConsumption *= 1.2;

        baseFuelConsumption += luggage * 0.01;

        if (route === 1) {
            neededFuel = 110 * (baseFuelConsumption / 100);
            let extraFuelCons = 0.3 * baseFuelConsumption;
            extraFuelCons =  10*(extraFuelCons/100);
            neededFuel += extraFuelCons;
        } else {
            neededFuel = 95 * (baseFuelConsumption / 100);
            let extraFuelCons = 0.3 * baseFuelConsumption;
            extraFuelCons = 30 * (extraFuelCons/100);
            neededFuel += extraFuelCons;
        }

        let currentCar = {};
        currentCar['model'] = model;
        currentCar['fuel'] = fuelType;
        currentCar['route'] = route;
        currentCar['needFuel'] = Math.round(neededFuel);

        console.log(`${currentCar.model} ${currentCar.fuel} ${currentCar.route} ${currentCar.needFuel}`);

    }
}

main([
    'BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54']
);