let playerScore = 0;
let computerScore = 0;




function logPlayerScore() {
  const resultsDivPlayer = document.getElementById("resultsDiv");
  const playerScoreUi = document.createElement("p");
  playerScoreUi.classList.add("resultsCss");
  playerScoreUi.textContent = (`Player Score: ${playerScore}`);
  playerScoreUi.appendChild(resultsDivPlayer);
}

logPlayerScore();

function logComputerScore() {
  const resultsDivComputer = document.getElementById("resultsDiv");
  let computerScoreUi = document.createElement("p");
  computerScoreUi.classList.add("resultsCss");
  computerScoreUi.textContent = (`Computer Score: ${computerScore}`);
  computerScoreUi.appendChild(resultsDivComputer);
}

// Random choice from Computer
function getComputerChoice() {
  computerChoices = ["rock", "paper", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowercase();
}

const resultsDivJs = document.querySelector("#resultsDiv");
const content = document.createElement("div");
//content.textContent = `You win! ${playerSelection} beats ${computerSelection} `;
//resultsDivJs.appendChild(content);

//One round of game
function oneRound(playerSelection, logPlayerScore) {
  computerSelection = getComputerChoice();
  let playerResult = logPlayerScore();
  let computerResult = logComputerScore();

  console.log("Computer: " + computerSelection);
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore += 1;
    playerResult
    computerResult;
  } else if (playerSelection === computerSelection) {
    return "It is a tie!";
  } else {
    return ` You lose! ${computerSelection} beats ${playerSelection}`;
  }
  DocumentTimeline.getElementById("resultsDiv").innerHtml = result;
  return;
}

//Three button listen to click and play a round with the choosed weapon
const rockBtnJs = document.getElementById("rockBtn");
rockBtnJs.addEventListener("click", () => {
  playerSelection = "rock";
  oneRound(playerSelection);
  console.log("Player: " + playerSelection);
});

const paperBtnJs = document
  .getElementById("paperBtn")
  .addEventListener("click", () => {
    playerSelection = "paper";
    oneRound(playerSelection);
    console.log("Player: " + playerSelection);
  });

const scissorsBtnJs = document
  .getElementById("scissorsBtn")
  .addEventListener("click", () => {
    playerSelection = "scissors";
    oneRound(playerSelection);
    console.log("Player: " + playerSelection);
  });



/*

// play 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(oneRound());
  }
}
// start the game
game();
*/
