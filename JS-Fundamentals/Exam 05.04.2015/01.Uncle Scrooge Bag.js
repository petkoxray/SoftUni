function main(input) {
    let coins = 0;
    for (let i = 0; i < input.length; i++) {
        let [type, value] = input[i].split(' ');
        if (type.toLowerCase() === 'coin' &&
            parseInt(value) === parseFloat(value)
            && Number(value) > 0) {
            coins += parseInt(value);
        }
    }

    console.log('gold : ' + parseInt(coins / 100));
    console.log('silver : ' + parseInt(coins % 100 / 10));
    console.log('bronze : ' + (coins % 10));

}

main(
    ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']
);