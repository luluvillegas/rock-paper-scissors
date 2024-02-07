const options = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
  let selection = prompt(`What is your choice: Rock, Paper or Scissors?`);
  return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = `It's a tie!`;
  } else if (playerSelection === `rock`) {
    if (computerSelection === `paper`) {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    } else if (computerSelection === `scissors`) {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    }
  } else if (playerSelection === `paper`) {
    if (computerSelection === `rock`) {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    } else if (computerSelection === `scissors`) {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    }
  } else if (playerSelection === `scissors`) {
    if (computerSelection === `rock`) {
      result = `You lose! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    } else if (computerSelection === `paper`) {
      result = `You win! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    }
  } else {
    result = `Something went wrong, it might be the spelling`;
  }
  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    let round = playRound(playerSelection, computerSelection);
    console.log(`Computer seleccion: ` + computerSelection);
    console.log(`Player seleccion: ` + playerSelection);
    console.log(round);
    console.log(`Player: ` + playerCount);
    console.log(`Computer: ` + computerCount);
  }
  if (playerCount === computerCount) {
    gameResult = `It is a tied game`;
  } else if (playerCount > computerCount) {
    gameResult = `You win!`;
  } else {
    gameResult = `The computer wins!`;
  }
  return gameResult;
}

let playerCount = 0;
let computerCount = 0;
let game = playGame();
console.log(game);
