function calcArea([a, b, c]) {
    [a,b,c] = [a,b,c].map(Number);
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

console.log(calcArea([2,3.5,4]));