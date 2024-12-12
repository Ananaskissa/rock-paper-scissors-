function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let value = options[Math.floor(Math.random() * options.length)];

    return value
            
}

console.log(getComputerChoice())