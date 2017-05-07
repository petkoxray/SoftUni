function solve(array) {
    let number = Number(array[0]);

    for (let i = 1; i < array.length; i++) {
        number = cook(number, array[i]);
        console.log(number);
    }

    function cook(number, operation) {
        switch (operation) {
            case 'chop':
                return  number / 2;
            case 'spice':
                return ++number;
            case 'bake':
                return  number * 3;
            case 'fillet':
                return  number * 0.80;
            case 'dice':
                return  Math.sqrt(number);
            default:
                break;
        }
    }
}

solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);

s = 20;
