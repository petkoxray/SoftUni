function solve(input) {
    let result = new Set();

    for (let i = 0; i < input.length; i++) {
        result.add(input[i]);
    }

    function sortNames(a, b) {
        let sorted = a.length - b.length;
        if (sorted === 0)
            sorted = a.localeCompare(b);

        return sorted;
    }

    let sortedNames = [...result].sort(sortNames);
    console.log(sortedNames);
}