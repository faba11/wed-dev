'strict';
const product = {
    name: 'socks',
    price: 1090,
    isNewProuct: true
}

// change the object's name
product.name = 'shoes'
product['color'] = 'red';
product.lenght = 32
product.width = 34

delete product.isNewProuct

// set name propety to objects


// supersimple.dev/projects/objects
console.log(product)


// product 2
let product2 = {
    name: 'shirt',
    price: 580,
    description: 'nice shirt',
    'delivery time': '3 days',
    rating: {
        stars: 4.5,
        count: 150
    },

    // function in the object
    ratingFunc: function rateFunc() {
        console.log(`${this.name} has ${this.rating.count} rating`)
    }
}

console.log(product2['delivery time'])
console.log(product2.rating.count);
product2.ratingFunc();


// convert javascript object into JSON
let jsonString = JSON.stringify(product2);
console.log(jsonString);


// convert json into javascrip object
let object = JSON.parse(jsonString);
console.log(object);


// what is the different between null and undefined?
// null: is used when we intentionally want to something to be  empty.
// underfined: is when variable has assign to value.

// object refferences
const obj1 = {
    message: 'hello'
}

let obj2 = obj1;

obj1.message = 'Good job!';

console.log(obj2)
console.log(obj1)


let obj3 = {
    message: 'Good job!'
}

console.log(obj1 === obj3);
console.log(obj1 == obj2)

//Destructuring
const obj4 = {
    message: 'Destructuring',
    price: 899
}

const { message, price } = obj4;
console.log(message)

// shorthand Property
const obj5 = {
    message: message,
    price,

    // Shorthand Method
    method() {
        console.log('method')
    }
}
console.log(obj5);
obj5.method();