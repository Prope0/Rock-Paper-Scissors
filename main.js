// Random choice from Computer
computerChoices = [ "Rock" , "Paper" , "Scissors" ]

const getComputerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];

alert(getComputerChoice)