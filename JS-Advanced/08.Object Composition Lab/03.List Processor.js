function solve(input) {
    let processor = (function (input) {
        let result = [];

        function add(value) { result.push(value) }
        function remove(value) { result = result.filter(x => x !== value) }
        function print() { console.log(result.join(',')) }
        return { add, remove, print }
    }());

    for (let args of input) {
        let [command, value]  = args.split(' ');
        processor[command](value);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

