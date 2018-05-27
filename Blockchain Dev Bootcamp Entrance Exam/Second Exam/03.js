function main(input) {
    let arr = input.shift().split(' ').map(Number).filter(x => x !== '');
    let clonedArray = arr.slice(0);

    while (true) {
        if (clonedArray.length === 1) break;

        for (let i = 0; i < arr.length; i++) {
            if (clonedArray.filter(x => x !== '').length === 1)
                break;

            if (clonedArray[i] === '')
                continue;

            const attacker = i;
            let target = arr[i];

            if (target >= arr.length) {
                target = target % arr.length;
            }

            let difference = Math.abs(attacker - target);

            if (difference === 0) {
                console.log(`${attacker} performed harakiri`);
                clonedArray[attacker] = '';
            } else if (difference % 2 === 0) {
                clonedArray[target] = '';
                console.log(`${attacker} x ${target} -> ${attacker} wins`);
            } else {
                console.log(`${attacker} x ${target} -> ${target} wins`);
                clonedArray[attacker] = '';
            }
        }
        
        clonedArray = clonedArray.filter(x => x !== '');
        arr = clonedArray.slice(0);
    }
}

main(['4 3 2 1 0']);