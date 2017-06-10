function main(input) {
    let obj = {}
    obj['silver'] = 0;
    obj['gold'] = 0;
    obj['diamonds'] = 0;
    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(/\s+|-/).filter(x => x !== '');
        if (args[0] === 'mine') {
            let mineArgs = input[i].split(/\s+|-|:/).filter(x => x !== '');
            let ore = mineArgs[mineArgs.length - 2];
            if (ore === 'gold' || ore === 'silver' || ore === 'diamonds') {
                obj[ore] += Number(mineArgs[mineArgs.length - 1]);
            }
        }

    }

    console.log('*Silver: ' + obj['silver']);
    console.log('*Gold: ' + obj['gold']);
    console.log('*Diamonds: ' + obj['diamonds']);
}

main([
    "mine bobovDol - gold: 10",
    "mine medenRudnik - silver: 22",
    "mine chernoMore - shrimps : 24",
    "gold: 50",
    "          mine mina1    -         silver       :     4",
    "mine silver:14 - silver: 14"
]);