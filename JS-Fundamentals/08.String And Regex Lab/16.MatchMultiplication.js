function solve(text) {
    let match = text.match(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g);
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
    (match, num1, num2) => Number(num1) * Number(num2));
  console.log(text);
  console.log(match);
}


solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');