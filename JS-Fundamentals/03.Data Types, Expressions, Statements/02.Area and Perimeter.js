function calc([a, b]) {
    [a, b] = [a, b].map(Number);
    console.log(a * b);
    console.log(a + a + b + b);
}

calc([1,3])