function solve(array) {
    let number = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        number = cook(number, array[i]);
        console.log(number);
    }

    function cook(number, operation) {
        switch (operation) {
            case 'chop':
                return number = number / 2;
            case 'spice':
                return ++number;
            case 'bake':
                return number = number * 3;
            case 'fillet':
                return number = number * 0.80;
            case 'dice':
                return number = Math.sqrt(number);
            default:
                break;
        }
    }
}

solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);

s = 20;
