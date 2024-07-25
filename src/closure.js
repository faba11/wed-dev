function outer() {
    const outerValriable = 'I am from the outer function';
    const num = 20;
    console.log(num)
    function inner() {
        console.log(outerValriable)
    }

    return inner
}

let cloure = outer();
cloure()
