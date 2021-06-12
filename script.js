'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = '12';

// document.querySelector('.score').textContent = '15';

// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);
// //

//state variables

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// game functions
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    //winning condition
    document.querySelector('.message').textContent =
      'Congratulations you find out my secret number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //condition 1
  } else if (guess > secretNumber) {
    //limit
    if (score > 1) {
      document.querySelector('.message').textContent = 'Try a Lower Value';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the gamee!';
      document.querySelector('.score').textContent = 0;
    }
    //conditon 2
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Try a Higher Value';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the gamee!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
