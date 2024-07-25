function calculator() {
    let result = 0;

    // add function
    function add(num) {
        return result += num
    }

    // subtract function
    function subtract(num) {
        return result -= num;
    }

    // multiple function
    function multiply(num) {
        return result *= num;
    }

    // return result function
    function getResult() {
        return result;
    }

    // return methods
    return {
        add,
        subtract,
        multiply,
        getResult
    }
}

const calc = calculator();
calc.add(9);
calc.multiply(3)
let result = calc.getResult();
console.log(result); 