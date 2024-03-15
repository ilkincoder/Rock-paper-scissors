//Getting DOM elements from HTML

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');



// Initialize scores
var playerScore = 0;
var computerScore = 0;

// Function to disable buttons once the game is over
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Play a single round based on player's selection and update scores
function playRound(playerSelection) {
  var choices = ["rock", "paper", "scissors"];
  var computerSelection = choices[Math.floor(Math.random() * 3)];

  // Logic to determine the winner of the round
  if (playerSelection === computerSelection) {
    resultsDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultsDiv.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else {
    resultsDiv.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
  }

  // Update the score displayed in the UI
  scoreDiv.textContent = "Player: " + playerScore + " - Computer: " + computerScore;

  // Check if one player reaches 5 points and announce the winner
  if (playerScore === 5) {
    resultsDiv.textContent = "Congratulations! You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.textContent = "You lost the game. Try again!";
    disableButtons();
  }
}

// Event listeners for each button click
rockBtn.addEventListener('click', function() {
  playRound('rock');
});

paperBtn.addEventListener('click', function() {
  playRound('paper');
});

scissorsBtn.addEventListener('click', function() {
  playRound('scissors');
});
