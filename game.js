const mani = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let i = Math.floor(Math.random()*3)
    return mani[i]
}

function messageWin (playerSelection, computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}.` 
}

function messageLose (playerSelection,computerSelection) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.` 
}

 