//firstSolution
function main(input) {
    let planes = new Set();
    let towns = {};
    for (let i = 0; i < input.length; i++) {
        let [planeId, town, passengers, action] = input[i].split(' ');
        passengers = Number(passengers);

        if (action === 'depart') {
            if (planes.has(planeId)) {
                planes.delete(planeId);
                if (!towns[town]) {
                    towns[town] = {
                        arrivals: 0,
                        departures: 0,
                        planesInTown: new Set()
                    };
                }
                towns[town].departures += passengers;
                towns[town].planesInTown.add(planeId);
            }
        } else {
            if (planes.has(planeId)) {
                continue;
            }
            planes.add(planeId);

            if (!towns[town]) {
                towns[town] = {
                    arrivals: 0,
                    departures: 0,
                    planesInTown: new Set()
                };
            }

            towns[town].arrivals += passengers;
            towns[town].planesInTown.add(planeId);
        }
    }

    console.log("Planes left:");
    [...planes].sort((a,b) => a.localeCompare(b))
        .forEach(p => console.log('- ' + p));

    let sortedTowns = Object.keys(towns).sort(sortTowns);
    for (let town of sortedTowns) {
        let planes = [...towns[town].planesInTown].sort((a, b) => a.localeCompare(b));
        console.log(town);
        console.log("Arrivals: " + towns[town].arrivals);
        console.log("Departures: " + towns[town].departures);
        console.log("Planes:");
        planes.forEach(p => console.log("-- " + p));
    }


    function sortTowns(a, b) {
        return towns[b].arrivals - towns[a].arrivals || a.localeCompare(b);
    }
}

main2([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);
console.log('\n');
main2([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
]);

//secondSolution

function main2(input) {
    let planes = new Set();
    let towns = new Map();
    for (let i = 0; i < input.length; i++) {
        let [planeId, town, passengers, action] = input[i].split(' ');
        passengers = Number(passengers);

        if (action === "depart") {
            if (planes.has(planeId)) {
                planes.delete(planeId);
                if (!towns.has(town)) {
                    towns.set(town, {arrivals: 0, departures: 0, planes: new Set()});
                }

                towns.get(town).departures += passengers;
                towns.get(town).planes.add(planeId);
            }
        } else {
            if (planes.has(planeId)) continue;
            planes.add(planeId);
            if (!towns.has(town)) {
                towns.set(town, {arrivals: 0, departures: 0, planes: new Set()});
            }

            towns.get(town).arrivals += passengers;
            towns.get(town).planes.add(planeId);
        }
    }

    console.log("Planes left:");
    [...planes].sort((a,b) => a.localeCompare(b))
        .forEach(p => console.log('- ' + p));

    let sortedTowns = [...towns].sort(sortTowns);

    for (let [key, value] of sortedTowns) {
        console.log(key);
        console.log("Arrivals: " + value.arrivals);
        console.log("Departures: " + value.departures);
        let planes = [...value.planes].sort((a, b) => a.localeCompare(b));
        planes.forEach(p => console.log("-- " + p));
    }

    function sortTowns(a, b) {
        return b[1].arrivals - a[1].arrivals || a[0].localeCompare(b[0]);
    }
}
