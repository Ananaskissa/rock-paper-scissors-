let Choice;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let gameOver = false;

const resultContainer = document.createElement("div");
resultContainer.style.marginTop = "40px";
document.body.appendChild(resultContainer);

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

function playRound(humanChoice, computerChoice)
 {  let resultText = "";
    if (humanChoice === computerChoice) {
        resultText = `Draw! ${humanChoice} - ${computerChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
        resultText = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        resultText = `You won! ${humanChoice} beats ${computerChoice}`;
        humanScore++; 
    }

    

    const resultRow = document.createElement("p");
    resultRow.textContent = resultText;
    resultRow.style.margin = "5px 0";
    resultRow.style.color = "#f76b8a";
    resultRow.style.display = "flex";
    resultRow.style.justifyContent = "center";
    resultContainer.appendChild(resultRow);




    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}




const div = document.createElement("div");
document.body.appendChild(div);

const h2 = document.createElement("h2");
h2.style.display = "flex";
h2.style.justifyContent = "center";
h2.style.color = "tomato";
div.appendChild(h2);

function showResult() {
    if (humanScore > computerScore) {
        h2.textContent = `YOU WON THE GAME! Final Score: ${humanScore} - ${computerScore}`;
    } else if (humanScore < computerScore) {
        h2.textContent = `YOU LOST THE GAME! Final Score: ${humanScore} - ${computerScore}`;
    } else {
        h2.textContent = `IT'S A DRAW! Final Score: ${humanScore} - ${computerScore}`;
    }

    gameOver = true; 
}


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
