function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissors[randomNumber];
}