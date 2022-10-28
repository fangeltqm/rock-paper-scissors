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
    
    let selections = document.querySelector('.selections');
    selections.style.display = 'block';
    
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

    const playerSelect = document.getElementById('playerSelect');
    playerSelect.textContent = `You played ${playerSelection}`;

    const computerSelect = document.getElementById('computerSelect');
    computerSelect.textContent = `The computer played ${computerSelection}`;

    const userScore = document.getElementById('playerScore');
    userScore.textContent = `Player Score ${playerScore}`;

    const computScore = document.getElementById('compScore');
    computScore.textContent = `Computer Score ${compScore}`;


    if (playerScore === 5 || compScore === 5) {
        const end = document.getElementById('end');
        const game = document.createElement('div');
        game.textContent = 'GAME OVER';
        end.appendChild(game);
        
        const winner = document.createElement('div');
       
        if (playerScore === 5) {
            winner.textContent = 'You won the round';
        }
        else {
            winner.textContent = 'You lost the round'
        }
        end.appendChild(winner);

        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
       
        })

        const again = document.createElement('button');
        again.id = "playAgain"
        again.textContent = 'Play Again';
        end.appendChild(again);    

        again.addEventListener('click', reset);

        function reset(e) {
            let selections = document.querySelector(".selections");
            selections.style.display = "none";
            
            playerScore = 0;
            compScore = 0;
            result.textContent = '';
            
            userScore.textContent = `Player Score ${playerScore}`;
            computScore.textContent = `Computer Score ${compScore}`;
            game.textContent = '';
            winner.textContent = '';

            end.removeChild(again);


            const selection = document.getElementsByClassName('selection');
            Array.from(selection).forEach((selected) => {
            selected.addEventListener('click', playRound);
            });


        }


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