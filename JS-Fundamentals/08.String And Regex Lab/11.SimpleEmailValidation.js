function solve([email]) {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
    if (regex.test(email))
        console.log('Valid');
    else
        console.log('Invalid');
}

solve(['valid@email.bg']);
solve(['invalid@emai1.bg']);