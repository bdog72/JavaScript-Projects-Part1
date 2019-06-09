//
//
//
const rawText = document.querySelector('textarea[name=textarea]');
const finishText = document.querySelector('textarea[name=output]');
const button = document.querySelector('button');

const counter = document.querySelector('.counter');

button.addEventListener('click', function() {
  let temp = rawText.value;
  let expression = /([A-Za-z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z0-9._]+)/gi;
  let emailData = temp.match(expression);
  let holder = [];

  for (let x = 0; x < emailData.length; x++) {
    if (holder.indexOf(emailData[x]) == -1) {
      holder.push(emailData[x]);
    }
  }

  let tempHolder = holder.join(' 😂 ');
  counter.innerText = 'Emails Found ' + holder.length;
  finishText.innerHTML = tempHolder;
});

finishText.addEventListener('click', function() {
  this.select();
});
