function main(input) {
    let userNamePattern = /(\*[A-Z][A-Za-z]*)(?=\s|\t|$)/g;
    let phonePattern = /(\+[0-9-]{10})(?=\s|\t|$)/g;
    let idPattern = /(![0-9a-zA-Z]+)(?=\s|\t|$)/g;
    let basePattern = /(_[0-9a-zA-Z]+)(?=\s|\t|$)/g;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let sentence = replaceAll(input[i]);
        result.push(sentence);
    }

    console.log(result.join('\n'));

    function replaceAll(input) {
        let replaced = input.replace(userNamePattern, s => "|".repeat(s.length));
        replaced = replaced.replace(phonePattern, s => "|".repeat(s.length));
        replaced = replaced.replace(idPattern, s => "|".repeat(s.length));
        replaced = replaced.replace(basePattern, s => "|".repeat(s.length));

        return replaced;
    }
}

main([
    'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]);


























