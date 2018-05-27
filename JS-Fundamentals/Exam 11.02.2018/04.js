function main(firstArgs, secondArgs) {
    let kingdoms = new Map();
    let kingdomsStatistic = new Map();

    for (let i = 0; i < firstArgs.length; i++) {
        const obj = firstArgs[i];

        kingdomsStatistic.set(obj.kingdom, {
            wins: 0,
            losses: 0
        });

        if (!kingdoms.has(obj.kingdom)) {
            kingdoms.set(obj.kingdom, {});
        }

        if (!kingdoms.get(obj.kingdom)[obj.general]) {
            let kingdom = kingdoms.get(obj.kingdom);
            kingdom[obj.general] = {
                army: 0,
                wins: 0,
                losses: 0
            };
        }

        kingdoms.get(obj.kingdom)[obj.general].army += obj.army;
    }

    for (let i = 0; i < secondArgs.length; i++) {
        const aKingdom = secondArgs[i].shift();
        const aGeneral = secondArgs[i].shift();
        const dKingdom = secondArgs[i].shift();
        const dGeneral = secondArgs[i].shift();

        if (aKingdom === dKingdom)
            continue;

        let attackingGeneral = kingdoms.get(aKingdom)[aGeneral];
        let defGeneral = kingdoms.get(dKingdom)[dGeneral];

        if (attackingGeneral.army > defGeneral.army) {
            attackingGeneral.army = Math.floor(attackingGeneral.army * 1.1);
            defGeneral.army = Math.floor(defGeneral.army * 0.9);
            attackingGeneral.wins++;
            defGeneral.losses++;
            kingdomsStatistic.get(aKingdom).wins++;
            kingdomsStatistic.get(dKingdom).losses++;
        } else if (defGeneral.army > attackingGeneral.army) {
            defGeneral.army = Math.floor(defGeneral.army * 1.1);
            attackingGeneral.army = Math.floor(attackingGeneral.army * 0.9);
            attackingGeneral.losses++;
            defGeneral.wins++;
            kingdomsStatistic.get(aKingdom).losses++;
            kingdomsStatistic.get(dKingdom).wins++;
        }
    }


    let sortedKingdoms = [...kingdomsStatistic].sort((first, second) => {
        return second[1].wins - first[1].wins || first[1].losses - second[1].losses
            || first[0].localeCompare(second[0]);
    });

    let winner = Object.entries(kingdoms.get(sortedKingdoms[0][0]));
    console.log("Winner:", sortedKingdoms[0][0]);
    
    winner.sort((a, b) => b[1].army - a[1].army).forEach((kvp) => {
        console.log("/\\general:", kvp[0]);
        console.log("---army:", kvp[1].army);
        console.log("---wins:", kvp[1].wins);
        console.log("---losses:", kvp[1].losses);

    });
}

main(
    [{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
);

// main(
//     [{ kingdom: "Stonegate", general: "Ulric", army: 5000 },
//     { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
//     { kingdom: "Maiden Way", general: "Berinon", army: 1000 }],
//     [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//     ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]
// );