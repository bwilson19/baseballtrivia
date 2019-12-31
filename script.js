// Global Variables
const losers = document.querySelectorAll('.loser');
const question = document.querySelector('.question');
const winner = document.querySelectorAll('.winner');
const runs = document.querySelector('#run-count');
const outs = document.querySelector('#out-count');
const hits = document.querySelector('#hit-count');
const triviaBox = document.querySelectorAll('.trivia-box');
const winResult = document.querySelector('#player-win');
const lossResult = document.querySelector('#player-loss');
const restartLoss = document.querySelector('#restart-loss');
const restartWin = document.querySelector('#restart-win');
const field = document.querySelector('#field');
const nextButton = document.querySelector('#next');
const nextOverlay = document.querySelector('#next-overlay');
const startGameButton = document.querySelector('#start');
const startGameOverlay = document.querySelector('#start-game');
const music = document.querySelector('#music');
const muteButton = document.querySelector('#mute');
const hitSound = document.querySelector('#hit-sound');
const booSound = document.querySelector('#boo-sound');
const highScoreCounter = document.querySelector('#high-score');
const clearHighScoreButton = document.querySelector('#clear-score');
const winScreen = document.querySelector('#end-game');

let currentRuns = 0;
let currentOuts = 0;
let currentInning = 0;
let currentRunners = 0;
let currentHits = 0;
let zIndex = 0;
let questionNumber = 1;
let fieldNumber = 0;

// preserve high score across sessions & clear score button

let highScore = localStorage.getItem('highScore') || 0;
highScoreCounter.innerHTML = 'High Score: ' + highScore;

clearHighScoreButton.addEventListener('click', clearScore);

function clearScore() {
  highScore = 0;
  highScoreCounter.innerHTML = 'High Score: ' + highScore;
  localStorage.clear();
}

// field image arrays
let fieldOptions = [
  'images/baseball0.png',
  'images/baseball1.png',
  'images/baseball2.png',
  'images/baseball3.png'
];

//add event listeners to every question
for (let i = 0; i < winner.length - 1; i++) {
  winner[i].addEventListener('click', playerHit);
}

for (let i = 0; i < losers.length; i++) {
  losers[i].addEventListener('click', playerOut);
}

nextButton.addEventListener('click', resetOverlay);
startGameButton.addEventListener('click', startGame);

//if answer is correct
function playerHit() {
  if (currentRunners >= 3) {
    currentRuns + 1;
    runs.innerHTML = 'Runs: ' + (currentRuns += 1);
    if (currentRuns > highScore) {
      highScore = currentRuns;
      localStorage.setItem('highScore', highScore);
    }
    currentHits + 1;
    hits.innerHTML = 'Hits: ' + (currentHits += 1);
    nextOverlay.style.zIndex = 100;
    hitSound.play();
  } else {
    hits.innerHTML = 'Hits: ' + (currentHits += 1);
    currentHits + 1;
    currentRunners += 1;
    fieldNumber += 1;
    field.setAttribute('src', fieldOptions[fieldNumber]);
    nextOverlay.style.zIndex = 100;
    hitSound.play();
  }
}

//if answer is incorrect
function playerOut(evt) {
  if (currentOuts < 2) {
    currentOuts += 1;
    outs.innerHTML = 'Outs: ' + currentOuts;
    evt.target.style.color = 'red';
    evt.target.style.textDecoration = 'line-through';
    booSound.play();
  } else {
    lossResult.style.zIndex = '100';
    outs.innerHTML = 'Outs: ' + 3;
    currentOuts = 0;
    booSound.play();
    for (let i = 0; i < triviaBox.length; i++) {
      triviaBox[i].style.zIndex = 0;
    }
    questionNumber = 1;
  }
}

// restart game option after 3 outs
restartLoss.addEventListener('click', restartGame);

function restartGame() {
  triviaBox[0].style.zIndex = zIndex + 3;
  lossResult.style.zIndex = '0';
  currentOuts = 0;
  currentRunners = 0;
  currentRuns = 0;
  currentHits = 0;
  hits.innerHTML = 'Hits: ' + currentRuns;
  runs.innerHTML = 'Runs: ' + currentRuns;
  outs.innerHTML = 'Outs: ' + currentOuts;
  field.setAttribute('src', fieldOptions[0]);
  fieldNumber = 0;
  highScoreCounter.innerHTML = 'High Score: ' + highScore;
  winScreen.style.display = 'none';
  startGameOverlay.style.display = 'flex';
  for (let i = 0; i < losers.length; i++) {
    losers[i].style.color = 'white';
    losers[i].style.textDecoration = 'none';
  }
}

// bring up an overlay screen in between questions

function resetOverlay() {
  if (currentRuns < 10) {
    nextOverlay.style.zIndex = 0;
    triviaBox[questionNumber].style.zIndex = zIndex + 3;
    questionNumber += 1;
  }
}

// start game overlay
function startGame() {
  startGameOverlay.style.display = 'none';
  music.play();
}

// mute/play background music
muteButton.addEventListener('click', muteMusic);

function muteMusic() {
  if (music.muted == false) {
    music.muted = true;
    mute.setAttribute('src', 'images/play.png');
  } else {
    music.muted = false;
    mute.setAttribute('src', 'images/mute.png');
  }
}

// add win game screen for question 13 (10 runs), with a restart option

let x = winner.length - 1;

winner[x].addEventListener('click', tenRuns);
restartWin.addEventListener('click', restartGame);

function tenRuns() {
  winScreen.style.display = 'block';
  for (let i = 0; i < triviaBox.length; i++) {
    triviaBox[i].style.zIndex = 0;
  }
  currentRuns + 1;
  highScore = 10;
  localStorage.setItem('highScore', highScore);
  questionNumber = 1;
}
