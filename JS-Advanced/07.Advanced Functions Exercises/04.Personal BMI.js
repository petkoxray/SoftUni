function solve(name, age, weight, height) {
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    let patient = {
        name: name,
    personalInfo: {
        age: age,
        weight: weight,
        height: height
        },
        BMI: bmi,
        status: ''
    };

    if (bmi < 18.5)
        patient['status'] = 'underweight'
    else if (bmi < 25)
        patient['status'] = 'normal';
    else if (bmi < 30)
        patient['status'] = 'overweight';
    else {
        patient['status'] = 'obese';
        patient['recommendation'] = 'admission required';
    }

    return patient;
}

console.log(solve("Peter", 29, 75, 182));