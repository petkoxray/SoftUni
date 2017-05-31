function solve(input) {
    let result = '';
    input.forEach(str => result += str);

    console.log(result.split('').reverse().join(''));
}

main(['I', 'am', 'student']);

function main(input) {
    input = input.join('').split('').reverse().join('');
    console.log(input);
}