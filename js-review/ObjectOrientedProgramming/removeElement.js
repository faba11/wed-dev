//Remove Elements from an Array Using slice Instead of splice
function removeElements(element) {
    //This will remove the first three elements from the array
    return element.slice(3);
}

const num = removeElements([1, 2, 3, 4, 5, 6]);
console.log(num); //output:[ 4, 5, 6 ]