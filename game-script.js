 function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();

const winConditions = {
 rock: 'scissors',
 paper: 'rock',
 scissors: 'paper',
};
if (playerSelection in winConditions) {
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (winConditions[playerSelection] === computerSelection.toLowerCase()) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
} else {
    return 'Invalid input. Please choose Rock, Paper, or Scissors.';
}
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Your Choice: Rock, Paper or Scissors").toLowerCase();
    
        while (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
            playerSelection = prompt("Invalid input. Please choose Rock, Paper, or Scissors").toLowerCase();
        }

    
    const computerSelection = getComputerChoice();    
     const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

 if(roundResult.includes("win")) {
    playerScore++
 } else if (roundResult.includes("lose")) {
    computerScore++
 } }

 if(playerScore > computerScore) {
    console.log("You won the game")
 } else if(playerScore < computerScore) {
    console.log("You lose better try next time")
 } else {
    console.log("It is a Tie")
 }

}
game();
