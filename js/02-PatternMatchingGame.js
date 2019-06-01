//
//
const gameColors = ['red', 'green', 'blue', 'yellow'];
const message = document.querySelector('.message');
const gamearea = document.querySelector('.gamearea');
const button = document.querySelector('button');

let gameClicks = [];
let userClicks = [];
let inPlay = false;
let playNum = 1;

window.addEventListener('load', setup);
button.addEventListener('click', function() {
  if (!inPlay) {
    player();
  }
});

function player() {
  button.disabled = true;
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
  console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  squares[randomNum].style.opacity = '1';
  setTimeout(() => {
    squares[randomNum].style.opacity = '0.5';
  }, 1000);
};

function setup() {
  console.log('setup bozo');
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
    }, 1000);
  }
  console.log(userClicks);
}

function eleFactory(eleType) {
  let ele = document.createElement(eleType);
  return ele;
}
