function solve(input) {
    let result = input.split(/[\s,\.();]/g).filter(w => w !== '');
    for(let f of result) {
        console.log(f);
    }
}

// solve(['let sum = 4 * 4,b = "wow";']);
// solve(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);