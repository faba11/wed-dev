//Implement the Array Method on a Prototype
Array.prototype.myMap = function (callback) {
    let newArray = [];
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))
    }
    return newArr;
};
let numbers = [23, 65, 10, 8];
let doubleNums = numbers.myMap((num) => num * 2);

//Implement the filter Method on a Prototype
for (let x = 0; x < this.length; x++) {
    if (callback(this[x]) == true) {
        newArray.push(newArray);
    }
    return newArray;
}

let num = [23, 65, 98, 5, 13].myMap(item => item % 2);
console.log(num);
console.log(doubleNums);