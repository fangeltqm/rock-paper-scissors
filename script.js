const choices = ['rock', 'paper', 'scissors']; 

let playerScore = 0
let compScore = 0

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});


function playRound(e) {
    playerSelection = e.target.id;
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = document.getElementById('result');

    if (playerSelection === computerSelection) {
        result.textContent = 'TIE'
    
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.textContent = 'YOU WON'
        playerScore++;

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result.textContent = 'YOU LOST'
        compScore++;
    
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.textContent = 'YOU WON'
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result.textContent = 'YOU LOST'
        compScore++;
   
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.textContent = 'YOU WON'
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result.textContent = 'YOU LOST'
        compScore++;
  
    }

    const playerSelect = document.querySelector('#playerSelect');
    playerSelect.textContent = `You played ${playerSelection}`;

    const computerSelect = document.getElementById('computerSelect');
    computerSelect.textContent = `The computer played ${computerSelection}`;

    



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