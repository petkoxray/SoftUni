function solve(input) {
    let key = input.shift();

    let regexPattern =  '(?:^|\\s)';
    for (let i = 0; i < key.length; i++) {
        regexPattern += '[' + key[i].toLowerCase() + key[i].toUpperCase() + ']';
    }
    regexPattern += '\\s+([!%$#A-Z]{8,})(?:\\s|\\.|,|$)';
    let regex = new RegExp(regexPattern,"g");
    for (let sentence of input) {
        sentence = sentence.replace(regex,replace(regex[1]));
        console.log(sentence);
    }

    function replace(match) {
        match = match.replace(/\!/g, 1)
                .replace(/\%/g, 2)
                .replace(/\#/g, 3)
                .replace(/\$/g, 4)
            .replace(/[A-Z]+/g, x => x = x.toLowerCase());

        return match;

    }
}

solve([
    "enCode",
    "Some messages are just not encoded what can you do?",
    "RE - ENCODE THEMNOW! - he said.",
    "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."
]);

solve([
    "specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
]);
