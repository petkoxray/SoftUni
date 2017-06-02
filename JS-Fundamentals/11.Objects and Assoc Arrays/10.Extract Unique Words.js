function solve(input) {
    let result = new Set();
    for (let sentence of input) {
        sentence = sentence.split(/\W+/).filter(x => x !== '').map(x => x.toLowerCase());
        for (let word of sentence) {
            result.add(word);
        }
    }

    console.log([...result].join(', '));
}

solve([`Far too slow, you're far too slow.`]);
