let score = 0;

function onePoint() {
  score = score += 1;
  return score;
}

function twoPoints() {
  score += 2;
  return score;
}

function threePoints() {
  score += 3;
  return score;
}

console.log(onePoint() + twoPoints() + threePoints());
