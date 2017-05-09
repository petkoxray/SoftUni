function print(input) {
    let str = input[0];

    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}

print(['Hello, World!']);   