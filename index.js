//koneen valinta

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let value = options[Math.floor(Math.random() * options.length)];

    return value
    
}
//pelaajan valinta

function getHumanChoice(){
    //let Choice = prompt("Choose rock, paper or scissors");
    Choice = Choice.toLowerCase();
        return Choice
}


let humanScore = 0
let computerScore = 0


//kierroksen pelaaminen

function playRound(humanChoice, computerChoice){


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
            humanScore++;
    };

};

playRound(getHumanChoice(), getComputerChoice());


//5 pelin peräkkäinen pelaaminen
function playGame(){

for (let i = 1; i < 5; i++) {
    playRound(getHumanChoice(),getComputerChoice()); }
    
};

playGame();

//tuloksen näyttäminen
if (computerScore > humanScore){
    console.log("Hävisit pelin!", computerScore,"-", humanScore)
}
else if (computerScore < humanScore) {
    console.log("Voitit pelin!", humanScore,"-" ,computerScore)
}
else{
    console.log("Tasapeli!")
};

div.textContent = "Hello World!";