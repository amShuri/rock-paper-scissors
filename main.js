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

//There's a TypeError when the prompt's value is null
//because the string methods can't be applied to it (I think),
//I don't know how to fix this yet so I'll come back to it later too
function game() {
    const pattern = /\s/g;

    for(let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        let playerChoice = prompt('Enter your choice', 'paper').toLowerCase().replace(pattern, '');
        //when value is null the prompt throws a TypeError because of the string method
        //will come back to this later
        if(playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper') {
            i--;
            console.warn('Wrong input. Try again.');
        } else{
            console.log(`Round number ${i + 1}: ` + playRound(playerChoice, computerChoice));
        }
        
    }
}

game()