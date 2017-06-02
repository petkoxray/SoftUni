function solve([input]) {
    let words = input.split(/\W+/)
        .filter(x => x !== '')
        .map(x => x.trim())
        .map(x => x.toLowerCase());

    let result = new Map();

    for (let word of words) {
        if (!result.has(word))
            result.set(word,0);
        let current = result.get(word);
        result.set(word, ++current);
    }

    let sortedResult = [...result].sort();
    sortedResult.forEach((kvp) => console.log(`'${kvp[0]}' -> ${kvp[1]} times`));
}

solve([`JS devs use Node.js for server-side JS.-- JS for devs`]);




























