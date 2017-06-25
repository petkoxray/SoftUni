function main(input) {
    function reduce(input, func) {
        let result = input[0];
        for (let current of input.slice(1)) {
            result = func(result, current);
        }

        return result;
    }

    console.log("Sum = " + reduce(input, (a, b) => a + b));
    console.log("Min = " + reduce(input, (a, b) => Math.min(a, b)));
    console.log("Max = " + reduce(input, (a, b) => Math.max(a, b)));
    console.log("Product = " + reduce(input, (a, b) => a * b));
    console.log("Join = " + reduce(input, (a, b) => "" + a + b));
}

main([2,3,10,5]);