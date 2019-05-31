// //
// //

// const message = document.querySelector('.message');
// const guess = document.querySelector('input');
// const button = document.querySelector('button');

// let inPlay = false;
// let scramble = '';
// let scrambled = '';

// const myArray = [
//   'javascript',
//   'html',
//   'css',
//   'react',
//   'bootstrap',
//   'nodejs',
//   'express',
//   'python',
//   'ruby'
// ];

// button.addEventListener('click', function() {
//   if (!inPlay) {
//     inplay = true;
//     button.innerHTML = 'Guess';
//     guess.classList.toggle('hidden');
//     scramble = createWord();
//     scrambled = randomArray(scramble.split('')).join('');
//     message.innerHTML = `${scrambled} ${scramble}`;
//   } else {
//     let tempGuess = guess.value;
//     console.log(tempGuess);
//     if (tempGuess === scramble) {
//       console.log('Correct');
//     } else {
//       console.log('Guess Again');
//     }
//   }
// });

// function createWord() {
//   let randomIndex = Math.floor(Math.random() * myArray.length);
//   let tempWord = myArray[randomIndex];
//   return tempWord;
// }

// function randomArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let temp = arr[i];
//     let j = Math.floor(Math.random() * (i + 1));

//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   return arr;
// }

const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
let inplay = false;
let scramble = '';
let scrambled = '';
let score = 0;
const myArray = ['javascript', 'website', 'html', 'document', 'course'];
button.addEventListener('click', function() {
  if (!inplay) {
    inplay = true;
    score = 0;
    button.innerHTML = 'Guess';
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    message.innerHTML = scrambled + ' ' + scramble;
  } else {
    let tempGuess = guess.value;
    score++;
    console.log(tempGuess);
    if (tempGuess === scramble) {
      console.log('Correct');
      inplay = false;
      // message.innerHTML = 'Correct it was ' + scramble;
      message.innerHTML = `Correct it was ${scramble} and it took ${score} guesses`;
      button.innerHTML = 'Start';
      guess.classList.toggle('hidden');
    } else {
      console.log('Guess Again Bozo');
      // message.innerHTML = 'Guess Again';
    }
  }
  guess.value = '';
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];

  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
