function solve(input) {
    let result = '';
    input.forEach(str => result += str);

    console.log(result.split('').reverse().join(''));
}

solve(['I', 'am', 'student']);