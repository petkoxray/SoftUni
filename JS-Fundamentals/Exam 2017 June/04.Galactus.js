function main(input) {
    let systems = new Map();

    for (let i = 0; i < input.length; i++) {
        let obj = input[i];

        if (!systems.has(obj.system)) {
            systems.set(obj.system, new Map());
        }

        let currentSystem = systems.get(obj.system);

        if (!currentSystem.has(obj.candidate)) {
            currentSystem.set(obj.candidate, 0);
        }

        let currentVotes = currentSystem.get(obj.candidate);
        currentSystem.set(obj.candidate, currentVotes + obj.votes);
    }

    let formattedSystems = new Map();
    let totalVotes = 0;
    for (let system of systems) {
        let sortedSystem = [...system[1]].sort(sortCandidates);
        let systemName = system[0];
        let systemCandidateWinner = sortedSystem[0][0];
        let systemVotes = 0;

        for (let current of sortedSystem) {
            systemVotes += current[1];
        }

        formattedSystems.set(systemName, {});
        formattedSystems.get(systemName)['votes']  = systemVotes;
        formattedSystems.get(systemName)['candidate']  = systemCandidateWinner;

        totalVotes+=systemVotes;
    }

    let final = [...formattedSystems].sort(sortFormattedSystems);
    let winners = new Map();

    for (let system of final) {
        if (!winners.has(system[1]['candidate'])) {
            winners.set(system[1]['candidate'], 0);
        }

        let currentVotes = winners.get(system[1]['candidate']);
        winners.set(system[1]['candidate'], currentVotes + system[1]['votes']);
    }

    if ([...winners][0][1] > totalVotes / 2) {
        console.log([...winners][0][0] + " wins with " + [...winners][0][1] + " votes");
        if (winners.size > 1) {
            console.log("Runner up: " + [...winners][1][0]);
            for (let system of final) {
                if (system[1]['candidate'] === [...winners][1][0]) {
                    console.log(system[0] + ": " + system[1]['votes']);
                }
            }
        } else {
            console.log([...winners][0][0] + " wins unopposed!");
        }
    }


    function sortCandidates(a, b) {
        return b[1] - a[1];
    }

    function sortFormattedSystems(a, b) {
        return b[1]['votes'] - a[1]['votes'];
    }
}

main([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 } ]);

console.log('-------------');
console.log('--------------');

main([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 } ]);