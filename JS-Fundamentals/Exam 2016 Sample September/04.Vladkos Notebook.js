function main(input) {
    let sheets = new Map();

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split('|');

        let color = args[0];
        if (!sheets.has(color)) {
            sheets.set(color, new Map());
            sheets.get(color).set("wins", 1);
            sheets.get(color).set("losses", 1);
            sheets.get(color).set("age", 0);
            sheets.get(color).set("name", "");
            sheets.get(color).set("opponents", []);
        }

        switch(args[1]) {
            case 'age':
                sheets.get(color).set('age', args[2]);
                break;
            case 'name':
                sheets.get(color).set('name', args[2]);
                break;
            case 'win':
                let wins = sheets.get(color).get('wins') + 1;
                sheets.get(color).set('wins', wins);
                sheets.get(color).get('opponents').push(args[2]);
                break;
            case 'loss':
                let looses = sheets.get(color).get('losses') + 1;
                sheets.get(color).set('losses', looses);
                sheets.get(color).get('opponents').push(args[2]);
                break;
        }
    }

    for (let [key, value] of sheets) {
        if (!value.get('name') || !value.get('age')) {
            sheets.delete(key);
            continue;
        }

        let rank = value.get('wins') / value.get('losses');
        rank = rank.toFixed(2);
        value.delete('wins');
        value.delete('losses');
        value.set('rank', rank);
        value.get('opponents').sort();
    }

    let finalResult = [...sheets.entries()].sort((el1, el2) => el1[0].localeCompare(el2[0]));
    let resultObj = {};

    for (let [key, value] of finalResult) {
        resultObj[key] = {};
        for (let [k, v] of value) {
            resultObj[key][k] = v;
        }
    }

    console.log(JSON.stringify(resultObj));
}

main([
    "purple|age|99",
    "red|age|44",
    "blue|win|pesho",
    "blue|win|mariya",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Yana",
    "purple|loss|Yana",
    "purple|loss|Manov",
    "purple|loss|Manov",
    "red|name|gosho",
    "blue|win|Vladko",
    "purple|loss|Yana",
    "purple|name|VladoKaramfilov",
    "blue|age|21",
    "blue|loss|Pesho"
]);