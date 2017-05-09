function solve(input) {
    let users = [];

    for (let i = 0; i < input.length; i++) {
        let username = '';
        let data = input[i].split('@');
        let domain = data[1].split('.');
        username += data[0] + '.';
        domain.forEach(l => username += l[0]);
        users.push(username);
    }

    console.log(users.join(', '));
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);