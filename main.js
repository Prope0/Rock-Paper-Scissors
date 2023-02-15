// Random choice from Computer
function getComputerChoice() {
    computerChoices = [ "rock" , "paper" , "scissors" ]
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

//Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//One round game
function oneRound (playerSelection , computerSelection, capitalizeFirstLette) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose Your Weapon: ").toLowerCase();    
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    //paper nyer ha cp rock 
    //rock nyer ha cp scissors 
    // scissors nyer ha cp paper
    if ((playerSelection === "paper" && computerSelection === "rock" ) ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection} `;
        } else if (playerSelection === computerSelection) {
            return "It is a tie!"
        }
        else {
            return ` You lose! ${computerSelection} beats ${playerSelection}`
        }
}


/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(oneRound(playerSelection, computerSelection));
*/


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(oneRound())
        } 
    }

game()




