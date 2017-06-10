function main(input) {
    let exams = {};
    for (let i = 0; i < input.length; i++) {
        let [name, exam, points] = input[i].split(/:|-/).filter(x => x !== '').map(x => x.trim());
        points = Number(points);
        if (points > 400 || points < 0) continue;

        if (!exams[exam]) {
            exams[exam] = [];
            exams[exam].push({
                name: name,
                result: points,
                makeUpExams: 0
            });
            continue;
        }

        let isStudentExist = false;

        for (let current of exams[exam]) {
            if (current['name'] === name) {
                current['makeUpExams']++;
                isStudentExist = true;
                if (current['result'] < points)
                    current['result'] = points;
                }
        }

        if (!isStudentExist) {
            exams[exam].push({
                name: name,
                result: points,
                makeUpExams: 0
            });
        }

    }

    for (let exam in exams) {
        exams[exam] = exams[exam].sort(sortStudents);
    }

    console.log(JSON.stringify(exams));

    function sortStudents(a, b) {
        return b['result'] - a['result'] ||
                a['makeUpExams'] - b['makeUpExams'] ||
                a['name'].localeCompare(b['name']);
    }
}

main([
    "Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Peter Jackson - PHP: 350",
    "Simon Cowell - PHP : 400"
]);

main([
    "Peter Jackson - Java : 350",
    "Jane - JavaScript : 200",
    "Jane     -    JavaScript :     400",
    "Simon Cowell - PHP : 100",
    "Simon Cowell-PHP: 500",
    "Simon Cowell - PHP : 200"
]);












