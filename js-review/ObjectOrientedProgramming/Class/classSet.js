function Animal() {}


Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log('nom nom nom');
    },
    description: function() {
        console.log('My name is ' + this.name);
    }
};
//The cat description
function Cat(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};
//Set Cat's prototype to Animal 
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

//The Rabbit description
function Rabbit(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};
//Set Rabbit's prototype to Animal
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

//The Dog description
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};
//Set Dog's prototype to Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


//access the values of the animals

//Cat info
let cat = new Cat('Whiskers', 3, 'black');
console.log(cat);
cat.eat();

//Rabbit info
let rabbit = new Rabbit('Flopsy', 5, 'White')
console.log(rabbit);
rabbit.eat();

//Dog info
let dog = new Dog('Bubby', 8, 'Brown');
console.log(dog);
dog.eat()

//To check if the dog is inherit from animal
console.log(dog instanceof Animal); //Outpu:true

//can be check using isPrototype
console.log(Animal.prototype.isPrototypeOf(rabbit));