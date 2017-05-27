function main(input) {
    let total = 0;
    let dailyUsage = [];
    input = input.map(Number);
    input = input.filter(x => x < 30);

    while (input.length !== 0) {
        let thisDayUsage = 0;
        for (let i = 0; i < input.length; i++) {
            input[i] += 1;
            thisDayUsage += 195;
        }
        input = input.filter(x => x < 30);
        total += thisDayUsage;
        dailyUsage.push(thisDayUsage);
    }

    console.log(dailyUsage.join(', '));
    total *= 1900;
    console.log(total + " pesos");
}
