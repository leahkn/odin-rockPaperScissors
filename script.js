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
//Check if playerChoice matches right input type
//if(!playerChoiceLowerCase === "rock" && !playerChoiceLowerCase === "paper" && !playerChoiceLowerCase === "scissors") {  
//}
//See what player chose (rock paper or scissors) then calculate if player won based on computerChoice and rock
//paper scissor rules
    switch (playerChoiceLowerCase) {
        
        case "rock":
            if(computerSelection == "Rock") {
                return "It's a tie. You both chose rock";
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
                return "It's a tie. You both chose paper";
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
                return "It's a tie. You both chose scissors";
             }
            break;
}
}

function game() {
    let playerSelection;
    let computerSelection;
    let winCounter = 0;
    let loseCounter = 0;
    let endResult;
    let roundResult = "";
    let roundNumber = 1;

    //Set loop with counter so that exactly five rounds are played
    for (let i = 0; i < 5; i++) {
        //get player choice by asking for text input
        playerSelection = prompt("Choose rock, paper or scissors", "");

        //If player clicks cancel on alert message, the game will be quit
        if(playerSelection == null) {
            alert("You've quit the game!");
            return;
        }

        //check if input is right type
        if(checkInputType(playerSelection) === true) {
            //get random computer choice and save it to variable computerSelection
            computerSelection = getComputerChoice();
            //play one round with the player choice and the computer choice
            roundResult = (playRound(playerSelection, computerSelection));
            //Output the round result message
            alert(roundResult + "\n Win count: " + winCounter + "\n Lose count: " + loseCounter +  "\nRound number: " + roundNumber);
            roundNumber++;
            //if player won round, increment the win counter
            if(roundResult.includes("win")) {
                winCounter++;
            //if computer won, increment the loose counter
            }
            if(roundResult.includes("loose")) {
                loseCounter++;
            }
        }
        //if input type is wrong; give alert message and decrement counter for loop so it doesn't count as a round
        else {
            alert("Wrong input type. Try again.");
            i--;
        }
       
    }
    //calculate the winner and set the result into variable endResult
    endResult = calculateWinner(winCounter, loseCounter);
    //alert the user with the endResult message
    alert(endResult);
}

//Check if input is right type (equals to rock, paper or scissors)
function checkInputType(playerInput) {
    //default value is false
    let check = false;
    //accepted input is: "rock", "paper", "scissors" NOT case sensitive
    if(playerInput.toLowerCase() == "rock" || playerInput.toLowerCase() == "paper" || playerInput.toLowerCase() == "scissors") { 
        //if input in lower cases meets requirement, check is set to true
        check = true;
    }
    else {
        check = false;
    }
    //return check value
    return check;
}

//calculate the winner of the overall game
function calculateWinner(numberWins, numberLosses) {
    //if there are more wins than losses, the player wins
    if(numberWins > numberLosses) {
        result = ("You've won the game");
    } 
    //if there are more losses than wins, the computer wins
    else if (numberWins < numberLosses) {
        result = ("You've lost the game");
    }    
    //if the wins and losses are the same, its a tie (for example when 3 rounds are a tie and both win once)
    else {
        result = ("It's a tie. Nobody won the game");
    }
    return result;
}

//Start the game
game();