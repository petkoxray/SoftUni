function main(input) {
    const regex = /[.]*\*[.]*/g;
    const sortCriteria = input.pop();
    let result = {};

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(regex);
        let owner = args[0];
        let luggage = args[1];
        let isFood = args[2];
        let isDrink = args[3];
        let isFragile = args[4] == 'true';
        let weight = Number(args[5]);
        let transfered = args[6];
        let type = 'other';

        if (isFood == 'true')
            type = 'food';
        if (isDrink == 'true')
            type = 'drink';

        if (!result[owner])
            result[owner] = {};

        result[owner][luggage] = {
            kg: weight,
            fragile: isFragile,
            type: type,
            transferredWith: transfered
        }
    }

}

main([
    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
    'strict'
]);