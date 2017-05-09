function extract(input) {
    let text = input[0];
    let result = [];
    let start = text.indexOf('(');
    let end = text.indexOf(')',start);

    while (start !== -1 && end !== -1) {
        result.push(text.substring(start + 1, end));
        start = end; end = start + 1;
        start = text.indexOf('(',end);
        end = text.indexOf(')',start);
    }

    console.log(result.join(', '));
}

extract(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);