function solve() {
    let result = {};
    for (let arg of arguments) {
        if (!result[typeof arg]) {
            result[typeof arg] = 1;
        } else {
            result[typeof arg]++;
        }
        console.log(typeof  arg + ': ' + arg);
    }

    let sortedResult = Object.keys(result).sort(sortObj);
    sortedResult.forEach(k => console.log(k + ' = ' + result[k]));

    function sortObj(a, b) {
        return result[b] - result[a];
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });