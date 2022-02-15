const buttons = document.querySelector('.user-options');

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
    console.log(`Tie! You both played ${userSelection}.`);
    roundWinner = null;
    return;
  } else if (
    (userSelection === 'rock' && computerSelection === 'scissor') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissor' && computerSelection === 'paper')
  ) {
    userSelection = capitalize(userSelection);
    console.log(`You won! ${userSelection} beats ${computerSelection}!`);
    roundWinner = 'user';
  } else {
    console.log(
      `You lose this one. The computer played ${computerSelection}, which beats your ${userSelection}.`
    );
    roundWinner = 'computer';
  }
  return roundWinner;
}

function playRound(userPick) {
  let userSelection = userPick;
  let computerSelection = getComputerPlay();
  let roundWinner = determineRoundWinner(computerSelection, userSelection);
}

// Event Listeners
buttons.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    let userPick = e.target.value;
    playRound(userPick);
  }
});
