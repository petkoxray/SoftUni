function solve(car) {
    let newCar = {};
    newCar.model = car.model;
    let power; let volume;

    if (car.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (car.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }

    newCar.engine = {power: power, volume: volume };
    newCar.carriage = {type: car.carriage, color: car.color};
    newCar.wheels = [];
    newCar.wheels.push(car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize);
    newCar.wheels.push(car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize);
    newCar.wheels.push(car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize);
    newCar.wheels.push(car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize);

    return newCar;
}