function getComputerChoice () {
    let answers = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(0 + Math.random() * (2 + 1 - 0))
    return answers[choice]
}

function playRound (playerSelection, computerSelection) {
    /* if player selection = computer selection
    then "Draw!" */
    if (playerSelection === computerSelection) {
        return ("Draw!")
    }
    else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection === "Paper") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "Paper":
                if (computerSelection === "Scissors") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "Scissors":
                if (computerSelection === "Rock") {
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

const playerSelection = "Rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))