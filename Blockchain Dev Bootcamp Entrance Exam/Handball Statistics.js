function main(arr) {
    let index = 0;
    let teamWins = new Map();

    while (arr[index] !== "stop") {
        let input = arr[index].split("|").map(t => t.trim());
        let teamOne = input[0];
        let teamTwo = input[1];
        let resultOne = input[2].split(":").map(Number);
        let resultTwo = input[3].split(":").map(Number);
        let teamOnePoints = resultOne[0] + resultTwo[1];
        let teamTwoPoints = resultOne[1] + resultTwo[0];

        if (!teamWins.has(teamOne)) {
            teamWins.set(teamOne, {
                wins: 0,
                opponents: new Set()
            });
        }

        if (!teamWins.has(teamTwo)) {
            teamWins.set(teamTwo, {
                wins: 0,
                opponents: new Set()
            });
        }

        let teamTwoInMap = teamWins.get(teamTwo);
        teamTwoInMap['opponents'].add(teamOne);
        let teamOneInMap = teamWins.get(teamOne);
        teamOneInMap['opponents'].add(teamTwo);

        if (teamOnePoints > teamTwoPoints) {
            teamOneInMap['wins'] = ++teamOneInMap['wins'];
        } else if (teamTwoPoints > teamOnePoints) {
            teamTwoInMap['wins'] = ++teamTwoInMap['wins'];
        } else {
            if (resultOne[1] > resultTwo[0]) {
                teamTwoInMap['wins'] = ++teamTwoInMap['wins'];
            } else {
                teamOneInMap['wins'] = ++teamOneInMap['wins'];
            }
        }
        index++;
    }
    let result = [...teamWins.entries()].sort((teamOne, teamTwo) => {
        return teamTwo[1]['wins'] - teamOne[1]['wins'] ||
            teamOne[0].localeCompare(teamTwo[0]);
    });

    for (let [name, values] of result) {
        let team = teamWins.get(name);
        console.log(name);
        console.log("- Wins: " + team['wins']);
        let opponents = [...team['opponents']].sort((a, b) =>  a.localeCompare(b));
        console.log("- Opponents: " + opponents.join(", "));
    }
}

main([
    "Denmark | Belgium | 0:0 | 1:1",
    "Belgium | Austria | 2:0 | 0:2",
    "Latvia | Monaco | 2:0 | 0:0",
    "Bulgaria | Italy | 2:1 | 3:2",
    "stop"
]);