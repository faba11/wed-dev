// Lesson 11 Exercises - Arrays and Loops
// 11a.Create an array of numbers: const nums = [10, 20, 30]; 

// Modify the last value in this array and change it to 99.
let nums = [10, 20, 30];

// chamge the last item in the array to 99
nums[nums.length - 1] = 99;
console.log(nums)

// 11b.Create a function getLastValue(array) that takes an array and returns the last value in the array.
//Hint: array indexes start at 0 so the last index is the number of values in the array minus 1(lastIndex = array.length - 1).
//getLastValue([1, 20, 22, 24, 5]) => 5
//getLastValue(['hi', 'hello', 'good']) => 'good'

let arrayNum = [1, 20, 22, 24, 5];
let arrayStr = ['hi', 'hello', 'good'];

function getLastVaue(array) {
    //return last elementy in the arrary
    return array[array.length - 1]
}
let lastValueNumber = getLastVaue(arrayNum);
let lastValuesStr = getLastVaue(arrayStr);

console.log(lastValueNumber)
console.log(lastValuesStr)


// 11c.Create a function arraySwap(array) that takes an array and returns an array
// where the first and last values are swapped(or switched).
// arraySwap([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 1]
// arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi']
function arraySwap(array) {

    // let temp = array[0];
    // array[0] = array[array.length - 1];
    // array[array.length - 1] = temp;

    // improved of it
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
    return array;
}

let swapNumArray = arraySwap(arrayNum);
let swapStrArray = arraySwap(arrayStr)

console.log(swapNumArray);
console.log(swapStrArray);



// 11d.Create a for loop that counts up from 0 to 10, but counts up by 2(0, 2, 4, ..., 8, 10).
// let loopNum = 
for (let i = 0; i <= 5; i++) {
    console.log(i * 2);
}

// 11e.Create a for loop that counts down from 5 to 0.
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// 11f.Do exercises 11d and 11e, but using while loops.
console.log('while loop')
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

// reverse with while loop
console.log('while reverse')
let x = 5;
while (x >= 0) {
    console.log(x);
    x--;
}

// 11g.Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
let newArray = []
for (let num = 0; num < arrayNum.length; num++) {
    arrayNum[num] = arrayNum[num] + 1;
}
console.log(arrayNum)
// [1, 2, 3] => [2, 3, 4]


// 11h.Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
// addOne([1, 2, 3]) => [2, 3, 4]
// addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]

function addOne(array) {
    return array.map((element) => element + 1)
}
console.log(addOne(arrayNum));


// 11i.Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by num.
//  addNum([1, 2, 3], 2) => [3, 4, 5]
// addNum([1, 2, 3], 3) => [4, 5, 6]
// addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
let arrayNums = [-2, -1, 0, 99]
function addNum(array, num) {
    // for (let i = 0; i < array.length; i++) {
    //     array[i] = array[i] + num
    // }
    // return array

    // better code 
    return array.map((array) => array + num)
}
console.log(addNum(arrayNums, 2))


// 11j.Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.
// addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]
// addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
function addArrays(array1, array2) {
    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must to have the same length')
    }
    return arr1.map((num, index) => num + arr2[index])
}
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
console.log(addArrays(arr1, arr2));


// 11k.Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
// countPositive([1, -3, 5]) => 2
// countPositive([-2, 3, -5, 7, 10]) => 3
function countPositive(num) {
    // let counter = 0;
    // for (let i = 0; i < num.length; i++) {
    //     if (num[i] > 0) {
    //         counter++;
    //     }
    //     continue;
    // }
    // return counter

    // improve the code
    return num.filter(num => num > 0).length;
}

let numbers = [1, -2, 3, 4, -9];
console.log(countPositive(numbers));

// 11l.Create a function minMax(nums) that takes an array of numbers and returns an object
// with the minimum and maximum numbers in the array(do this using a loop instead of using something like Math.min)
// minMax([1, -3, 5]) => { min: -3, max: 5 }
// minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }

//TODO: I need to improve review this code
function minMax(nums) {
    // let obj = {}
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {
    //         if (nums[i] > nums[j]) {
    //             obj.max = nums[i]
    //             obj.min = nums[j]
    //         }
    //     }
    // }
    // return obj


    if (nums.length == 0) {
        return { min: undefined, max: undefined };
    }


    let obj = {
        min: nums[0],
        max: nums[0]
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < obj.min) {
            obj.min = nums[i]
        }
        if (nums[i] > obj.max) {
            obj.max = nums[i]
        }
    }
    return obj;
}

let obj = [3]
console.log(minMax(obj))

// 11m.Update exercise 11l to also handle these cases:
// minMax([]) => { min: null, max: null }
// minMax([3]) => { min: 3, max: 3 }


// 11n.Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.
//countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape: 1 }
//(Hint: you can access a property using a variable: object[variable].This uses the value inside the variable as the property name).

//TODO: I need to improve review this code
function countWords(words) {
    if (words.length == 0) {
        return {}
    }

    let wordCount = {}
    for (let word of words) {
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    }
    return wordCount
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']))


