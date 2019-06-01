//
//
const gameColors = ['red', 'green', 'blue', 'yellow'];
const message = document.querySelector('.message');
const gamearea = document.querySelector('.gamearea');
const button = document.querySelector('button');

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 3;

window.addEventListener('load', setup);
button.addEventListener('click', function() {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.disabled = true;
  button.style.display = 'none';
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

const runSequence = num => {
  let squares = document.querySelectorAll('.box');
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  gameClicks.push(gameColors[randomNum]);
  squares[randomNum].style.opacity = '1';
  setTimeout(() => {
    squares[randomNum].style.opacity = '0.5';
    setTimeout(() => {
      runSequence(num);
    }, 300);
  }, 700);
};

function setup() {
  for (let x = 0; x < 4; x++) {
    let div = eleFactory('div');
    div.style.backgroundColor = gameColors[x];
    div.classList.add('box');
    div.style.opacity = '0.5';
    div.myColor = gameColors[x];
    div.addEventListener('click', checkAnswer);
    gamearea.appendChild(div);
  }
}

function checkAnswer(e) {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = '1';
    setTimeout(() => {
      el.style.opacity = '0.5';
    }, 700);
    if (userClicks.length === gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
  console.log(userClicks);
}

function messager(mes) {
  message.innerHTML = mes;
}

function endGame() {
  button.disable = false;
  button.style.display = 'block';

  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    messager('Correct');
  } else {
    messager('Not correct');
  }
}

function eleFactory(eleType) {
  let ele = document.createElement(eleType);
  return ele;
}
