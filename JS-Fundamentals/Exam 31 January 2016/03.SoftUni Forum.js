function main(input) {
    let users = '';
    input.pop().split(' ').forEach(u => users += `#${u}|`);
    users = users.substring(0, users.length - 1);
    let userNamePattern = /#(\b[a-zA-Z][a-zA-Z_.0-9-]+[A-Za-z0-9])([\s?,:!.]|$)/g;
        for (let j = 0; j < input.length; j++) {
            if (input[j] === "<code>") {
                while (input[j] !== "</code>") {
                    j++;
                }
                continue;
            }
            input[j] = input[j].replace(new RegExp(users, 'g'), match => ('*').repeat(match.length - 1))
                .replace(userNamePattern, (match, username, p) =>
                    `<a href="/users/profile/show/${username}">${username}</a>${p}`);
        }

    for (let sentence of input) {
        console.log(sentence);
    }
}

main([
    "#trifon",
    "#Mega_trifon",
    "#mega_trifon-ApoV",
    "#are_trifone",
    "#machkai_trifkaa",
    "#balgaria_nad-sichk0",
    "#Von_ApovBerger",
    "Pitah go kolegata kakyw e problema, ama na nito edin ot teq",
    "iusarneimi ne mi otgowarq kakwo da parwq??!",
    "za kontakti: #stamat",
    "stamat"
]);