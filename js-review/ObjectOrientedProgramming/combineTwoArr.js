//Combine Two Arrays Using the concat Method
function conca(original, attach) {
    //This will add attach array to the original array.
    return original.concat(attach);


}
//Another way to add array end of another array.
let first = [5, 6, 7];
let second = [8, 9];
console.log(conca(first, second));

let numbers = conca([1, 2, 3], [4, 5, 6]);
console.log(numbers);