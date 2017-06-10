function main(input) {
    let courseName = input.pop().trim();
    let averageCoursePoints = 0;
    let courseCount = 0;
    let grade = 0;

    for (let i = 0; i < input.length; i++) {
        let [name, course, points, bonuses] = input[i].split(' ').filter(x => x !== '');
        points = Number(points);
        bonuses = Number(bonuses);

        if (courseName === course) {
            averageCoursePoints += points;
            courseCount++;
        }

        if (points < 100) {
            console.log(`${name} failed at "${course}"`);
            continue;
        }
        let pointsWithBonus = points / 5 + bonuses;
        grade = ((pointsWithBonus / 80) * 4) + 2;
        if (grade > 6.00) {
            grade = 6.00
        }

        console.log(`${name}: Exam - "${course}"; Points - ${pointsWithBonus}; Grade - ${grade.toFixed(2)}`);
    }

    console.log(`"${courseName}" average points -> ` + averageCoursePoints / courseCount);

}


main([
    "Pesho C#-Advanced 100 3",
    "Gosho Java-Basics 157 3",
    "Tosho HTML&CSS 317 12",
    "Minka C#-Advanced 57 15",
    "Stanka C#-Advanced 157 15",
    "Kircho C#-Advanced 300 0",
    "Niki C#-Advanced 400 10",
    "C#-Advanced"
]);