const gameController = () => {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  const gameScore = { human: 0, computer: 0 };
  const gameState = { roundResult: null, isGameOver: false };
  let computerChoice;

  const getGameOptions = () => gameOptions;
  const getGameScore = () => gameScore;
  const getGameState = () => gameState;
  const getComputerChoice = () => computerChoice;

  const setWinner = (player) => {
    if (player === "Human") {
      gameScore.human++;
    } else {
      gameScore.computer++;
    }

    gameState.roundResult = `${player}++`;
  };

  const resetGame = () => {
    gameScore.human = 0;
    gameScore.computer = 0;
    gameState.roundResult = null;
    gameState.isGameOver = false;
    computerChoice = null;
  };

  const playRound = (humanChoice) => {
    if (gameScore.human === 5 || gameScore.computer === 5) {
      gameState.isGameOver = true;
      return;
    }

    // Randomly choose a number for the computer.
    computerChoice = Math.floor(Math.random() * gameOptions.length);

    if (humanChoice - computerChoice === 0) {
      gameState.roundResult = "TIE";
      return;
    }

    // The win condition will be calculated by adding the choices together
    // based on their index position. 0 = rock, 1 = paper, 2 = scissors.
    // The result of adding the different values are as follows:
    // 1 means whoever chose Paper wins because "paper(1) + rock(0) = 1"
    // 2 means whoever chose Rock wins becase "rock(0) + scissors(2) = 2"
    // 3 means whoever chose Scissors wins because "scissors(2) + paper(1) = 3"
    switch (humanChoice + computerChoice) {
      case 1:
        return humanChoice === 1 ? setWinner("Human") : setWinner("Computer");
      case 2:
        return humanChoice === 0 ? setWinner("Human") : setWinner("Computer");
      case 3:
        return humanChoice === 2 ? setWinner("Human") : setWinner("Computer");
    }
  };

  return {
    playRound,
    getGameScore,
    getGameOptions,
    getGameState,
    getComputerChoice,
    resetGame,
  };
};

const screenController = () => {
  const game = gameController();
  const gameOptions = game.getGameOptions();
  const board = document.querySelector(".board");
  const resetButton = document.querySelector(".reset-btn");

  const updatePlayerScores = (human, computer) => {
    const humanScore = document.querySelector(".human-score");
    const computerScore = document.querySelector(".computer-score");
    humanScore.textContent = human;
    computerScore.textContent = computer;
  };

  const updatePlayerChoice = (human, computer) => {
    const humanChoice = document.querySelector(".human-choice");
    const computerChoice = document.querySelector(".computer-choice");
    humanChoice.textContent = human;
    computerChoice.textContent = computer;
  };

  const updateRoundResult = (result) => {
    const roundResult = document.querySelector(".round-result");
    roundResult.textContent = result;
  };

  const unhighlightPlayerOptions = () => {
    document.querySelectorAll(".option").forEach((option) => {
      option.classList.remove("human-selected", "computer-selected");
    });
  };

  const highlightPlayerOption = (human, computer) => {
    board
      .querySelector(`img[data-human-index="${human}"]`)
      .classList.add("human-selected");

    board
      .querySelector(`img[data-computer-index="${computer}"]`)
      .classList.add("computer-selected");
  };

  const clickHandlerReset = () => {
    if (!confirm("Reset the game?")) return;

    // clean up the board.
    unhighlightPlayerOptions();
    updateRoundResult("");
    updatePlayerChoice("", "");
    updatePlayerScores(0, 0);
    game.resetGame();
  };

  const clickHandlerBoard = (e) => {
    const selectedOption = e.target;
    if (!selectedOption.classList.contains("human-option")) return;
    const humanChoice = Number(selectedOption.dataset.humanIndex);

    // playRound() must be called before we can get the computer's choice.
    game.playRound(humanChoice);
    const gameState = game.getGameState();
    if (gameState.isGameOver) return;
    updateRoundResult(gameState.roundResult);

    const computerChoice = game.getComputerChoice();
    const playerScores = game.getGameScore();

    // Unhighlight highlighted options before highlighting new ones.
    unhighlightPlayerOptions();
    highlightPlayerOption(humanChoice, computerChoice);
    updatePlayerChoice(gameOptions[humanChoice], gameOptions[computerChoice]);
    updatePlayerScores(playerScores.human, playerScores.computer);
  };

  board.addEventListener("click", clickHandlerBoard);
  resetButton.addEventListener("click", clickHandlerReset);
};

screenController();
