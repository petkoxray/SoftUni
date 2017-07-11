class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        console.log(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
    }
}

let person = new Person(firstname = 'Maria', lastName = 'Petrova', age = 22, email = 'mp@yahoo.com');
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
p.toString()
