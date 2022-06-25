let ul = document.getElementById('ul')
let scrollBottom = ul.scrollHeight  - ul.scrollTop  - ul.clientHeight;
console.log(scrollBottom)
let scrollWidth = ul.offsetWidth - ul.clientWidth;
console.log(scrollWidth)

let field = document.getElementById('field')
let ball = document.getElementById('ball')
let centerX = Math.round(field.clientWidth / 2);
let centerY = Math.round(field.clientHeight / 2);
let halfBallX = ball.offsetWidth/2;
let halfBallY = ball.offsetHeight/2;
ball.style.left = Math.round(centerX - halfBallX) + 'px';
ball.style.top = Math.round(centerY- halfBallY) + 'px';



