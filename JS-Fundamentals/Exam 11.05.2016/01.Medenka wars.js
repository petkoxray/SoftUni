function main(input) {
    let vitkorDamage = 0;
    let naskorDamage = 0;
    let vitkorCount = 0;
    let naskorCount = 1;
    let vitkorPrevDamage = -Infinity;
    let naskorPrevDamage = -Infinity;

    for (let i = 0; i < input.length; i++) {
        let args = input[i].split(" ");
        let damage = Number(args[0]) * 60;
        let magician = args[1];

        if (magician === 'white') {
            if (naskorDamage === naskorPrevDamage)
                naskorCount++;
            if (naskorCount === 5) {
                damage *= 4.5;
                naskorCount = 1;
            }

            naskorPrevDamage = damage;
            naskorDamage += damage;

        } else {
            if (vitkorPrevDamage === damage)
                vitkorCount++;
            if (vitkorCount === 2) {
                damage *= 2.75;
                vitkorCount = 1;
            }

            vitkorPrevDamage = damage;
            vitkorDamage += damage;
        }
    }

    if (naskorDamage > vitkorDamage) {
        console.log('Winner - Vitkor');
        console.log('Damage - ' + naskorDamage);
    } else {
        console.log('Winner - Naskor');
        console.log('Damage - ' + vitkorDamage);
    }
}

main([
    "5 white medenkas",
    "5 dark medenkas",
    "4 white medenkas"
]);
