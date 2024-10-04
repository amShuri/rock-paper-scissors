const gameController = () => {
  const gameOptions = ["Rock", "Paper", "Scissors"];

  const logWinner = (result) => {
    console.log(`-- ${result} Wins --`);
  };

  const playRound = (userChoice) => {
    const computerChoice = Math.floor(Math.random() * gameOptions.length);

    // Display the choices of both players before the result is calculated.
    console.log(`User picks: ${gameOptions[userChoice]}.`);
    console.log(`Computer picks: ${gameOptions[computerChoice]}.`);

    if (userChoice - computerChoice === 0) {
      console.log("-- Tie --");
      return;
    }

    // The win condition will be calculated by adding the choices together
    // based on their index position. 0 = rock, 1 = paper, 2 = scissors.
    // The result of adding the different values are as follows:
    // 1 means whoever chose Paper wins because "paper(1) + rock(0) = 1"
    // 2 means whoever chose Rock wins becase "rock(0) + scissors(2) = 2"
    // 3 means whoever chose Scissors wins because "scissors(2) + paper(1) = 3"
    switch (userChoice + computerChoice) {
      case 1:
        return userChoice === 1 ? logWinner("User") : logWinner("Computer");
      case 2:
        return userChoice === 0 ? logWinner("User") : logWinner("Computer");
      case 3:
        return userChoice === 2 ? logWinner("User") : logWinner("Computer");
    }
  };

  return { playRound };
};

const game = gameController();

console.warn(
  "Use game.playRound() to play. Pass in 0 for rock, 1 for paper, or 2 for scissors."
);
