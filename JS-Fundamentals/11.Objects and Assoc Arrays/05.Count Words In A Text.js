// function solve(input) {
//     let data = input[0].split(/\W+/).filter(x => x !== '');
//     let result = {};
//     for (let item of data) {
//         if (result[item])
//             result[item]++;
//         else
//             result[item] = 1;
//     }
//
//     console.log(JSON.stringify(result));
// }

solve([`Far too slow, you're far too slow.`]);
solve([`JS devs use Node.js for server-side JS.-- JS for devs`]);


function solve([input]) {
    let result = {};
    let words = input.split(/\W+/).filter(x => x !== '');

    for (let word of words) {
        if (!result[word])
            result[word] = 0;
        result[word]++;
    }

    console.log(JSON.stringify(result));
}
