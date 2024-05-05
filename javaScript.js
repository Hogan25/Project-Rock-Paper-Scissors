function getComputerChoice(text) {
    let comp = Math.floor(Math.random() * 3);
    if (comp === 0) {
        return "rock";
    } else if (comp === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(value) {
    let quest = prompt("Let's Play", "Rock").toLowerCase();
    if (quest == "rock") {
        return "rock";
    } else if (quest == "paper") {
        return "paper";
    } else if (quest == "scissors") {
        return "scissors";
    } else {
        return "Please input Rock Paper Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    if (getHumanChoice == "rock" && getComputerChoice == "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (getHumanChoice == "rock" && getComputerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    } else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (getHumanChoice == "paper" && getComputerChoice == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (getHumanChoice == "scissors" && getComputerChoice == "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (getHumanChoice == "scissors" && getComputerChoice == "paper") {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    } else if (getHumanChoice || getComputerChoice === null || undefined) {
        console.log("Please input Rock Paper or Scissors");
    } else {
        console.log("That Was Close! It's A Tie");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);