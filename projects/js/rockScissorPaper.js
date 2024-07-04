// game array 
let game = ["rock", "paper", "scissors"];


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
        document.querySelector('.draw').innerHTML++;

        // check if player won
    } else if (
        (computerMove === "rock" && playerMove === "paper") ||
        (computerMove === "paper" && playerMove === "scissors") ||
        (computerMove === "scissors" && playerMove === "rock")
    ) {
        resultElement.innerHTML = "you win!";
        resultElement.style.color = "green";
        document.querySelector('.win').innerHTML++;

        // check if player lost
    } else {
        resultElement.innerHTML = "you lose!";
        resultElement.style.color = "red";
        document.querySelector('.lose').innerHTML++;
    }
}

function reset() {
    document.querySelector('.win').innerHTML = 0;
    document.querySelector('.lose').innerHTML = 0;
    document.querySelector('.draw').innerHTML = 0;
}

playGame();
