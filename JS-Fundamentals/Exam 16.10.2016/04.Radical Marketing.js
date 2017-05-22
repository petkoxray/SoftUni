function main(input) {
    class Player {
        constructor(subscribers, followers) {
            this.subscribers = subscribers;
            this.followers = followers;
        }
    }

    let players = new Map();

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split('-');
        if (args.length === 1) {
            if (players.has(args[0])) continue;
            let currentPlayer = new Player(subscribers = new Set(), followers = new Set());
            players.set(args[0], currentPlayer);
        } else {
            if(args[0] === args[1] || !players.has(args[0])  || !players.has(args[1]))
                continue;
            players.get(args[0]).subscribers.add(args[1]);
            players.get(args[1]).followers.add(args[0]);
        }
    }
    let sortedPlayers = [...players].sort(sortPlayers);
    console.log(sortedPlayers[0][0]);
    let count = 1;
    for (let follower of sortedPlayers[0][1].followers) {
        console.log(count + '. ' + follower);
        count++;
    }

    function sortPlayers(a, b) {
        return b[1].followers.size - a[1].followers.size ||
            b[1].subscribers.size - a[1].subscribers.size;
    }

}

main([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);

main([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B-A',
    'C-A',
    'D-A'
]);