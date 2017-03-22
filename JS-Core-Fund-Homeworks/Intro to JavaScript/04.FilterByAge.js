function ageFilter(input) {
    let minAge = Number(input[0]);
    let firstPerson = { name: input[1], age: Number(input[2]) };
    let secondPerson = { name: input[3], age: Number(input[4]) };

    if(firstPerson.age >= minAge) console.log(firstPerson);
    if(secondPerson.age >= minAge) console.log(secondPerson);
}
