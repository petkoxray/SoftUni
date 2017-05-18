function main([str, substr]) {
    let realSubstr = str.substr(0,substr.length);
    if (realSubstr === substr) {
        console.log(true);
    } else {
        console.log(false);
    }
}

main([
    'How have you been?',
    'how'
]);

main([
    'Marketing Fundamentals, starting 19/10/2016',
    'Marketing Fundamentals, sta'
]);