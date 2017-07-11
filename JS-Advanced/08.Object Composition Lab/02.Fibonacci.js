let fib = getFibonator();

function getFibonator() {
    let f1 = 0;
    let f2 = 1;

    return function () {
        let temp = f1 + f2;
        f1 = f2;
        f2 = temp;
        return f1;
    }
}

console.log(fib());
console.log(fib());
