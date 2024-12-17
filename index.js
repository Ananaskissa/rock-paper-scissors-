let Choice;

function getHumanChoice(){
    

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",() => {
            if (button.id == "rock") {
                Choice = "rock";
         }
            else if (button.id == "paper") {
                Choice = "paper";
        }
            else if (button.id == "scissors") {
                Choice = "scissors";
        }
            console.log(Choice)
            playGame(Choice);
            });
});
}



function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let value = options[Math.floor(Math.random() * options.length)];

    return value
    
}

let humanScore = 0
let computerScore = 0


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


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

playRound(humanSelection, computerSelection);


//5 pelin peräkkäinen pelaaminen
function playGame(){

for (let i = 1; i < 5; i++) {
    playRound(humanSelection,computerSelection); }
    
};

playGame();




const div = document.createElement("div");
document.body.appendChild(div);

const h3 = document.createElement("h3");
h3.style.display = "flex";
h3.style.justifyContent = "center";
h3.style.color = "tomato";
div.appendChild(h3);

function showResult() {}
if (computerScore > humanScore){
    h3.textContent = "Hävisit pelin!", computerScore,"-", humanScore;
}
else if (computerScore < humanScore) {
    h3.textContent = "Voitit pelin!", humanScore,"-" ,computerScore;
}
else{
    h3.textContent = "Tasapeli!"
};

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    showResult(); }

getHumanChoice();
