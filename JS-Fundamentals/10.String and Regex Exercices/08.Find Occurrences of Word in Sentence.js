function main(sentence, word) {
    let stringPattern = '\\b' + word + '\\b';
    let pattern = new RegExp(stringPattern, 'gi');
    let match = pattern.exec(sentence);
    let count = 0;
    while (match) {
        count++;
        match = pattern.exec(sentence);
    }

    console.log(count);
}


main('How do you plan on achieving that? How? How can you even think of that?', 'how');