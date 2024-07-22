
let num = 7;
let myPromise = new Promise((resolved, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
        if (randomNum < num) {
            resolved('You win')
        } else {
            reject('You lost')
        }
    }, 1000)
})

myPromise.then(successMessage => {
    console.log(successMessage)
}).catch((errorMeg) => {
    console.log(errorMeg)
})