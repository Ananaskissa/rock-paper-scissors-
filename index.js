function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let value = options[Math.floor(Math.random() * options.length)];

    return value
    
}


function getHumanChoice(){
    let Choice = prompt("Choose rock, paper or scissors");
        return Choice
}


humanScore = 0
computerScore = 0



function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice)
        { console.log("Draw"); }
    else if (humanChoice === "rock" && computerChoice === "paper")
       { console.log(`You lose! ${computerChoice} wins ${humanChoice}`);
        computerScore ++; }
    else if (humanChoice === "scissors" && computerChoice === "rock")
       { console.log(`You lose! ${computerChoice} wins ${humanChoice}`);
        computerScore ++; } 
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {   console.log(`You lose! ${computerChoice} wins ${humanChoice}`);
        computerScore ++; }
    else { console.log(`You won! ${humanChoice} wins ${computerChoice}`);

    }

}

playRound(getHumanChoice(), getComputerChoice())
