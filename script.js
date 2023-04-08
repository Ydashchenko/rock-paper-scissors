function getComputerChoice () {
    let answers = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(0 + Math.random() * (2 + 1 - 0))
    return answers[choice]
}

function playRound (playerSelection, computerSelection) {
    /* if player selection = computer selection
    then "Draw!" */
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return ("Draw!")
    }
    else {
        switch (playerSelection.toLowerCase()) {
            case "rock":
                if (computerSelection.toLowerCase() === "paper") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "paper":
                if (computerSelection.toLowerCase() === "scissors") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "scissors":
                if (computerSelection.toLowerCase() === "rock") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            default:
                return ("Give me Rock, Paper os Scissors!")
        }
    }
}

const playerSelection = "SCISSORs"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))