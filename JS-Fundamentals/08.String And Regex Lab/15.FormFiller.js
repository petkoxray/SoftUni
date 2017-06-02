function form(input) {
    [username, email, phone] = [input.shift(), input.shift(), input.shift()];
    let userRegex = /<![a-zA-Z]+!>/g;
    let emailRegex = /<@[a-zA-Z]+@>/g;
    let phoneRegex = /<\+[a-zA-Z]+\+>/g;

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i]
                .replace(userRegex,username)
                .replace(emailRegex,email)
                .replace(phoneRegex,phone);
    }

    console.log(input.join('\n'));
}

form(['Pesho',
'pesho@softuni.bg',
'90-60-90',
'Hello, <!username!>!',
'Welcome to your Personal profile.', 
'Here you can modify your profile freely.' ,
'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
]);
