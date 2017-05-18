function main([str, delimiter]) {
    let result = str.split(delimiter);
    console.log(result.join('\n'));
}

main([
    'One-Two-Three-Four-Five',
    '-'
]);