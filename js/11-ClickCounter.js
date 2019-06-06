let counter = 0;
document.addEventListener('DOMContentLoaded', function(event) {
  const body = document.querySelector('body');
  let output = document.createElement('div');
  output.innerHTML = 'Click the button';
  output.style.fontSize = '2em';
  output.style.padding = '5px';
  output.style.fontFamily = 'fantasy';
  output.setAttribute('class', 'message');
  body.appendChild(output);
  let btn = document.createElement('button');
  btn.innerHTML = 'click me bozo';
  btn.style.border = '1px solid black';
  btn.style.padding = '25px';
  btn.style.width = '400px';
  btn.style.fontSize = '2em';
  btn.style.textAlign = 'center';
  btn.style.backgroundColor = 'red';
  btn.style.color = 'white';

  btn.addEventListener('click', function() {
    console.log('Clicked');
    counter++;
    let mes = `You clicked this <span>${counter}</span> times`;
    document.querySelector('.message').innerHTML = mes;
  });
  body.appendChild(btn);
});
