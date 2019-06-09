const toolTips = document.querySelectorAll('.tool-tip');
const output = document.querySelector('.output');
// for (let i = 0; i < toolTips.length; i++) {
//   toolTips[i].addEventListener('mouseover', function(e) {
//     console.log(this);
//   });
// }

let myInterval;

toolTips.forEach(function(tt) {
  tt.addEventListener('mouseover', function(e) {
    let holder = this.getAttribute('data-toolContent');
    clearInterval(myInterval);
    console.log(e.clientX);
    console.log(e.clientY);
    output.style.display = 'block';
    output.style.top = e.clientY + 5 + 'px';
    output.style.left = e.clientX + 5 + 'px';
    output.innerHTML = holder;
    myInterval = setInterval(function() {
      output.style.display = 'none';
    }, 3000);
  });
  tt.addEventListener('mouseout', function(e) {
    output.style.display = 'none';
  });
});
