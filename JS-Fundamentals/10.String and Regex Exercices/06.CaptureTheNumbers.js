function main(input) {
    let pattern = /[0-9]+/g;
    let result = [];

    for (let current of input) {
        let match = pattern.exec(current);
        while (match) {
            result.push(match[0]);
            match = pattern.exec(current);
        }
    }

    console.log(result.join(' '));
}


main([
    '123a456',
    '789b987',
    '654c321',
    '0'
]);