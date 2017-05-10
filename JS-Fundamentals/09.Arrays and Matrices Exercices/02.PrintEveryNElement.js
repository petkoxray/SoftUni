function solve(input) {
    let n = input.pop();
    for (let i = 0; i < input.length; i+=n) {
        console.log(input[i]);
    }
}

solve([1,2,3,4,5,6]);