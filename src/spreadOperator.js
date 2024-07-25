const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6];

const combineArr = [...arr1, ...arr2];
console.log(combineArr);


const obj1 = {
    name: 'Jonh',
    age: 30
}

const obj2 = {
    city: 'New york',
    country: 'USA'
}

const person = { ...obj1, ...obj2 }
console.log(person);

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6))//21