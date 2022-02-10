// Play 5-round game.
function game() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let winner = playOneRound();
    if (winner === 'user') {
      userScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
    announceCurrentScore(userScore, computerScore);
  }
  announceGameTotals(userScore, computerScore);
}

function playOneRound() {
  let computerSelection = getComputerPlay();
  let userSelection = getUserPlay();
  let roundWinner = determineRoundWinner(computerSelection, userSelection);
  return roundWinner;
}

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

function getUserPlay() {
  userSelection = prompt(
    'Do you want to pick rock, paper, or scissor?'
  ).toLowerCase();
  if (
    !(
      userSelection === 'rock' ||
      userSelection === 'paper' ||
      userSelection === 'scissor'
    )
  ) {
    alert(
      'You need to choose either rock, paper or scissor if you want to play.'
    );
    getUserPlay();
  } else {
    return userSelection;
  }
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

function announceCurrentScore(userScore, computerScore) {
  console.log(`Current score:
              You: ${userScore}
              CPU: ${computerScore}`);
  return { userScore, computerScore };
}

function announceGameTotals(userScore, computerScore) {
  if (userScore > computerScore) {
    alert(
      `You did it. You've beat the computer, ${userScore} to ${computerScore}!`
    );
  } else if (userScore === computerScore) {
    alert(`You and the computer tied at ${userScore}.`);
  } else {
    alert(`You lost to the computer, ${computerScore} to ${userScore}.`);
  }
}