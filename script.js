const losers = document.querySelectorAll('.loser');
const question = document.querySelector('.question');
const winner = document.querySelectorAll('.winner');
const runs = document.querySelector('#run-count');
const outs = document.querySelector('#out-count');
const runners = document.querySelector('#runner-count');
const triviaBox = document.querySelectorAll('.trivia-box');
const winResult = document.querySelector('#player-win');
const lossResult = document.querySelector('#player-loss');
const restart = document.querySelector('#restart');
const field = document.querySelector('#field');
const nextButton = document.querySelector('#next');
const nextOverlay = document.querySelector('#next-overlay');
const startGameButton = document.querySelector('#start');
const startGameOverlay = document.querySelector('#start-game');

let currentRuns = 0;
let currentOuts = 0;
let currentInning = 0;
let currentRunners = 0;
let zIndex = 0;
let questionNumber = 1;
let fieldNumber = 0;

let fieldOptions = [
  '/images/baseball0.png',
  '/images/baseball1.png',
  '/images/baseball2.png',
  '/images/baseball3.png'
];

//add event listeners to every question
for (let i = 0; i < winner.length; i++) {
  winner[i].addEventListener('click', playerWins);
}

for (let i = 0; i < losers.length; i++) {
  losers[i].addEventListener('click', playerLoses);
}

nextButton.addEventListener('click', resetOverlay);
startGameButton.addEventListener('click', startGame);

//if answer is correct
function playerWins() {
  if (currentRunners >= 3) {
    runs.innerHTML = 'Runs: ' + (currentRuns += 1);
    nextOverlay.style.zIndex = 100;
  } else {
    currentRunners += 1;
    fieldNumber += 1;
    field.setAttribute('src', fieldOptions[fieldNumber]);
    nextOverlay.style.zIndex = 100;
  }
}

//if answer is incorrect
function playerLoses(evt) {
  if (currentOuts < 2) {
    currentOuts += 1;
    outs.innerHTML = 'Outs: ' + currentOuts;
    evt.target.style.color = 'red';
    evt.target.style.textDecoration = 'line-through';
  } else {
    lossResult.style.zIndex = '100';
    outs.innerHTML = 'Outs: ' + 3;
    currentOuts = 0;
    for (let i = 0; i < triviaBox.length; i++) {
      triviaBox[i].style.zIndex = 0;
    }
    questionNumber = 1;
  }
}

// restart game after loss
restart.addEventListener('click', restartGame);

function restartGame() {
  triviaBox[0].style.zIndex = zIndex + 3;
  lossResult.style.zIndex = '0';
  currentOuts = 0;
  currentRunners = 0;
  currentRuns = 0;
  runs.innerHTML = 'Runs: ' + currentRuns;
  outs.innerHTML = 'Outs: ' + currentOuts;
  field.setAttribute('src', fieldOptions[0]);
  fieldNumber = 0;
  startGameOverlay.style.display = 'block';
  for (let i = 0; i < losers.length; i++) {
    losers[i].style.color = 'white';
    losers[i].style.textDecoration = 'none';
  }
}

// nextOverlay to bring up next question

function resetOverlay() {
  nextOverlay.style.zIndex = 0;
  triviaBox[questionNumber].style.zIndex = zIndex + 3;
  questionNumber += 1;
}

// start game overlay to begin game
function startGame() {
  startGameOverlay.style.display = 'none';
}
