
// 10a. Amazon button
// Add to Cart
// rgb(255, 216, 20)
// import { forEach } from "lodash";


// 10b.Uber buttons
// let uber = document.querySelectorAll('.exercise_10b');

// uber.forEach(button => {
//     button.addEventListener('click', exer10)
// })


// function exer10() {
//     uber.forEach(el => {
//         el.classList.remove('is_toggle');
//         console.log(el)
//     })
//     this.classList.add('is_toggle')
// }

// Request now
// Schedule for later
// rgb(230, 230, 230)

// 10c.classList has another method, classList.contains('class-name'), which checks if an element has a class.
// Create a button: <button class="js-button">Test</button>
// Use document.querySelector() and classList.contains('js-button') to check if this button has the class 'js-button'.
// console.log the result.
let exercise_10c = document.querySelector('.exercise_10c');
if (exercise_10c.classList.contains('exercise_10c')) {
    console.log('true');
} else {
    console.log('false')
}

// 10d.Create the button on the right.When clicking this button, it should turn ON / OFF.
// Hints:
// When clicking the button, add or remove the class 'is-toggled', and use it to change the styling.
// Use if (classList.contains('is-toggled')) to decide whether to add or remove the 'is-toggled' class.
let exercise_10d = document.querySelector('.exercise_10d');
function isToggle() {
    exercise_10d.classList.toggle('is_toggle');
}

// 10e. Continuing from 10d,
// create 3 buttons that can be turned ON / OFF.
// Gaming | Music | Tech
let exercise_10e = document.querySelectorAll('.exercise_10e');

exercise_10e.forEach(buttons => {
    buttons.addEventListener('click', is_toggle)
})

function is_toggle() {
    // class remove is_toggle from the rest 
    exercise_10e.forEach(button => {
        button.classList.remove('is_toggle')
    })

    // class add is_toggle to the element been clicked 
    this.classList.add('is_toggle');
}


// 10f. Continuing from 10e,
// use a function to reuse the code, and separate each language into its own file(if you didn’t do this already).
// I used the function already

// 10g. Modify 10f so that only 1 button can be ON at a time.
// Gaming | Music | Tech
// I've done it already


// 10h.Create a file 10h.html and copy the code from 10 - dom - projects.html.
// In the Amazon Shipping Calculator,
// if we type a number less than 0, display a red error message below the text box:



// 10i.We’ll style the calculator project using CSS.
// Make a copy of exercise 9j.
// In your browser, go to: supersimple.dev / projects / calculator - final
// This is the final design for the project.
// Using CSS, style the calculator project to look like the final design on the right.
// 10j.Continuing from exercise 10i, separate each language into its own file(if you didn’t do this already).