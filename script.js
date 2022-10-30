const choices = ['rock', 'paper', 'scissors']; 

let playerScore = 0
let compScore = 0

const shoots = document.getElementsByClassName('selection');
Array.from(shoots).forEach((shoot) => {
    shoot.addEventListener('click', playRound);
});

function playRound(e) {
    playerSelection = e.target.id;
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    
    let selections = document.querySelectorAll('.selections');
    selections[0].style.display = 'block';
    selections[1].style.display = 'block';
    
    const result = document.getElementById('result');

    if (playerSelection === computerSelection) {
        result.textContent = 'TIE';
    
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result.textContent = 'YOU WON';
        playerScore++;

    } else {
        result.textContent = 'YOU LOST';
        compScore++;

    }

    const playerSelect = document.getElementById('playerSelect');
    playerSelect.textContent = `You played ${playerSelection}`;

    const computerSelect = document.getElementById('computerSelect');
    computerSelect.textContent = `The computer played ${computerSelection}`;

    const userScore = document.getElementById('playerScore');
    userScore.textContent = `${playerScore}`;

    const computScore = document.getElementById('compScore');
    computScore.textContent = `${compScore}`;


    if (playerScore === 5 || compScore === 5) {
        const end = document.getElementById('end');
        const game = document.createElement('div');
        game.classList.add('game-over');
        game.textContent = 'GAME OVER';
        end.appendChild(game);

        Array.from(shoots).forEach((shoot) => {
            shoot.removeEventListener('click', playRound);
        });

        const again = document.createElement('button');
        again.id = "playAgain"
        again.textContent = 'Play Again';
        end.appendChild(again);    

        again.addEventListener('click', reset);

        function reset(e) {
            let selections = document.querySelectorAll(".selections");
            selections[0].style.display = "none";
            selections[1].style.display = "none";
            
            playerScore = 0;
            compScore = 0;
            result.textContent = '';
            
            userScore.textContent = `${playerScore}`;
            computScore.textContent = `${compScore}`;
            game.textContent = '';

            end.removeChild(again);

            const shoots = document.getElementsByClassName('selection');
            Array.from(shoots).forEach((shoot) => {
            shoot.addEventListener('click', playRound);
            });
        }
    }
}