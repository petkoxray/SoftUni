function solve([prop1,value1,prop2,value2,prop3,value3]) {
    let obj = {};
    obj[prop1] = value1;
    obj[prop2] = value2;
    obj[prop3] = value3;
    return obj;
}

console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));