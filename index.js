let Choice;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameOver = false;

function getHumanChoice(){
    
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",() => {

            if (gameOver) return;

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
    let options = ["rock", "paper", "scissors"];
    let value = options[Math.floor(Math.random() * options.length)];

    return value
    
}


//kierroksen pelaaminen

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice)
        { h3.textContent = "Draw"; }
    else if (humanChoice === "rock" && computerChoice === "paper")
       { h3.textContent = `You lose! ${computerChoice} wins ${humanChoice}`;
        computerScore ++; }
    else if (humanChoice === "scissors" && computerChoice === "rock")
       { h3.textContent = `You lose! ${computerChoice} wins ${humanChoice}`;
        computerScore ++; } 
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {   h3.textContent = `You lose! ${computerChoice} wins ${humanChoice}`;
        computerScore ++; }
    else { h3.textContent = `You won! ${humanChoice} wins ${computerChoice}`;
            humanScore++;
    };

};


const div = document.createElement("div");
document.body.appendChild(div);

const h3 = document.createElement("h3");
h3.style.display = "flex";
h3.style.justifyContent = "center";
h3.style.color = "tomato";
div.appendChild(h3);

function showResult() {
if (computerScore > humanScore){
    h3.textContent = "YOU WON THE GAME!", computerScore,"-", humanScore;
    
}
else if (computerScore < humanScore) {
    h3.textContent =  "YOU LOST THE GAME!", humanScore,"-" ,computerScore;
    
}   
else{
    h3.textContent = "DRAW!"
    
};

gameOver = true;

};
function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection); 
    roundsPlayed++;
    console.log(`Kierros ${roundsPlayed}/5 suoritettu`);
        

    if (roundsPlayed === 5) {
        showResult();
        
    }

}
    
getHumanChoice();
