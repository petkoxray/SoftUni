let manager = (function () {
    let microElements = {protein: 0, carbohydrate:0, fat: 0, flavour: 0};
    let meals = {
        apple: {carbohydrate:1, flavour:2},
        burger: {carbohydrate: 5, fat:7, flavour: 3},
        coke: {carbohydrate:10, flavour:20},
        omelet: {protein:5,fat:1,flavour:1},
        cheverme: {protein:10,carbohydrate:10,fat:10,flavour:10}
    };
    return function (input) {
        let args = input.split(' ');

        if (args[0] === 'restock') {
            microElements[args[1]] += Number(args[2]);
            return 'Success';
        } else if(args[0] === 'report') {
            return `protein=${microElements['protein']} carbohydrate=${microElements['carbohydrate']} fat=${microElements['fat']} flavour=${microElements['flavour']}`;
        } else {
            let meal = args[1];
            let qty = Number(args[2]);
            for (let element in meals[meal]) {
                if (meals[meal][element] > microElements[element] * qty ) {
                    return `Error: not enough ${element} in stock`;
                }
            }

            for (let element in meals[meal])
                microElements[element] -= meals[meal][element] * qty;
            return 'Success';
        }
    }
})();

manager("prepare cheverme 1");
manager("restock protein 10");
manager("prepare cheverme 1");
manager("restock carbohydrate 10");
manager("prepare cheverme 1");
manager("restock fat 10");
manager("prepare cheverme 1");
manager("restock flavour 10");
manager("prepare cheverme 1");
manager("report");









