function main(meals, commands) {
    let mealsEaten = 0;

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');

        if (command[0] === "Serve") {
            if (meals.length === 0)
                continue;
            console.log(meals.pop() + ' served!');
            //++mealsEaten;
        } else if (command[0] === "Eat") {
            if (meals.length === 0)
                continue;
            console.log(meals.shift() + ' eaten');
            ++mealsEaten;
        } else if (command[0] === "Add") {
            if (command[1] !== undefined)
                meals.unshift(command[1]);
        } else if (command[0] === "Consume") {
            let firstIndex = Number(command[1]);
            let secondIndex = Number(command[2]);

            if (!checkIndex(firstIndex, secondIndex, meals)) {
                continue;
            }
            let itemToEat = secondIndex - firstIndex + 1;
            meals.splice(firstIndex, itemToEat);
            mealsEaten += itemToEat;
            console.log('Burp!');
        } else if (command[0] === "Shift") {
            let firstIndex = Number(command[1]);
            let secondIndex = Number(command[2]);
            if (!checkIndex(firstIndex, secondIndex, meals)) {
                continue;
            }

            let temp = meals[firstIndex];
            meals[firstIndex] = meals[secondIndex];
            meals[secondIndex] = temp;
        } else if (command[0] === "End") {
            break;
        }
    }

    if (meals.length !== 0) {
        console.log("Meals left: " + meals.join(', '));
    } else {
        console.log("The food is gone");
    }

    console.log("Meals eaten: " + mealsEaten);

    function checkIndex(first, second, meals) {
        return first >= 0 && second < meals.length && second > first;
    }
}

main(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]);