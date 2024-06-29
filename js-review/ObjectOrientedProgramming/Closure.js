//Use Closure to Protect Properties Within an Object from Being Modified Externally
function name() {
    let myName = 'Faba';
    this.getName = function() {
        return myName; //Closure protects the property "myName" within this inner scope,
    }
};
console.log(getName());