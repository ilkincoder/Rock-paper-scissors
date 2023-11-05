// console.log('Hi There')

// Rock Paper And Scissors Game played on Console

function getComputerChoice(){
    let options = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    let randomNumber = Math.floor(Math.random()*options.length);
    // console.log(options[randomNumber]);
}

// getComputerChoice();


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('What is your input?');
    playerSelection = playerSelection.toLowerCase();

    if(computerSelection > playerSelection){
     }
    
     return "You Lose! Paper beats Rock"
  }

  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection))

  function game(){
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
  }

  game();
