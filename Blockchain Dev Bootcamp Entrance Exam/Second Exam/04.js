function main(input) {
    let heroes = new Map();
    let heroesSum = {};

    while (true) {
        let line = input.shift();
        if (line === 'Make a decision already!')
            break;

        let [name, trait, traitValue] = line.split(' ');

        if (!heroes.has(name)) {
            heroes.set(name, {});
            heroesSum[name] = 0;
        }

        let hero = heroes.get(name);

        if (trait === 'does' && traitValue === 'Gyubek!') {
            Object.keys(hero).forEach(k => {
                if (hero[k] >= 0) {
                    heroesSum[name] -= hero[k];
                    delete hero[k];
                }
            });

            continue;
        }

        traitValue = Number(traitValue);

        if (trait === 'Greedy' || trait === 'Rude' || trait === 'Dumb') {
            if (traitValue > 0) {
                traitValue = traitValue * -1;
            }
        }

        if (trait === 'Handsome')
            traitValue *= 3;
        if (trait === 'Kind')
            traitValue *= 2;
        if (trait === 'Smart')
            traitValue *= 5;

        if (hero.hasOwnProperty(trait) && hero.trait < traitValue) {
            heroesSum[name] -= hero[trait];
            heroesSum[name] += traitValue;
            hero[trait] = traitValue;
        } else if (!hero.hasOwnProperty(trait)) {
            hero[trait] = traitValue;
            heroesSum[name] += traitValue;
        }
    }

    let sorted = Object.entries(heroesSum).sort((a, b) =>
        b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const [hero, sum] of sorted) {
        console.log(`# ${hero}: ${sum}`);
        let traits = Object.entries(heroes.get(hero)).sort((a, b) => b[1] - a[1]);
        for (const [trait, traitValue] of traits) {
            console.log(`!!! ${trait} -> ${traitValue}`);
        }
    }
}

main([
    'Tony Handsome 40',
    'Johnny cool 23',
    'Johnny does Gyubek!',
    'Asen Kind 33',
    'Ivan Greedy 1',
    'Ivan Smart 5',
    'Asen Greedy 20',
    'Make a decision already!'
]);