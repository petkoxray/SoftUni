function rounding([number,round]) {
    [number,round] = [number,round].map(Number);
    let denominator = Math.pow(10,round);
    console.log(Math.round(number * denominator) / denominator);
}

rounding([2.1,5]);