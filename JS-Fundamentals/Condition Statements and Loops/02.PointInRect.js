function solve([x, y, xMin, xMax, yMin, yMax ]) {
    [x, y, xMin, xMax, yMin, yMax ] = [x, y, xMin, xMax, yMin, yMax ].map(Number);
    let isInsideX = x >= xMin && x <= xMax;
    let isInsideY = y >= yMin && y <= yMax;
    console.log((isInsideX && isInsideY) ? 'inside' : 'outside');
}
