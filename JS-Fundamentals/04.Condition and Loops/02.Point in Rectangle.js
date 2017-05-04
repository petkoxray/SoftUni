function pointInRect([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number);
    let isInsideX = x >= xMin && x <= xMax;
    let isInsideY = y >= yMin && y <= yMax;

    if (isInsideX && isInsideY)
        console.log('inside');
    else
        console.log('outside');
}