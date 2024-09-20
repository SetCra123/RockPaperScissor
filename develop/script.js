//variables for buttons and results section
const rockBtn = document.getElementById();
const paperBtn = document.getElementById();
const scissorsBtn = document.getElementById();
const result = document.getElementById();

//function to get CPU choice
function cpuChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


//function to find winner
function findWinner(playerChoice, cpuChoice){
    if (playerChoice === cpuChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'You lose!';
      }
}

function playGame(playerChoice) {
    const cpuChoice = cpuChoice();
    const result = determineWinner(playerChoice, cpuChoice);
    result.textContent = `You chose ${playerChoice}, computer chose ${cpuChoice}. ${result}`;
  }

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));