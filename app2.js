const buttons = document.querySelector('.user-options');
const displayDiv = document.querySelector('#display');
const userChoice = document.querySelector('#user-choice');
const compChoice = document.querySelector('#comp-choice');

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
    userSelection = capitalize(userSelection);
    displayDiv.textContent = `You won! ${userSelection} beats ${computerSelection}!`;
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
  console.log(roundWinner);
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

function playRound(userPick) {
  let userSelection = userPick;
  let computerSelection = getComputerPlay();
  let roundWinner = determineRoundWinner(computerSelection, userSelection);
  displayPicks(userSelection, computerSelection, roundWinner);
}

// Event Listener to play
buttons.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    let userPick = e.target.value;
    playRound(userPick);
  }
});
