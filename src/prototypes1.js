class Pro1 {
    constructor() {
        this.name = 'John';
        this.age = 40;
    }

    greet() {
        console.log(`${this.name} ${this.age}`)
    }
}

class Pro2 {
    constructor() {
        this.name = 'Traore';
        this.nationality = 'Guinean';
    }

    greet() {
        console.log(`Hello, ${this.name}`)
    }
}

class Pro3 extends Pro1 {
    constructor() {
        super();
    }
    greet() {
        console.log(`Welcome back  ${this.name}`)//optionally overiding the greet method
    }
}

// old version of creating methods
// Pro1.prototype.greet = function () {
//     console.log(`Hello, ${this.name}`)
// }

// Pro2.prototype.greet = function () {
//     console.log(`${this.name}`)
// }


let pr1 = new Pro1();
let pr2 = new Pro2()
let pr3 = new Pro3()

pr1.greet()
pr2.greet()
pr3.greet()
// console.log(Object.getPrototypeOf(pr1) == Pro1.prototype)