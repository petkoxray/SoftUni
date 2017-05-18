function main([sentence, word]) {
    let regex = new RegExp(`\\b` + word + `\\b`, 'gi');
    let match = regex.exec(sentence);
    let count = 0;

    while (match) {
        count++;
        match = regex.exec(sentence);
    }
    console.log(count);
}

main([
    'How do you plan on achieving that? How? How can you even think of that?',
    'how'
]);