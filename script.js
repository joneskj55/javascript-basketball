// declare score variable
let score = 0;

// free throw
function onePoint() {
  score += 1;
  return score;
}

// two-pointer
function twoPoints() {
  score += 2;
  return score;
}

// three-pointer
function threePoints() {
  score += 3;
  return score;
}

// reset game
function reset() {
  score = 0;
  return score;
}

console.log(reset());
