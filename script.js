function getComputerChoice () {
    let answers = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(0 + Math.random() * (2 + 1 - 0))
    return answers[choice]
}

function playRound (playerSelection, computerSelection) {
    /* if player selection = computer selection
    then "Draw!" */
    if (playerSelection === computerSelection) {
        console.log("Draw!")
    }
    else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection === "Paper") {
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "Paper":
                if (computerSelection === "Scissors") {
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            case "Scissors":
                if (computerSelection === "Rock") {
                    console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
                break
            default:
                console.log("Give me Rock, Paper os Scissors!")
        }
    }
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice()
playRound(playerSelection, computerSelection)