function main([str, substr]) {
    let realSubstr = str.substr(str.length - substr.length);
    if (realSubstr === substr)
        console.log(true);
    else
        console.log(false);
}

main([
    'This sentence ends with fun?',
    'fun?'
]);

main([
    'This is Houston, we have…',
    'We have…'
]);