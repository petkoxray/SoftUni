function calcDistance([speed1,speed2,time]) {
    [speed1,speed2,time] = [speed1,speed2,time].map(Number);
    let first = (speed1 * 1000) * (time / 60 / 60);
    let second = (speed2 * 1000) * (time / 60 / 60);
    let distance = Math.abs(first - second);
    
    console.log(distance);
}

calcDistance([5, -5, 40]);