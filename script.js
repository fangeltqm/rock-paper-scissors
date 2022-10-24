const choices = ['rock', 'paper', 'scissors']; 

let playerScore = 0
let compScore = 0

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});


function playRound(e) {
    playerSelection = e.target.id;
    console.log('The player selected: ' + playerSelection);
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log('The computer selected: ' + computerSelection)


    if (playerSelection === computerSelection) {
        console.log('TIE!');
    
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('YOU WON!');
        playerScore++;

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('YOU LOST!');
        compScore++;
    
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('YOU WON!');
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('YOU LOST!');
        compScore++;
   
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('YOU WON!');
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('YOU LOST');
        compScore++;
  
    }
}






/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());

    }

    if (playerScore == compScore) {
        console.log('You tied the round');
    } else if (playerScore > compScore) {
        console.log('You won the round');
    } else {
        console.log('You lost the round')
    }
    

}

*/