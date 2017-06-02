function match(input) {
    let result = input.split(/\W+/g).filter(x => x !== '').join('|');

    console.log(result);
}

match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');