function main(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicSum = Number(input[2]);
    let comb = 0;

    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            comb++;
            let sum = i + j;
            if (sum === magicSum) {
                console.log("Combination N:" + comb + " (" + i + " + " + j + " = " + sum + ")");
                return;
            }
        }
    }

    console.log(comb + " combinations - neither equals " + magicSum)
}

main(["88", "888", "1000"]);