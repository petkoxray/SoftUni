function solve(text, words) {
    for(let word of words) {
        let replaced = '-'.repeat(word.length);
        while (text.indexOf(word) !== -1) {
            text = text.replace(word,replaced);
        }
    }

    console.log(text);
}

solve('roses are red, violets are blue', [', violets are', 'red']);