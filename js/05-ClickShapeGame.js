let inPlay = false;
let playArea = {};
let start;

const message = document.querySelector('.message');
messager('Click Start Button');
const button = document.querySelector('button');
const gameArea = document.querySelector('.gameArea');

button.addEventListener('click', function() {
  if (!inPlay) {
    inPlay = true;
    button.style.display = 'none';
    messager('Click the circles as quickly as you see them');
    showBox();
  }
});

function showBox() {
  playArea.timer = setTimeout(myBox, rand(3000));
}

const myBox = () => {
  let el = document.createElement('div');
  el.classList.add('box');
  el.style.backgroundColor = getColor();
  el.style.width = rand(30) + 70 + 'px';
  el.style.height = rand(30) + 70 + 'px';
  // el.style.height = '100px';
  el.style.borderRadius = rand(50) + '%';
  el.style.position = 'relative';
  // el.style.top = '150px';
  // el.style.left = '50px';
  el.style.top = rand(250) + 'px';
  el.style.left = rand(250) + 'px';
  el.addEventListener('click', hit);
  el.start = new Date().getTime();
  console.log(el);
  gameArea.appendChild(el);
};

const hit = e => {
  console.log(e.target);
  let end = new Date().getTime();
  let start = e.target.start;
  let duration = (end - start) / 1000;
  messager(`It took ${duration} seconds to click`);
  clearTimeout(playArea.timer);
  gameArea.children[0].remove();
  playArea.timer = setTimeout(myBox, rand(3000));
};

const getColor = () => {
  function col() {
    let hex = rand(255).toString(16);
    return ('0' + String(hex)).substr(-2);
  }
  return `#${col()}${col()}${col()}`;
};

const rand = num => {
  let tempValue = Math.floor(Math.random() * num);
  return tempValue;
};

function messager(mes) {
  message.innerHTML = mes;
}
