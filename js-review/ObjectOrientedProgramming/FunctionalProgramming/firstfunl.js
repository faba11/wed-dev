let prepareCoffee = () => 'Coffee';
let prepareNormalTea = () => 'Normal Tea';
let prepareGreenTea = () => 'Green Tea';

let getCoffee = (prepare, numOfCoffee) => {
    let cupsCoffee = [];

    for (let cups = 0; cups < numOfCoffee; cups++) {
        let coffeeCup = prepare();
        cupsCoffee.push(coffeeCup);
    }
    return cupsCoffee;
}
let coffee = getCoffee(prepareCoffee, 10);
let normalTea = getCoffee(prepareNormalTea, 7);
let greenTea = getCoffee(prepareGreenTea, 4);

console.log(coffee);
console.log(normalTea);
console.log(greenTea);