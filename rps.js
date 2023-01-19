

function getComputerChoice() {

    let getComputerChoice = Math.floor(Math.random () * 3);
    if (getComputerChoice === 0){
        return "Rock";
    } else if (getComputerChoice === 1){
        return "Paper"
    } else {
        return "Scissors";
    } 
}
getComputerChoice(Math.floor(Math.random));


