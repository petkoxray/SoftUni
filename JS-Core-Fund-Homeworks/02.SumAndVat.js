function sumdAndVat(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.20);
    console.log("total = " + sum * 1.20);
}

