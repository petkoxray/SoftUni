// function main(input) {
//     let regex = /www\.[a-zA-Z0-9-]+\.[a-z.]+/g;
//
//     for (let i = 0; i < input.length; i++) {
//         let match = regex.exec(input[i]);
//
//         while (match) {
//             console.log(match[0]);
//             match = regex.exec(input[i]).log;
//         }
//     }
// }

main([
    'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
]);

function main(input) {
    let pattern = /\bwww\.[a-zA-Z0-9-]+(\.[a-z]+)+\b/g;

    for (let sentence of input) {
        let match = pattern.exec(sentence);

        while (match) {
            console.log(match[0]);
            match = pattern.exec(sentence);
        }
    }
}