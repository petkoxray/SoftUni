function solve(array) {
    let result = array.filter((x, i) => i % 2 == 0).join(' ');
    console.log(result);
}

//solve(['20','30','40']);
//solve(['20','10']);