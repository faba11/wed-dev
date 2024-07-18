const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
let questioElement = document.querySelector('#question');
let answerBtn = document.querySelector('#answer-btn');
const questionContainer = document.querySelector('#quetion-container');


// To create an array of questions
let shuffleQuestion, currentQuestion;

// To create an array of questions
startBtn.addEventListener('click', startGame);

// To increment the current question by 1 when next button is clicked
nextBtn.addEventListener('click', () => {
    currentQuestion++;

    //To show the next question
    setNextQuestion();
});


// Function to start the game
function startGame() {
    startBtn.classList.add('hide');

    //To select a random question from the array
    shuffleQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0

    questionContainer.classList.remove('hide');
    setNextQuestion();
}

// Function to set next question
function setNextQuestion() {
    restState();

    //To show the next question
    showQuestion(shuffleQuestion[currentQuestion]);
}

// Function to show question
function showQuestion(question) {
    // To show the question on the screen
    questioElement.textContent = question.question;

    // To shuffle the answers of the question and add it to the screen
    shuffleArray(question.answer);

    // To create buttons for each answer and add it to the screen
    question.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');

        // To check if the answer is correct or not and add it to the button
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // To add event listener to the button and check if the answer is correct or not
        button.addEventListener('click', selectAnswer);
        answerBtn.appendChild(button);
    });
}

// Function to reset the game
function restState() {
    // To remove the correct and wrong classes from the body
    clearStatusClass(document.body)
    nextBtn.classList.add('hide');
    // To remove the buttons from the screen and reset the buttons container
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

// Function to check if the answer is correct or not
function selectAnswer(e) {
    //To select the correct answer
    const selectedButton = e.target;
    //To check if the answer is correct or not
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);

    //To convert the answer to an array
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true')
    });


    // To check if the next button should be shown or not
    if (shuffleQuestion.length > currentQuestion + 1) {
        nextBtn.classList.remove('hide')
    } else {
        // To show the restart button
        startBtn.innerHTML = 'Restart';
        startBtn.classList.remove('hide')
    }

}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to set the status class
function setStatusClass(element, correct) {
    // To clear the status class
    clearStatusClass(element);

    // To check if the answer is correct or not and add or remove it to the status class
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong');
    }
}

// Function to clear the status class
function clearStatusClass(element) {
    // To clear the status class
    element.classList.remove('correct');
    element.classList.remove('wrong')
}

// questions array
let questions = [
    {
        question: 'What is the square root of 64?',
        answer: [
            { text: '8', correct: true },
            { text: '6', correct: false },
            { text: '7', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answer: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Lisbon', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answer: [
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answer: [
            { text: 'H2O', correct: true },
            { text: 'O2', correct: false },
            { text: 'H2', correct: false },
            { text: 'HO', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answer: [
            { text: 'Harper Lee', correct: true },
            { text: 'Jane Austen', correct: false },
            { text: 'Mark Twain', correct: false },
            { text: 'Ernest Hemingway', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answer: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false }
        ]
    },
    {
        question: 'What is the capital city of Japan?',
        answer: [
            { text: 'Tokyo', correct: true },
            { text: 'Osaka', correct: false },
            { text: 'Kyoto', correct: false },
            { text: 'Nagoya', correct: false }
        ]
    },
    {
        question: 'What is the currency of the United Kingdom?',
        answer: [
            { text: 'Pound sterling', correct: true },
            { text: 'Euro', correct: false },
            { text: 'Dollar', correct: false },
            { text: 'Yen', correct: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?',
        answer: [
            { text: 'Hydrogen', correct: true },
            { text: 'Helium', correct: false },
            { text: 'Lithium', correct: false },
            { text: 'Oxygen', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answer: [
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Claude Monet', correct: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answer: [
            { text: 'Diamond', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Platinum', correct: false }
        ]
    },
    {
        question: 'In which year did the Titanic sink?',
        answer: [
            { text: '1912', correct: true },
            { text: '1905', correct: false },
            { text: '1918', correct: false },
            { text: '1921', correct: false }
        ]
    },
    {
        question: 'Which planet is the hottest in the solar system?',
        answer: [
            { text: 'Venus', correct: true },
            { text: 'Mercury', correct: false },
            { text: 'Mars', correct: false },
            { text: 'Jupiter', correct: false }
        ]
    },
    {
        question: 'What is the main ingredient in guacamole?',
        answer: [
            { text: 'Avocado', correct: true },
            { text: 'Tomato', correct: false },
            { text: 'Onion', correct: false },
            { text: 'Pepper', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answer: [
            { text: '2', correct: true },
            { text: '1', correct: false },
            { text: '3', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'Which scientist developed the theory of relativity?',
        answer: [
            { text: 'Albert Einstein', correct: true },
            { text: 'Isaac Newton', correct: false },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Galileo Galilei', correct: false }
        ]
    },
    {
        question: 'Which country is the largest by land area?',
        answer: [
            { text: 'Russia', correct: true },
            { text: 'Canada', correct: false },
            { text: 'China', correct: false },
            { text: 'United States', correct: false }
        ]
    },
    {
        question: 'What is the most abundant gas in the Earth’s atmosphere?',
        answer: [
            { text: 'Nitrogen', correct: true },
            { text: 'Oxygen', correct: false },
            { text: 'Carbon Dioxide', correct: false },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: 'Who is the author of the Harry Potter series?',
        answer: [
            { text: 'J.K. Rowling', correct: true },
            { text: 'J.R.R. Tolkien', correct: false },
            { text: 'George R.R. Martin', correct: false },
            { text: 'Stephen King', correct: false }
        ]
    },
    {
        question: 'What is the speed of light?',
        answer: [
            { text: '299,792,458 meters per second', correct: true },
            { text: '150,000,000 meters per second', correct: false },
            { text: '1,080,000,000 meters per second', correct: false },
            { text: '300,000,000 meters per second', correct: false }
        ]
    }
];


