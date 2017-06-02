function main(input) {
    let result = input.split(' ').map(x => x[0] = x[0].toUpperCase() + x.substring(1).toLowerCase());
    console.log(result.join(' '));
}

main('Was that Easy? tRY thIs onE for SiZe!');