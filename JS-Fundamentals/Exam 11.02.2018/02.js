function main(map, words) {
    let matrix = map.map(r => r.split(' ').map(Number));
    words = words.map(s => s.split(' '));

    for (let i = 0; i < words.length; i++) {
        let type = words[i].shift();
        let index = Number(words[i].shift());

        if (type === 'breeze') {
            matrix[index] = matrix[index].map(e => {
                let res = e - 15;
                return res > 0 ? res : 0;
            });
        } else if (type === 'gale') {
            matrix.forEach(r => {
                let res = r[index] - 20;
                r[index] = res > 0 ? res : 0;
            });
        } else {
            matrix.forEach((r, i) => matrix[i] = r.map(c => c += index));
        }
    }

    let result = [];

    matrix.forEach((r, rowIndex) => r.forEach((col, colIndex) => {
        if (col >= 50)
            result.push(`[${rowIndex}-${colIndex}]`);
    }));

    if (result.length > 0)
        console.log("Polluted areas: " + result.join(", "));
    else
        console.log("No polluted areas");
}

main([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
],
    ["breeze 1", "gale 2", "smog 25"]
);