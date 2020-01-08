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
const nextButtonHit = document.querySelector('#nextHit');
const nextButtonOut = document.querySelector('#nextOut');
const hitOverlay = document.querySelector('#hit-overlay');
const outOverlay = document.querySelector('#out-overlay');
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
  'Who was the NL Cy Young winner?',
  '<img src="images/degrom.jpg" alt="Jacob deGrom" />Jacob deGrom',
  '<img src="images/bumgarner.jpg" alt="Madison Bumgarner" />Madison Bumgarner',
  '<img src="images/kershaw.jpg" alt="Clayton Kershaw" />Clayton Kershaw',
  '<img src="images/ryu.jpg" alt="Hyun-Jin Ryu" />Hyun-Jin Ryu'
);

let question5 = new Question(
  'Who was the AL Cy Young winner?',
  '<img src="images/verlander.jpg" alt="Justin Verlander" />Justin Verlander',
  '<img src="images/bieber.jpg" alt="Shane Bieber" />Shane Bieber',
  '<img src="images/snell.jpg" alt="Blake Snell" />Blake Snell',
  '<img src="images/cole.jpg" alt="Gerrit Cole" />Gerrit Cole'
);

let question6 = new Question(
  'Which player led the league in home runs?',
  '<img src="images/alonso.jpg" alt="Pete Alonso" />Pete Alonso',
  '<img src="images/soler.jpg" alt="Jorge Soler" />Jorge Soler',
  '<img src="images/yelich.jpg" alt="Christian Yelich" />Christian Yelich',
  '<img src="images/bellinger.jpg" alt="Cody Bellinger" />Cody Bellinger'
);

let question7 = new Question(
  'Which pitcher led the league in strikeouts?',
  '<img src="images/cole.jpg" alt="Gerrit Cole" />Gerrit Cole',
  '<img src="images/ray.jpg" alt="Robbie Ray" />Robbie Ray',
  '<img src="images/scherzer.jpg" alt="Max Scherzer" />Max Scherzer',
  '<img src="images/verlander.jpg" alt="Justin Verlander" />Justin Verlander'
);

let question8 = new Question(
  'Which closer the league in saves?',
  '<img src="images/yates.jpg" alt="Kirby Yates" />Kirby Yates',
  '<img src="images/chapman.jpg" alt="Aroldis Chapman" />Aroldis Chapman',
  '<img src="images/hader.jpg" alt="Josh Hader" />Josh Hader',
  '<img src="images/smith.jpg" alt="Will Smith" />Will Smith'
);

let question9 = new Question(
  'Who was the NL Rookie of the Year?',
  '<img src="images/alonso.jpg" alt="Pete Alonso" />Pete Alonso',
  '<img src="images/soroka.jpg" alt="Mike Soroka" />Mike Soroka',
  '<img src="images/robles.jpg" alt="Victor Robles" />Victor Robles',
  '<img src="images/tatis.jpg" alt="Fernando Tatis Jr." />Fernando Tatis Jr.'
);

let question10 = new Question(
  'Who was the AL Rookie of the Year?',
  '<img src="images/alvarez.jpg" alt="Yordan Alvarez" />Yordan Alvarez',
  '<img src="images/mercado.jpg" alt="Oscar Mercado" />Oscar Mercado',
  '<img src="images/vladdy.jpg" alt="Vlad Guerrero Jr." />Vlad Guerrero Jr.',
  '<img src="images/means.jpg" alt="John Means" />John Means'
);

let question11 = new Question(
  'Who was the NL Manager of the Year?',
  '<img src="images/shildt.jpg" alt="Mike Shildt" />Mike Shildt',
  '<img src="images/martinez.jpg" alt="Dave Martinez" />Dave Martinez',
  '<img src="images/counsell.jpg" alt="Craig Counsell" />Craig Counsell',
  '<img src="images/bochy.jpg" alt="Bruce Bochy" />Bruce Bochy'
);

let question12 = new Question(
  'Who was the AL Manager of the Year?',
  '<img src="images/baldelli.jpg" alt="Rocco Baldelli" />Rocco Baldelli',
  '<img src="images/hinch.jpg" alt="A.J. Hinch" />A.J. Hinch',
  '<img src="images/boone.jpg" alt="Aaron Boone" />Aaron Boone',
  '<img src="images/melvin.jpg" alt="Bob Melvin" />Bob Melvin'
);

let question13 = new Question(
  'Who led the league in OPS (On-base plus slugging)?',
  '<img src="images/yelich.jpg" alt="Christian Yelich" />Christian Yelich',
  '<img src="images/bellinger.jpg" alt="Cody Bellinger" />Cody Bellinger',
  '<img src="images/trout.jpg" alt="Mike Trout" />Mike Trout',
  '<img src="images/bregman.jpg" alt="Alex Bregman" />Alex Bregman'
);

let question14 = new Question(
  'Who led the league in stolen bases?',
  '<img src="images/acuna.jpg" alt="Ronald Acuna Jr." />Ronald Acuna Jr.',
  '<img src="images/turner.jpg" alt="Trea Turner" />Trea Turner',
  '<img src="images/gordon.jpg" alt="Dee Gordon" />Mike Trout',
  '<img src="images/villar.jpg" alt="Jonathan Villar" />Alex Bregman'
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
  question13,
  question14
];

let questionTracker = [];

// event listeners

startGameButton.addEventListener('click', generateQuestion);
correctField.addEventListener('click', playerHit);
wrongField1.addEventListener('click', playerOut);
wrongField2.addEventListener('click', playerOut);
wrongField3.addEventListener('click', playerOut);
restartButton.addEventListener('click', restartGame);
nextButtonOut.addEventListener('click', resetOverlay);
nextButtonHit.addEventListener('click', resetOverlay);
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
  // console.log(questionArray);
  // console.log(questionTracker);
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
    hitOverlay.style.zIndex = 3;
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
    hitOverlay.style.zIndex = 3;
    hitSound.play();
    hitSound.volume = 0.2;
    pitchClock.innerHTML = 'Hit!';
    stopClock();
  }
}

//if answer is incorrect
function playerOut(evt) {
  if (currentOuts < 2) {
    currentOuts += 1;
    outs.innerHTML = 'Outs: ' + currentOuts;
    booSound.play();
    booSound.volume = 0.2;
    outOverlay.style.zIndex = 3;
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
  hitOverlay.style.zIndex = 0;
  outOverlay.style.zIndex = 0;
  resetQuestions();
}

// bring up an overlay screen in between questions

function resetOverlay() {
  if (currentRuns < 10) {
    hitOverlay.style.zIndex = 0;
    outOverlay.style.zIndex = 0;
    multiple.style.color = 'white';
    multiple.style.textDecoration = 'none';
    resetClock();
    startClock();
    generateQuestion();
  } else {
    winScreen.style.display = 'block';
    currentRuns + 1;
    highScore = 10;
    localStorage.setItem('highScore', highScore);
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
