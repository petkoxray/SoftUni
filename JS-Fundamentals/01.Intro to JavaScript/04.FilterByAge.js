    function filterByAge([minAge,firstName,firstAge,secondName,secondAge]) {
        let firstPerson = {name: firstName, age: Number(firstAge)};
        let secondPerson = {name: secondName, age: Number(secondAge)};

        if (firstPerson.age >= Number(minAge))
            console.log(firstPerson);
        if (secondPerson.age >= Number(minAge))
            console.log(secondPerson);
    }