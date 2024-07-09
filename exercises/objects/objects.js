
// Include lodash library
const _ = require('lodash');

//8a. Let's say in the Amazon project,
//  we have a basketball product.
// This product has a name of 'basketball', a price of 2095 cents.
// Create an object to represent this product and display it in the console.

const amzonProduct = {
    name: 'baskeball',
    price: 2095,
}


// 8b. Continuing from 8a, let's say we want to increase the price by 500 cents.
//  Use dot notation to increase the price, and display the updated object in the console.

amzonProduct.price += 500;
console.log(amzonProduct);


// 8c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'.
//  Display the updated object in the console.
amzonProduct['delivery time'] = '3 days'
console.log(amzonProduct);


// 8d. Create a function comparePrice(product1, product2),
//which takes 2 products(with 'name' and 'price' properties) and returns the product that is less expensive.
//Create 2 products and try out the function.

const comparePrice = (product1, product2) => {
    return product1.price < product2.price ? product1 : product2;
};

const product1 = {
    name: 'shirt',
    price: 799
}

const product2 = {
    name: 'shoes',
    price: 830
}

let cheaperProduct = comparePrice(product1, product2);

console.log(cheaperProduct);



// 8e. Create a function isSameProduct(product1, product2),
//which returns true if 2 products have the same values inside('name' and 'price').
//If not, return false.Create 2 products and try out the function.
// (Hint: objects are references so you can't compare them directly).

const isSameProduct = (product1, product2) => {

    // check if the two objects have the values
    return _.isEqual(product1, product2);
}

let hasSameValue = isSameProduct(product1, product2);
console.log(hasSameValue);


// 8f. Using Google or an A.I. tool,
// search how to convert a string to all lowercase with JavaScript('Good Morning' => 'good morning').

const lowercase = (str) => console.log(_.lowerCase(str));
lowercase('Good Morning');


// 8g. Search how to repeat a string many times ('test' 2 times => 'testtest').

// const repeatStr = (str, n) => console.log(_.repeat(str, n).split('').reverse('').join(''));
const repeatStr = (str, n) => console.log(_.repeat(str, n));

repeatStr('test', 3);

// 8h. We'll add localStorage to the calculator project. First, make a copy of the project from exercise 7j (see the solution for 7j if needed).
//:Whenever we update the calculation, save it using.setItem().
//:When the page first loads, get the calculation using.getItem().
//:Use a default value of '' if a calculation doesn't exist in local storage.

// --- objects.html



/*8i.We'll improve the coin flip game from exercise 6j to be like the rock paper scissors game.

:--Copy the code from exercise 6j(see the solution for 6j if needed).
:--Create 2 buttons to play the game: [Heads][Tails]
:--When clicking 'heads', play the game with guess = 'heads'.
:--When clicking 'tails', play the game with guess = 'tails'.
:--Create a function playGame(guess) to reuse the code.*/

// --- exercises8i.html





// 8k.Use localStorage to save and load the score(hint:
// you'll need to use JSON.stringify() to convert the score object to a string).