import { add as sum, subtract, multiply, person, Student } from "./calc.js";

console.log(sum(3, 4));
console.log(subtract(40, 10));
console.log(multiply(3, 8))
console.log(person);

let p1 = new Student('Faba', 22, 89);
p1.getGrade()