function solve([speed, area]) {
    speed = Number(speed);

    switch(area) {
        case 'motorway': checkSpeed([speed, 130]);
            break;
        case 'interstate': checkSpeed([speed, 90]);
            break;
        case 'city': checkSpeed([speed, 50]);
            break;
        case 'residential': checkSpeed([speed, 20]);
            break;
    }

    function checkSpeed([speed, limit]) {
        let diff = speed - limit;

        if (diff <= 0)
            return;
        else if (diff <= 20)
            console.log('speeding');
        else if (diff <= 40)
            console.log('excessive speeding');
        else if (diff > 40)
            console.log('reckless driving');
    }
}

solve([200, 'motorway']);