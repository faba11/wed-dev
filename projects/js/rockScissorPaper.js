
'strict';
// game array 

let game = ["rock", "paper", "scissors"];


// scores 
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

// Initialize the scores in the DOM
let winScore = document.querySelector('.win').innerHTML = score.wins;
let loseScore = document.querySelector('.lose').innerHTML = score.losses;
let drawScore = document.querySelector('.draw').innerHTML = score.ties;

// get computer move
function getComputerMove() {
    const computerMove = Math.floor(Math.random() * game.length);
    return game[computerMove];
}

// get player move
function getPlayerMove() {
    const playerMove = Math.floor(Math.random() * game.length);
    return game[playerMove];
}

function playGame(playerMove) {
    const computerMove = getComputerMove();

    // display player and computer move
    document.querySelector("#player").innerHTML = `You chose ${playerMove} and computer chose ${computerMove}`;

    // display result
    let resultElement = document.querySelector("#result");

    // check if player and computer chose the same
    if (computerMove === playerMove) {
        resultElement.innerHTML = "Draw!";
        resultElement.style.color = "orange";

        document.querySelector('.draw').innerHTML = score.ties++;

        // check if player won
    } else if (
        (computerMove === "rock" && playerMove === "paper") ||
        (computerMove === "paper" && playerMove === "scissors") ||
        (computerMove === "scissors" && playerMove === "rock")
    ) {
        resultElement.innerHTML = "you win!";
        resultElement.style.color = "green";


        document.querySelector('.win').innerHTML = score.wins++;

        // check if player lost
    } else {
        resultElement.innerHTML = "you lose!";
        resultElement.style.color = "red";

        document.querySelector('.lose').innerHTML = score.losses++;
    }
    // store score in local storage
    localStorage.setItem('score', JSON.stringify(score));
}


// reset scores function
function reset() {

    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    document.querySelector('.win').innerHTML = score.wins;
    document.querySelector('.lose').innerHTML = score.losses;
    document.querySelector('.draw').innerHTML = score.ties;

    // remove score from local storage
    localStorage.removeItem('score');
}

playGame();
