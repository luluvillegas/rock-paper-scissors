const options = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function showComputerChoice(computerSelection) {
  const pcArea = document.querySelector(`.pc-area`);
  let existingSelection = document.querySelector(`div.pc-area > button`);
  if (existingSelection) {
    pcArea.removeChild(existingSelection);
  }
  let newSelection = document.createElement(`button`);
  newSelection.classList.add(`btn-computer-selection`);
  if (`${computerSelection}` === `rock`) {
    newSelection.textContent = `👊`;
  } else if (`${computerSelection}` === `paper`) {
    newSelection.textContent = `🖐️`;
  } else {
    newSelection.textContent = `✌️`;
  }
  pcArea.appendChild(newSelection);
}

function setPlayerSelection(e) {
  let playerSelection = e.target.id;
  return playerSelection;
}

function cleanUpPlayerSelection() {
  for (let i = 0; i < playerChoices.length; i++) {
    playerChoices[i].classList.remove(`visited`);
  }
}

function setGameResults() {
  const gameResultsArea = document.querySelector(`.game-results`);

  let pcResults = document.querySelector(`.pc-results`);
  pcResults.textContent = `PC: ${computerCount}`;
  let userResults = document.querySelector(`.user-results`);
  userResults.textContent = `User: ${playerCount}`;

  let existingGameResult = document.querySelector(`.game-results > p`);
  if (existingGameResult) {
    gameResultsArea.removeChild(existingGameResult);
  }
  if (totalRoundsPlayed === 5) {
    let gameResults = document.createElement(`p`);
    gameResults.classList.add(`final-result`);
    if (playerCount === computerCount) {
      gameResults.textContent = `IT'S A TIE!`;
    } else if (playerCount > computerCount) {
      gameResults.textContent = `YOU WIN THE GAME!`;
    } else {
      gameResults.textContent = `THE COMPUTER WINS THE GAME!`;
    }
    gameResultsArea.appendChild(gameResults);
    totalRoundsPlayed = 0;
    computerCount = 0;
    playerCount = 0;
  }
}

function playRound(playerSelection, computerSelection) {
  const roundResults = document.querySelector(`.round-results`);
  let existingResult = document.querySelector(`.round-results > p`);
  if (existingResult) {
    roundResults.removeChild(existingResult);
  }
  let newResult = document.createElement(`p`);
  if (playerSelection === computerSelection) {
    newResult.textContent = `It's a tie!`;
  } else if (playerSelection === `rock`) {
    if (computerSelection === `paper`) {
      newResult.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    } else if (computerSelection === `scissors`) {
      newResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    }
  } else if (playerSelection === `paper`) {
    if (computerSelection === `rock`) {
      newResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    } else if (computerSelection === `scissors`) {
      newResult.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    }
  } else if (playerSelection === `scissors`) {
    if (computerSelection === `rock`) {
      newResult.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}`;
      computerCount++;
    } else if (computerSelection === `paper`) {
      newResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
      playerCount++;
    }
  }
  roundResults.appendChild(newResult);
  totalRoundsPlayed++;
  setGameResults();
}

let playerCount = 0;
let computerCount = 0;
let totalRoundsPlayed = 0;

let playerChoices = document.querySelectorAll(`.btn-player-selection`);
playerChoices = Array.from(playerChoices);
for (let i = 0; i < playerChoices.length; i++) {
  playerChoices[i].addEventListener(`click`, (e) => {
    cleanUpPlayerSelection();
    e.target.classList.add(`visited`);
    let playerSelection = setPlayerSelection(e);
    let computerSelection = getComputerChoice();
    showComputerChoice(computerSelection);
    playRound(playerSelection, computerSelection);
  });
}
