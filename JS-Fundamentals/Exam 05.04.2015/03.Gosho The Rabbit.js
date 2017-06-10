function main(input) {
    let directions = input.shift().split(', ');
    let garden = input.map(r => r.split(', '));
    let result = {"{&}":0,"{*}":0,"{#}":0,"{!}":0,"wall hits":0};
    let gardenResult = [];
    let row = 0; let col = 0;
    for (let i = 0; i < directions.length; i++) {
        let direction = directions[i];
        let [currentRow, currentCol] = [row, col];
        if (direction === 'up')
            row--;
        else if (direction === 'down')
            row++;
        else if (direction === 'right')
            col++;
        else if (direction === 'left')
            col--;

        if (!isInsideGarden(row, col, garden)) {
            result['wall hits']++;
            row = currentRow;
            col = currentCol;
            continue;
        }

        let regex = /{!}|{\*}|{&}|{#}/g;
        let match = regex.exec(garden[row][col]);
        while (match) {
            result[match[0]]++;
            match = regex.exec(garden[row][col])
        }

        let cell = garden[row][col].replace(/{!}|{\*}|{&}|{#}/g, "@");
        gardenResult.push(cell);
    }

    let eatedVegetables = {
        "&":result['{&}'],
        "*":result['{*}'],
        "#":result['{#}'],
        "!":result['{!}'],
        "wall hits": result['wall hits']
    };
    console.log(JSON.stringify(eatedVegetables));

    if(gardenResult.length > 0)
        console.log(gardenResult.join('|'));
    else
        console.log('no');

    function isInsideGarden(row, col, garden) {
        return row >=0 && row < garden.length &&
                col >= 0 && col < garden[row].length;
    }

    function replaceVeg(matches) {
        console.log(matches);
    }
}

main([
    "right, up, up, down",
    "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj",
    "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip",
    "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"
]);

main([
    "up, right, left, down",
    "as{!}xnk"
]);