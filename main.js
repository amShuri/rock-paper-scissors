window.addEventListener('load', setProfilePictures);

const playerVictories = document.querySelector('#player-victories');
const computerVictories = document.querySelector('#computer-victories');
const matchStats = {
    playerScore: 0,
    computerScore: 0,
    tieScore: 0,
    playerWins: 0,
    computerWins: 0,
    maxScore: 5
}

const btnContainer = document.querySelector('.button-container');
const computerButtons = document.querySelectorAll('.computer-button');
const playerButtons = document.querySelectorAll('.player-button');

for(const playerButton of playerButtons) {
    const playerChoice = playerButton.getAttribute('id');
    playerButton.addEventListener('click', playRound.bind(null, playerChoice));
}

function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const matchResult = document.querySelector('#match-result');
    const playerProfile = document.querySelector('.player-profile');
    const computerProfile = document.querySelector('.computer-profile');

    if(playerChoice === 'rock') {
        playerProfile.setAttribute('src', 'images/user-rock.jpg');
    } else if (playerChoice === 'paper') {
        playerProfile.setAttribute('src', 'images/user-paper.jpg');
    } else if (playerChoice === 'scissors') {
        playerProfile.setAttribute('src', 'images/user-scissors.jpg');
    }
    if(computerChoice === 'rock') {
        computerProfile.setAttribute('src', 'images/computer-rock.jpg');
    } else if (computerChoice === 'paper') {
        computerProfile.setAttribute('src', 'images/computer-paper.jpg');
    } else if (computerChoice === 'scissors') {
        computerProfile.setAttribute('src', 'images/computer-scissors.jpg');
    }

    if (playerChoice === computerChoice) {
        matchStats.tieScore++;
        matchResult.textContent = `That's a tie! ${playerChoice} vs ${computerChoice}!`;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        matchStats.playerScore++;
        matchResult.textContent = `You win! ${playerChoice} vs ${computerChoice}!`;
        if(matchStats.playerScore === matchStats.maxScore) {
            matchResult.textContent = `THE MATCH IS OVER! You have won!`;
        }
    } else {
        matchStats.computerScore++;
        matchResult.textContent = `Opponent wins! ${computerChoice} vs ${playerChoice}!`;
        if(matchStats.computerScore === matchStats.maxScore) {
            matchResult.textContent = `THE MATCH IS OVER! Your opponent has won!`;
        }
    }

    if(matchStats.playerScore === matchStats.maxScore || matchStats.computerScore === matchStats.maxScore) {
        matchStats.playerWins++;
        for(const playerButton of playerButtons) {
            playerButton.disabled = true;
        }
        for(const computerButton of computerButtons) {
            computerButton.disabled = true;
        }
    }
    logScore();
    highlightVictories();
}

function logScore() {
    const playerInfo = document.querySelector('#player-score');
    const computerInfo = document.querySelector('#computer-score');
    const tieInfo = document.querySelector('#tie-score');
    tieInfo.textContent = `Ties: ${matchStats.tieScore}`
    playerInfo.textContent = `Your Score: ${matchStats.playerScore}`;
    computerInfo.textContent = `Opponent Score: ${matchStats.computerScore}`;
    playerVictories.textContent = `Victories: ${matchStats.playerWins}`;
    computerVictories.textContent = `Victories: ${matchStats.computerWins}`;
}

function highlightVictories() {
    if(matchStats.playerWins > matchStats.computerWins) {
        playerVictories.style.color = "limegreen";
        computerVictories.style.color = "#da3939"
    } else if (matchStats.computerWins > matchStats.playerWins) {
        playerVictories.style.color = "#da3939";
        computerVictories.style.color = "limegreen"
    } else if (matchStats.playerWins > 0 && matchStats.playerWins === matchStats.computerWins) {
        playerVictories.style.color = "blue";
        computerVictories.style.color = "blue"
    }
}

function setProfilePictures() {
    const playerProfile = document.querySelector('.player-profile');
    const computerProfile = document.querySelector('.computer-profile');
    playerProfile.setAttribute('src', 'images/profile.jpg');
    computerProfile.setAttribute('src', 'images/profile.jpg');
}