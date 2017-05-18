function main(input) {
    let arr = input[0].split(' ');
    arr = arr.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());

    console.log(arr.join(' '));
}

main([
    'Was that Easy? tRY thIs onE for SiZe!'
]);