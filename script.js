// declare score variables
let score1 = 0;
let score2 = 0;

// player 1

// free throw
function onePoint1() {
  score1 += 1;
  document.getElementById("player-one-score").innerHTML = score1;
}

// two-pointer
function twoPoints1() {
  score1 += 2;
  document.getElementById("player-one-score").innerHTML = score1;
}

// three-pointer
function threePoints1() {
  score1 += 3;
  document.getElementById("player-one-score").innerHTML = score1;
}

// player 2

// free throw
function onePoint2() {
  score2 += 1;
  document.getElementById("player-two-score").innerHTML = score2;
}

// two-pointer
function twoPoints2() {
  score2 += 2;
  document.getElementById("player-two-score").innerHTML = score2;
}

// three-pointer
function threePoints2() {
  score2 += 3;
  document.getElementById("player-two-score").innerHTML = score2;
}

// shot clock
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculation for seconds
  var seconds = Math.floor((distance % (1000 * 25)) / 1000);

  // Output the result in an element with id="clock"
  document.getElementById("clock").innerHTML = seconds;

  // If the count down is over, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("clock").innerHTML = "EXPIRED";
  //   // BUZZER
  // }
}, 1000);

// reset game
function reset() {
  score1 = 0;
  score2 = 0;
  document.getElementById("player-one-score").innerHTML = score1;
  document.getElementById("player-two-score").innerHTML = score2;
}
