function solve([inches]) {
    feet = Math.floor(inches / 12);
    inches = Math.round(inches % 12);
    console.log(`${feet}'-${inches}"`)
}