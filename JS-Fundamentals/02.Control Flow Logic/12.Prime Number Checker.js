function primeCheck([num]) {
    let number = Number(num);

    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }

    return true;
}

console.log(primeCheck([19]));