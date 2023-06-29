const options = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ) {
      return "Player"
      } else {
      return "Computer"
    } 
} 

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection) == "Player") {
        playerScore++
        }
        if (playRound(playerSelection, computerSelection) == "Computer") {
        computerScore++
        }
        console.log(playerScore);
        console.log(computerScore)
    } 
    if (playerScore == computerScore) {
        return "It's a tie."
    } else if (playerScore > computerScore) {
        return "You won!"
    } else {
        return "You lost :("
    }
}

console.log(game())
