function solve([n]) {
    if(Array.isArray) {
        n = Number(n);
        for(let i = 1; i <= n; i++) {
            console.log('*' + ' *'.repeat(n-1));
        }
    }
    else {
            for(let i = 1; i <= 5; i++) {
            console.log('*' + ' *'.repeat(n-1));
        }
    }
}