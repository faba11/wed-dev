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



// learning locastorage
let counter = document.querySelector('h1');

// result.innerHTML = counter
let result = JSON.parse(localStorage.getItem('result')) || 0;

counter.innerHTML = result;


// increase function
function increase() {
    result++;

    if (result <= 0) {
        document.querySelector('h1').style.color = 'red';
    } else {
        document.querySelector('h1').style.color = '#000';
    }

    counter.innerHTML = result;

    // convert result into JSON format
    localStorage.setItem('result', JSON.stringify(result));
}

// Decreament function
function decrease() {
    result--;

    if (result < 0) {
        document.querySelector('h1').style.color = 'red';
    }

    counter.innerHTML = result;

    // convert result into JSON format
    localStorage.setItem('result', JSON.stringify(result));
}

function reset() {
    result = 0;

    counter.innerHTML = result;
    counter.style.color = '#000'

    // convert result into JSON format
    localStorage.removeItem(result);
}