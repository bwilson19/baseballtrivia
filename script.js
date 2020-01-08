// Global Variables

const questionField = document.querySelector('.question');
const correctField = document.querySelector('.correct');
const wrongField1 = document.querySelector('.wrong1');
const wrongField2 = document.querySelector('.wrong2');
const wrongField3 = document.querySelector('.wrong3');
const runs = document.querySelector('#run-count');
const outs = document.querySelector('#out-count');
const hits = document.querySelector('#hit-count');
const triviaBox = document.querySelectorAll('.trivia-box');
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
const pitchClock = document.querySelector('#pitch-clock');
const nav = document.querySelector('nav');
const restartButton = document.querySelector('#restart-button');
const directionsButton = document.querySelector('#directions-button');
const directionsMenu = document.querySelector('#directions-menu');
const closeWindowButton = document.querySelector('#close-window');
const multiple = document.querySelector('.multiple-choice');

// Placeholders

let currentRuns = 0;
let currentOuts = 0;
let currentRunners = 0;
let currentHits = 0;
let fieldNumber = 0;

// Question objects

class Question {
  constructor(question, correct, wrong1, wrong2, wrong3) {
    this.question = question;
    this.correct = correct;
    this.wrong1 = wrong1;
    this.wrong2 = wrong2;
    this.wrong3 = wrong3;
  }
}

let question1 = new Question(
  'Who was the NL MVP?',
  '<img src="images/bellinger.jpg" alt="Cody Bellinger" />Cody Bellinger',
  '<img src="images/arenado.jpg" alt="Nolan Arenado" />Nolan Arenado',
  '<img src="images/bryant.jpg" alt="Kris Bryant" />Kris Bryant',
  '<img src="images/yelich.jpg" alt="Christian Yelich" />Christian Yelich'
);

let question2 = new Question(
  'Who was the AL MVP?',
  '<img src="images/trout.jpg" alt="Mike Trout" />Mike Trout',
  '<img src="images/judge.jpg" alt="Aaron Judge" />Aaron Judge',
  '<img src="images/lindor.jpg" alt="Francisco Lindor" />Francisco Lindor',
  '<img src="images/springer.jpg" alt="George Springer" />George Springer'
);

let question3 = new Question(
  'Who won the World Series?',
  '<img src = "images/nationals.png" alt = "Washington Nationals" /> Washington Nationals',
  '<img src="images/yankees.png" alt="New York Yankees" />New York Yankees',
  '<img src="images/astros.png" alt="Houston Astros" />Houston Astros',
  '<img src="images/giants.png" alt="San Francisco Giants" />San Francisco Giants'
);

let question4 = new Question(
  'Who was the AL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question5 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question6 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question7 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question8 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question9 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question10 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question11 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question12 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let question13 = new Question(
  'Who was the NL Cy Young?',
  'Mike Trout',
  'Jacob DeGrom',
  'Nolan Arenado',
  'Christian Yelich'
);

let questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13
];

let questionTracker = [];

// event listeners

startGameButton.addEventListener('click', generateQuestion);
correctField.addEventListener('click', playerHit);
wrongField1.addEventListener('click', playerOut);
wrongField2.addEventListener('click', playerOut);
wrongField3.addEventListener('click', playerOut);
restartButton.addEventListener('click', restartGame);
nextButton.addEventListener('click', resetOverlay);
startGameButton.addEventListener('click', startGame);
restartWin.addEventListener('click', restartGame);
closeWindowButton.addEventListener('click', closeWindow);
restartLoss.addEventListener('click', restartGame);
restartButton.addEventListener('click', restartGame);
directionsButton.addEventListener('click', directionsMenuToggle);
muteButton.addEventListener('click', muteMusic);

// creates a random ordered question

function generateQuestion() {
  let randomQuestionNumber = Math.floor(Math.random() * questionArray.length);
  let currentQuestionNumber = randomQuestionNumber;
  questionField.innerHTML = questionArray[currentQuestionNumber].question;
  correctField.innerHTML = questionArray[currentQuestionNumber].correct;
  wrongField1.innerHTML = questionArray[currentQuestionNumber].wrong1;
  wrongField2.innerHTML = questionArray[currentQuestionNumber].wrong2;
  wrongField3.innerHTML = questionArray[currentQuestionNumber].wrong3;
  questionTracker.push(questionArray[currentQuestionNumber]);
  questionArray.splice(currentQuestionNumber, 1);
  console.log(questionArray);
  console.log(questionTracker);
  // below from https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
  for (var i = multiple.children.length; i >= 0; i--) {
    multiple.appendChild(multiple.children[(Math.random() * i) | 0]);
  }
}

// resets original question array on restart

function resetQuestions() {
  for (var i = 0; i < questionTracker.length; i++) {
    questionArray.push(questionTracker[i]);
    questionTracker.splice(i, 1);
    i--;
  }
  console.log(questionArray);
  console.log(questionTracker);
}

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

// pitch clock timer (20 second time limit on questions) (helped by https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz)

var startTimeInt = 20;
var currentTimeInt = startTimeInt;
var interval = undefined;

function startClock() {
  if (!interval) {
    pitchClock.innerHTML = ':' + currentTimeInt;
    interval = setInterval(timeOut, 1000);
  }
}

function stopClock() {
  clearInterval(interval);
  interval = undefined;
}

function resetClock() {
  currentTimeInt = startTimeInt;
  pitchClock.innerHTML = ':' + currentTimeInt;
}

function timeOut() {
  currentTimeInt--;
  if (currentTimeInt >= 10) {
    pitchClock.innerHTML = ':' + currentTimeInt;
  } else {
    pitchClock.innerHTML = ':0' + currentTimeInt;
  }
  if (currentTimeInt == 0 && currentOuts < 2) {
    pitchClock.innerHTML = 'Out!';
    stopClock();
    playerOut();
  } else if (currentTimeInt == 0 && currentOuts >= 2) {
    pitchClock.innerHTML = 'Out!';
    playerOut();
    stopClock();
  }
}

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
    nextOverlay.style.zIndex = 3;
    hitSound.play();
    hitSound.volume = 0.2;
    pitchClock.innerHTML = 'Run!';
    stopClock();
  } else {
    hits.innerHTML = 'Hits: ' + (currentHits += 1);
    currentHits + 1;
    currentRunners += 1;
    fieldNumber += 1;
    field.setAttribute('src', fieldOptions[fieldNumber]);
    nextOverlay.style.zIndex = 3;
    hitSound.play();
    hitSound.volume = 0.2;
    pitchClock.innerHTML = 'Hit!';
    stopClock();
  }
}

// if user scores 10 runs, display win screen and restart option

function tenRuns() {
  winScreen.style.display = 'block';
  currentRuns + 1;
  highScore = 10;
  localStorage.setItem('highScore', highScore);
}

//if answer is incorrect
function playerOut(evt) {
  if (currentOuts < 2) {
    currentOuts += 1;
    outs.innerHTML = 'Outs: ' + currentOuts;
    booSound.play();
    booSound.volume = 0.2;
    // evt.target.style.color = 'red';
    // evt.target.style.textDecoration = 'line-through';
    pitchClock.innerHTML = 'Out!';
    stopClock();
  } else {
    lossResult.style.zIndex = '3';
    outs.innerHTML = 'Outs: ' + 3;
    currentOuts = 0;
    booSound.play();
    booSound.volume = 0.2;
    pitchClock.innerHTML = 'Out!';
    stopClock();
  }
}

// restart game option or after button click

function restartGame() {
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
  directionsMenu.style.display = 'none';
  highScoreCounter.innerHTML = 'High Score: ' + highScore;
  winScreen.style.display = 'none';
  nav.style.display = 'none';
  startGameOverlay.style.display = 'flex';
  resetQuestions();
}

// bring up an overlay screen in between questions

function resetOverlay() {
  if (currentRuns < 10) {
    nextOverlay.style.zIndex = 0;
    multiple.style.color = 'white';
    multiple.style.textDecoration = 'none';
    resetClock();
    startClock();
    generateQuestion();
  }
}

// start game overlay
function startGame() {
  startGameOverlay.style.display = 'none';
  music.play();
  music.volume = 0.1;
  resetClock();
  startClock();
  nav.style.display = 'block';
}

// directions menu overlay toggle

function directionsMenuToggle() {
  if (directionsMenu.style.display === 'none') {
    directionsMenu.style.display = 'flex';
  } else {
    directionsMenu.style.display = 'none';
  }
}

// mute/play background music

function muteMusic() {
  if (
    music.muted == false &&
    hitSound.muted == false &&
    booSound.muted == false
  ) {
    music.muted = true;
    hitSound.muted = true;
    booSound.muted = true;
    muteButton.setAttribute('src', 'images/play.png');
  } else {
    music.muted = false;
    hitSound.muted = false;
    booSound.muted = false;
    muteButton.setAttribute('src', 'images/mute.png');
  }
}

// close directions menu button

function closeWindow() {
  directionsMenu.style.display = 'none';
}
