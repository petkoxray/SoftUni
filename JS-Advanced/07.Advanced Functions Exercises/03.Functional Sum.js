let solve = (function () {
    let sum = 0;
    return function add(arg) {
        sum+=arg;
        add.toString = function() { return sum };
        return add;
    }
}());

console.log(solve(1)(2)(23)(-1).toString());
