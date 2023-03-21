function getComputerChoice() {

    //Set new variable with the name randomNumber and default value 0
    let randomNumber = 0;

    //Set new variable with the name computerChoice and default value "no choice yet"
    let computerChoice = "no choice yet";

    //Select random number between 1 and 3 and save it to randomNumber
    randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    //if randomNumber is 1; set computerChoice to "rock"
    if(randomNumber == 1) {
        computerChoice = "Rock";
    }
    //if randomNumber is 2; set computerChoice to "paper"
    if(randomNumber == 2) {
        computerChoice = "Paper";
    }
    //if randomNumber is 3; set computerChoice to "scissors"
    if(randomNumber == 3) {
        computerChoice = "Scissors";
    }
    //Output text computerChoice
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
//create variable playerChoice and set the value to player Selection
    let playerChoice = playerSelection;
//create variable playerChoice and set the value to the lowerCase version of playerSelection
    let playerChoiceLowerCase = playerSelection.toLowerCase();
//See what player chose (rock paper or scissors) then calculate if player won based on computerChoice and rock
//paper scissor rules
    switch (playerChoiceLowerCase) {
        
        case "rock":
            if(computerSelection == "Rock") {
                return "It's a tie";
            }
            if(computerSelection == "Paper") {
                return "You loose. Paper beats rock";
            }
            if(computerSelection == "Scissors") {
                return "You win. Rock beats scissors";
            }
            break;
        
        case "paper":
            if(computerSelection == "Rock") {
                return "You win. Paper beats rock";
            }
            if(computerSelection == "Paper") {
                return "It's a tie";
            }
            if(computerSelection == "Scissors") {
                return "You loose. Scissors beat paper";
            }
            break;

        case "scissors":
             if(computerSelection == "Rock") {
                return "You lose. Rock beats scissors";
            }
            if(computerSelection == "Paper") {
                return "You win. Scissors beat paper";
            }
            if(computerSelection == "Scissors") {
                return "It's a tie";
             }
            break;
            }
}
//Create const playerSelection and hard code value by setting it to "paper"
const playerSelection = "Paper";
//Create const computerSelection and set value to return value of getComputerChoice()
const computerSelection = getComputerChoice();
//play Round of rock paper scissors with the two const values and output it to console
console.log(playRound(playerSelection, computerSelection));