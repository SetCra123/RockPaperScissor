//variables for buttons and results section
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');



//function to get CPU choice
function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
    

}


//function to find winner
function findWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "paper" && cpuChoice === "rock") ||
        (playerChoice === "scissors" && cpuChoice === "paper")
      ) {
        return 'You win!';
      } else {
        return 'You lose!';
      }
}

function playGame(playerChoice) {
    const cpuChoice = getCpuChoice();
    const result = findWinner(playerChoice, cpuChoice);
    resultDiv.textContent = `You chose ${playerChoice}, computer chose ${cpuChoice}. ${result}`;
  }

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));