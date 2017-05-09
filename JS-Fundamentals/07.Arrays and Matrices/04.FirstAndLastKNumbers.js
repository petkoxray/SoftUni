function solve(array) {
    let k = Number(array[0]);
    let firstNums = array.slice(1,k + 1);
    let lastNums = array.slice(array.length  - k,array.length);
    console.log(firstNums);
    console.log(lastNums);
}

solve(['3',
 '6', '7', '8', '9']
);