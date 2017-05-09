function solve(input) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < input.length; i+=2) {
        result.push(input[i]);
        sum += Number(input[i + 1]);
    }

    console.log(`You purchased ${result.join(', ')} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);