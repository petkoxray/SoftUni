function main([str]) {
    let regex = /\b_[A-Za-z0-9]+\b/g;
    let match = regex.exec(str);
    let result = [];

    while (match) {
        let variable = match[0].substr(1);
        result.push(variable);
        match = regex.exec(str);
    }

    console.log(result.join(','));
}

main([
   '__invalidVariable _evenMoreInvalidVariable_ _validVariable'
]);
main([
    'Calculate the _area of the _perfectRectangle object.'
]);