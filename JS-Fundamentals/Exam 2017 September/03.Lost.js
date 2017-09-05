function main(arg, text) {
    let regex = /(east|north)(?:.*?|\n|\t)([0-9]{2})(?:.*?|\n|\t),(?:.*?|\n|\t)([0-9]{6})/mig;
    let match = regex.exec(text);
    let lastMatchLatitude = '';
    let lastMatchlongtitude = '';
    while (match) {
        if (match[1].toLowerCase() === 'east')
            lastMatchlongtitude = match;
        else
            lastMatchLatitude = match;

        match = regex.exec(text)
    }

    console.log(lastMatchLatitude[2] + '.' + lastMatchLatitude[3] + ' N');
    console.log(lastMatchlongtitude[2] + '.' +  lastMatchlongtitude[3] + ' E');
    let firstIndex = text.indexOf(arg);
    text = text.substr(firstIndex + arg.length);
    let secondIndex = text.indexOf(arg);
    text = text.substr(0, secondIndex);
    console.log('Message: ' + text);
}

main(`4ds`,
`eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532`
);