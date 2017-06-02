function main(input) {
    let pattern = /\b_([A-Za-z0-9]+)\b/g;
    let match = pattern.exec(input);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = pattern.exec(input);
    }

    console.log(result.join(','));
}

main('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
main('Calculate the _area of the _perfectRectangle object.');