let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9)
}

function compareGuesses(userGuess, computerGuess, target) {
  const userPath = Math.abs(userGuess - target);
  const comPath = Math.abs(computerGuess - target);

  if (userPath < comPath || userPath === comPath){
    return true;
  }
  else{
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
