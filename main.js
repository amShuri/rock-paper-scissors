let playerScore = 0;
let computerScore = 0;
let maxScore = 5;
const buttons = document.querySelectorAll('.gameButton');
for(const button of buttons) {
    button.addEventListener('click', playRound);
}

function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}

function getPlayerChoice() {
    const buttons = document.querySelectorAll('.gameButton');
    for(const button of buttons) {
        return button.getAttribute('id');
    }
}

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const matchResult = document.querySelector('#match-result');

    if (playerChoice === computerChoice) {
        matchResult.textContent = `That's a tie! Both player chose ${playerChoice  }!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        matchResult.textContent = `You win! Your ${playerChoice} beats the player's ${computerChoice}!`;
        if(playerScore === maxScore) {
            matchResult.textContent = `GAME IS OVER! You won. Your score is: ${playerScore}!`;
        }
    } else {
        computerScore++;
        matchResult.textContent = `Opponent wins! Their ${computerChoice} beats your ${playerChoice}!`;
        if(computerScore === maxScore) {
            matchResult.textContent = `GAME IS OVER! Your opponent won. Their score is: ${computerScore}!`;
        }
    }

    if(playerScore === maxScore || computerScore === maxScore) {
        for(const button of buttons) {
            button.disabled = true;
        }
    }

    const playerInfo = document.querySelector('#player-score');
    const computerInfo = document.querySelector('#computer-score');
    playerInfo.textContent = `Player's Score is ${playerScore}!`;
    computerInfo.textContent = `Computer's Score is ${computerScore}!`;
}