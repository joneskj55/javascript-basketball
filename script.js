// increment score
function score() {
  var score = 0;
  // switch statement to implement score by 1, 2, or 3
  switch (score) {
    case 1:
      score = score + 1;
      break;
    case 2:
      score = score + 2;
      break;
    case 3:
      score = score + 3;
      break;
    default:
      score = score + 0;
  }
  // increment score by 1
  score++;
  document.getElementById("score").innerHTML = score;
  // increment score by 2
  score += 2;
  // increment score by 3
  score += 3;
}
