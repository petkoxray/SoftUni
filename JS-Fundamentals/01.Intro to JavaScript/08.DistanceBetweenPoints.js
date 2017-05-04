function calculateDistance([x1, y1, x2, y2]) {
    let pointA = {x:Number(x1), y:Number(y1)};
    let pointB = {x:Number(x2), y:Number(y2)};
    let distance = Math.pow(pointA.x - pointB.x,2) + Math.pow(pointA.y - pointB.y,2);

    return Math.sqrt(distance);
}