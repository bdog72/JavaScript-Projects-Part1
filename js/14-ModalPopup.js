const btn = document.querySelectorAll('.modal');
const modalWrapper = document.querySelector('.modalWrapper');
const body = document.querySelector('body');
btn.forEach(function(button) {
  makeClick(button);
});

function makeClick(el) {
  el.addEventListener('click', function() {
    modalWrapper.classList.add('showModal');
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      return modalWrapper.classList.remove('showModal');
    });
    modalWrapper.addEventListener('click', function() {
      return modalWrapper.classList.remove('showModal');
    });
    body.addEventListener('keydown', function(e) {});
  });
}
