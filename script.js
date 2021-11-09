// declare score variable
let score = 0;

// free throw
function onePoint() {
  score += 1;
  console.log(score);
  return score;
}

// two-pointer
function twoPoints() {
  score += 2;
  console.log(score);
  return score;
}

// three-pointer
function threePoints() {
  score += 3;
  console.log(score);
  return score;
}

// reset game
function reset() {
  score = 0;
  console.log(score);
  return score;
}
