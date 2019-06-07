const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for (let x = 0; x < stars.length; x++) {
  stars[x].starValue = x + 1;
  console.log(stars[x]);
  ['mouseover', 'mouseout', 'click'].forEach(function(e) {
    stars[x].addEventListener(e, starRate);
  });
}

function starRate(e) {
  let t = e.type;
  let starValue = this.starValue;
  if (t === 'click') {
    if (starValue > 1) {
      output.innerHTML = `You rated this ${starValue} stars`;
    }
  }

  stars.forEach(function(ele, ind) {
    if (t === 'click') {
      if (ind < starValue) {
        ele.classList.add('orange');
      } else {
        ele.classList.remove('orange');
      }
    }
    if (t === 'mouseover') {
      if (ind < starValue) {
        ele.classList.add('yellow');
      } else {
        ele.classList.remove('yellow');
      }
    }
    if (t === 'mouseout') {
      ele.classList.add('yellow');
    }
  });
}
