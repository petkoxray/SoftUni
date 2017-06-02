function solve(input) {
    let result = new Set();

    for (let i = 0; i < input.length; i++) {
        result.add(input[i]);
    }

    function sortNames(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }

    let sortedNames = [...result].sort(sortNames);
    console.log(sortedNames.join('\n'));
}

// solve([
//     "Ashton",
//     "Kutcher",
//     "Ariel",
//     "Lilly",
//     "Keyden",
//     "Aizen",
//     "Billy",
//     "Braston",
// ]);