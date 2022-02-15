// Play 5-round game.
// function game() {
//   let userScore = 0;
//   let computerScore = 0;

// //   for (let i = 1; i <= 5; i++) {
// //     let winner = playOneRound();
// //     if (winner === 'user') {
// //       userScore++;
// //     } else if (winner === 'computer') {
// //       computerScore++;
// //     }
// //     announceCurrentScore(userScore, computerScore);
// //   }
// //   announceGameTotals(userScore, computerScore);
// // }

function playOneRound() {
  let computerSelection = getComputerPlay();
  let userSelection = getUserPlay();
  let roundWinner = determineRoundWinner(computerSelection, userSelection);
  return roundWinner;
}

function getComputerPlay() {
  let options = ['rock', 'paper', 'scissor'];
  let random = Math.floor(Math.random() * options.length);
  computerSelection = options[random];
  return computerSelection;
}

function getUserPlay() {
  const rockButton = document.querySelector('#rock');
  const paperButton = document.querySelecrtor('#paper');
  const scissorButton = document.querySelecrtor('#scissor');

  const buttonContainer = document.querySelector('.button-container');
  let userSelection = buttonContainer.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'DIV') event.target.value;
  });
  return userSelection;
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

// Events
playGame();

function playGame() {
  const playButton = document.querySelector('#play-button');
  const gameView = document.querySelector('.game');

  playButton.addEventListener('click', (event) => {
    gameView.classList.remove('hidden');
    playButton.classList.add('hidden');
  });
}
