const mani = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let i = Math.floor(Math.random()*3)
    return mani[i]
}

function itWins(i,j) {
    if (i == ((j+1)%3)) {
        return true
    } 
    else {
        return false
    }
}


function roundGame(playerSelection,computerSelection) {
    let p = formatSelection(playerSelection)
    let c = formatSelection(computerSelection)
    if(p == c) {
        return 'draw'
    }
    let i = mani.indexOf(p)
    let j = mani.indexOf(c)
    if ( itWins(i,j) ) {
        return 'player'
    }
    else {
        return 'computer'
    }
}

function formatSelection(wOrD) {
    word=wOrD.toLowerCase();
    let firstLetter=word.substr(0,1)
    let otherLetters = word.substr(1)
    let F=firstLetter.toUpperCase()
    return F + otherLetters
}

function messageDraw(drawSelection) {
    return `It's a Draw! Both of you chose ${drawSelection}.`
}

function messageWin (winSelection, loseSelection) {
    return `You Win! ${winSelection} beats ${loseSelection}.` 
}

function messageLose (winSelection,loseSelection) {
    return `You Lose! ${winSelection} beats ${loseSelection}.` 
}

function game() {
    let playerSelection
    let computerSelection
    let resultMessage
    for (let i =0; i<5; i++) {
        computerSelection = computerPlay()
        playerSelection = prompt ("Rock, paper or scissor?") 
        resultMessage = roundGame(playerSelection,computerSelection)
        console.log(resultMessage)
    }
}



 