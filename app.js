const game = document.getElementById('game');
const outro = document.getElementById('outro');
const resetContainer = document.querySelector('.reset-container');
const playAgain = document.querySelector('#play-again');

const lossGif = document.querySelector('#loss-gif');
const winGif = document.querySelector('#win-gif');
const buttons = document.querySelector('.user-options');
const displayDiv = document.querySelector('#display');
const userChoice = document.querySelector('#user-choice');
const compChoice = document.querySelector('#comp-choice');
let userScoreDiv = document.querySelector('#user-score');
let compScoreDiv = document.querySelector('#comp-score');

let runningUserTotal = 0;
let runningCompTotal = 0;

function capitalize(str) {
  let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return newStr;
}

function getComputerPlay() {
  let options = ['rock', 'paper', 'scissor'];
  let random = Math.floor(Math.random() * options.length);
  computerSelection = options[random];
  return computerSelection;
}

function determineRoundWinner(computerSelection, userSelection) {
  let roundWinner;
  if (userSelection === computerSelection) {
    displayDiv.textContent = `Tie! You both played ${userSelection}.`;
    roundWinner = null;
    return;
  } else if (
    (userSelection === 'rock' && computerSelection === 'scissor') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissor' && computerSelection === 'paper')
  ) {
    displayDiv.textContent = `You won! ${capitalize(
      userSelection
    )} beats ${computerSelection}!`;
    roundWinner = 'user';
  } else {
    displayDiv.textContent = `You lose this one. The computer played ${computerSelection}, which beats your ${userSelection}.`;
    roundWinner = 'computer';
  }
  return roundWinner;
}

function displayPicks(userSelection, computerSelection, roundWinner) {
  userChoice.textContent = userSelection;
  compChoice.textContent = computerSelection;
  switch (roundWinner) {
    case 'user':
      userChoice.style.color = 'green';
      compChoice.style.color = 'red';
      break;
    case 'computer':
      userChoice.style.color = 'red';
      compChoice.style.color = 'green';
      break;
    default:
      userChoice.style.color = '#333';
      compChoice.style.color = '#333';
      break;
  }
}

function addScore(roundWinner) {
  if (roundWinner === 'user') {
    ++runningUserTotal;
    userScoreDiv.textContent = runningUserTotal;
  } else if (roundWinner === 'computer') {
    ++runningCompTotal;
    compScoreDiv.textContent = runningCompTotal;
  } else {
    return;
  }
}

function endGame() {
  game.classList.add('disabled');
  game.classList.add('hidden');
}

function promptReset() {
  resetContainer.classList.remove('hidden');
  resetContainer.classList.add('show-exit');

  if (runningCompTotal === 5) {
    outro.textContent = `The computer beat you, ${runningCompTotal} to ${runningUserTotal}.`;
    lossGif.classList.remove('hidden');
  } else {
    outro.textContent = `You gave that computer the BUSINESS, ${runningUserTotal} to ${runningCompTotal}!`;
    winGif.classList.remove('hidden');
  }
}

function playRound(userPick) {
  let userSelection = userPick;
  let computerSelection = getComputerPlay();
  let roundWinner = determineRoundWinner(computerSelection, userSelection);
  displayPicks(userSelection, computerSelection, roundWinner);
  addScore(roundWinner);
}

// Event Listener to play
buttons.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    let userPick = e.target.value;

    playRound(userPick);

    if (runningCompTotal === 5 || runningUserTotal === 5) {
      endGame();
      promptReset();
    }
  }
});

playAgain.addEventListener('click', () => location.reload());
