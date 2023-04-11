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
            case "paper":
                if (computerSelection.toLowerCase() === "scissors") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
            case "scissors":
                if (computerSelection.toLowerCase() === "rock") {
                    return (`You Lose! ${computerSelection} beats ${playerSelection}!`)
                }
                else {
                    return (`You Win! ${playerSelection} beats ${computerSelection}!`)
                }
            default:
                return ("Give me Rock, Paper os Scissors!")
        }
    }
}



const rock = document.getElementById("rock")
rock.addEventListener('click', function(e) {
    console.log(playRound("Rock", getComputerChoice()))
})

const paper = document.getElementById("paper")
paper.addEventListener('click', function(e) {
    console.log(playRound("Paper", getComputerChoice()))
})

const scissors = document.getElementById("scissors")
scissors.addEventListener('click', function(e) {
    console.log(playRound("Scissors", getComputerChoice()))
})


/*function game () {
    let player = 0
    let computer = 0
    for (let step = 1; step <= 5; step++) {
        playerSelection = prompt("Rock, paper or scissors?")
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        if (playRound(playerSelection, computerSelection)[4] === "W") {
            player++
        }
        else if (playRound(playerSelection, computerSelection)[4] === "L") {
            computer++
        }
        console.log(`Player - ${player}, computer - ${computer}`)
    }
    player > computer ? alert("Player is the WINNER!") :
        computer > player ? alert("Computer is the WINNER!") : alert("It's DRAW!")
}

game() */

    