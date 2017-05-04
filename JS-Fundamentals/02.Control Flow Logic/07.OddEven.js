function check([input]) {
    let number = Number(input);
    if (Math.round(number) !== number)
        console.log('invalid');
    else if (number % 2 === 0)
        console.log('even');
    else 
        console.log('odd');
}