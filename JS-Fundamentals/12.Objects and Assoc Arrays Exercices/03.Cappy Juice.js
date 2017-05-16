function solve(input) {
    let bottles = new Map();
    let fruits = {};
    for (let i = 0; i < input.length; i++) {
        let [name, quantity] = input[i].split(/\s=>\s/);
        if (!fruits[name]) fruits[name] = 0;
        fruits[name] += Number(quantity);

        if (fruits[name] >= 1000)
            bottles.set(name, parseInt(fruits[name] / 1000))
    }
    bottles.forEach((value, key) => console.log(`${key} => ${value}`));
}

solve([
'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'
]);