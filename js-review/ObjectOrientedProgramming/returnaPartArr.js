//Return Part of an Array Using the slice Method
function arr(nums, beginSlice, endSleice) {
    return nums.slice(beginSlice, endSleice);
}
let input = ["at", "Dog", "Tiger", "ZeCbra", "Ant"];
console.log(arr(input, 1, 2));