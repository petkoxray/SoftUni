function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(/[\s,/]+/);
        let name = args[0];
        let level = Number(args[1]);
        let items = args.slice(2);
        let obj = {name: name, level: level, items: items};
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

solve([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);

//solve(['Jake / 1000 / Gauss, HolidayGrenade']);







