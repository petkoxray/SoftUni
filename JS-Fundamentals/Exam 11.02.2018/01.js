function main(input) {
    input = input.map(Number);
    let bitcoins = 0;
    let firstDay = null;
    let goldInLevaPrice = 67.51;
    let bitcoinInLevaPrice = 11949.16;
    let totalMoney = 0;

    for (let day = 0; day < input.length; day++) {
        let gold = input[day];

        if ((day + 1) % 3 === 0) {
            gold *= 0.7;
        }

        totalMoney += gold * goldInLevaPrice;

        if (totalMoney >= bitcoinInLevaPrice) {
            if (!firstDay) {
                firstDay = day + 1;
            }

            while (totalMoney >= bitcoinInLevaPrice) {
                bitcoins++;
                totalMoney -= bitcoinInLevaPrice;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstDay)
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

main(['100', '200', '300']);
main(['50', '100']);