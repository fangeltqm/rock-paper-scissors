/* 
first, computer needs to shoot a random rock, paper, or scissors
that becomes the computerSelection

then, the user/player selects either rock, paper, or scissors

then somehow 
 if player = rock and computer = paper, then say you lose! paper beats rock
 if player = rock and computer = scissors, then say You win!
 if player = rock and computer = rock, then TIE!

 if player = paper and computer = paper, then Tie!
 if player = paper  and computer = scissors, then say You lose!
 if player = paper and computer = rock, then You win!

 if player = scissors and computer = paper, then say you win!
 if player = scissors and computer = scissors, then TIE
 if player = scissors and computer = rock, then you lose!




*/

const choices = ['rock', 'paper', 'scissors']; 
/* i put the choices in an array, 
an array can hold many values under a single name, 
i can access the values by referring to an index number 
it is common practice to declare arrays with const
dont forget quotes bc string not variable
index number start with 0. [0] is the first element. [1] is the second. 
i need computerchoice to randomly console.log(0, 1, or 2 in the array
*/
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)];

/* Math.random generates random number between 0 and 1, not including 1. 
multiply it by the .length of the choices array which is 3,
use Math.floor to round down to the nearest integer so 0, 1, or 2
let getComputerChoice = that. this is a function expression */



let playerScore = 0
let compScore = 0


function playRound() {
    let userSelection = prompt('Rock, Paper, or Scissors?');
    let playerSelection = userSelection.toLowerCase();
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];


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


/* game - round of 5 
Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 
round game that keeps score and reports a winner or loser at the end.

ok. they gave me a loop that plays 5 rounds and i need to put my playRound
function in it

its telling to use console log to display the results of each round and the winner 
at the end. which means i need to change my playRound function to console.log
where it says return


DONE ok i prob need different function to keep the score
and another different function to console.log(the winner of the round


*/

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


/* i put player and computer selection inside of playround so it would prompt
and regenerate each round

consolidated tie

made a new function game() like they told me to
made it a loop to 5 of the playround

at the end of the 5 rounds, it shows the winner based on the score */

