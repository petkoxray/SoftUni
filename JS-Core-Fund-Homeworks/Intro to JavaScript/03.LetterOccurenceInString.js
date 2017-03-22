function letterOccurence(input) {
    let str = input[0];
    let letter = input[1];
    let count = 0;

    for(let l of str) {
        if(l == letter)
            count++;
    }

    return count;
}

console.log(letterOccurence(['hello', 'l']));
