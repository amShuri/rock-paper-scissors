function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}


//this part of the code seems a bit messy to me and I plan
//to come back to it once we revisit the code on TOP's lesson
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'paper') {
        return `That's a tie. ${playerSelection} can't beat ${computerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissors'){
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}