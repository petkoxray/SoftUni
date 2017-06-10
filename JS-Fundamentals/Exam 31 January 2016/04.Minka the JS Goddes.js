function main(input) {
    let tasks = {};
    for (let i = 0; i < input.length; i++) {
        let [name, type, task, score, lines] = input[i].split('&')
            .filter(x => x !== '')
            .map(x => x.trim());
        task = Number(task); score = Number(score); lines = Number(lines);
        let currentTask = 'Task ' + task;
        if (!tasks[currentTask]) {
            tasks[currentTask] = {};
            tasks[currentTask]['tasks'] = [];
            tasks[currentTask]['average'] = 0;
            tasks[currentTask]['lines'] = 0;
        }

        tasks[currentTask]['tasks'].push({name: name, type: type});
        tasks[currentTask]['average'] += score;
        tasks[currentTask]['lines'] += lines;
    }

    for (let task in tasks) {
        tasks[task]['average'] = parseFloat((tasks[task]['average'] / tasks[task]['tasks'].length).toFixed(2));
        tasks[task]['tasks'] = tasks[task]['tasks'].sort(sortByName);
    }

    let sortedTask = Object.keys(tasks).sort(sortTasks);
    let resultObj = {};

    for (let task of sortedTask) {
        resultObj[task] = tasks[task];
    }

    console.log(JSON.stringify(resultObj));


    function sortByName(a, b) {
        return a['name'].localeCompare(b['name']);
    }

    function sortTasks(a, b) {
        return tasks[b]['average'] - tasks[a]['average'] || tasks[a]['lines'] - tasks[b]['lines'];
    }
}

main([
    "Array Matcher & strings & 4 & 100 & 38",
    "Magic Wand & draw & 3 & 100 & 15",
    "Dream Item & loops & 2 & 88 & 80",
    "Knight Path & bits & 5 & 100 & 65",
    "Basket Battle & conditionals & 2 & 100 & 120",
    "Torrent Pirate & calculations & 1 & 100 & 20",
    "Encrypted Matrix & nested loops & 4 & 90 & 52",
    "Game of bits & bits & 5 &  100 & 18",
    "Fit box in box & conditionals & 1 & 100 & 95",
    "Disk & draw & 3 & 90 & 15",
    "Poker Straight & nested loops & 4 & 40 & 57",
    "Friend Bits & bits & 5 & 100 & 81"
]);