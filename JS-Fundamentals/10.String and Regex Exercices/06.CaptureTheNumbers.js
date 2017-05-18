function main(input) {
    let numbers = [];
    let regex =/\d+/g;

    for(let line of input) {
        let match = regex.exec(line);
        while(match) {
            numbers.push(match[0]);
            match = regex.exec(line);
        }
    }

    console.log(numbers.join(" "));
}


main([
    '123a456',
    '789b987',
    '654c321',
    '0'
]);