function main([input]) {
    let yield = Number(input);
    let days = 0;
    let extracted = 0;
    
    while (yield >= 100) {
        extracted += yield - 26;
        yield -= 10;
        days++;
    }

    if (days > 0)
        extracted -= 26;

    console.log(days);
    console.log(extracted);
}

main(['111']);
main(['200']);
main(['450']);