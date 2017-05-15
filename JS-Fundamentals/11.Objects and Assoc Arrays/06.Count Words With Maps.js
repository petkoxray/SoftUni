function solve(input) {
    let data = input[0].split(/\W+/).filter(x => x !== '').map(x => x.toLowerCase());
    let result = new Map();
    
    data.forEach(w => {
        if (result.has(w))
            result.set(w,result.get(w)+1);
        else
            result.set(w,1);
    });
    let arrResult = Array.from(result).sort();
    arrResult.forEach(x => console.log(`'${x[0]}'` + ' -> ' + x[1] + ' times'))
}

solve([`Far too slow, you're far too slow.`]);
//solve([`JS devs use Node.js for server-side JS.-- JS for devs`]);