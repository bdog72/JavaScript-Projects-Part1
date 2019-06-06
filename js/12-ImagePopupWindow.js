const output = document.querySelector('.output');
const show = document.querySelector('.show');
const close = document.querySelectorAll('.close');
const images = document.querySelectorAll('.pop img');

images.forEach(function(ele) {
  console.log(ele);
  ele.addEventListener('click', popImage);
});

close.forEach(function(ele) {
  ele.addEventListener('click', function() {
    show.classList.add('hide');
  });
});

function popImage(e) {
  console.log(this.src);
  output.querySelector('img').setAttribute('src', this.src);
  show.classList.remove('hide');
}
