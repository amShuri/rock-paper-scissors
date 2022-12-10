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
    const matchResults = document.querySelector('#match-result');

    if (playerChoice === computerChoice) {
        matchResults.textContent = `That's a tie! Both player chose ${playerChoice  }!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        matchResults.textContent = `You win! Your ${playerChoice} beats the player's ${computerChoice}!`;
    } else {
        matchResults.textContent = `Opponent wins! Their ${computerChoice} beats your ${playerChoice}!`;
    }
}

const buttons = document.querySelectorAll('.gameButton');
for(const button of buttons) {
    button.addEventListener('click', playRound);
}