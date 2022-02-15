const playButton = document.getElementById('play-button');
const game = document.getElementsByClassName('game');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const options = {
  name: 'rock',
};

// Event Listeners
playButton.addEventListener('click', () => {
  playButton.classList.add('hidden');
  game.classList.remove('hidden');
});
