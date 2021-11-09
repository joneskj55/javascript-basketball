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

// reset game
function reset() {
  score1 = 0;
  score2 = 0;
  document.getElementById("player-one-score").innerHTML = score1;
  document.getElementById("player-two-score").innerHTML = score2;
}
