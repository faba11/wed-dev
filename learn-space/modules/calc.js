function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


// export object
let person = {
    name: 'Jonh',
    age: 30,
    city: 'New York',
    country: 'USA'
}


// export class
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getGrade() {
        console.log(`${this.name} grade is ${this.grade}`)
    }
}



export {
    add,
    subtract,
    multiply,
    person,
    Student
}
