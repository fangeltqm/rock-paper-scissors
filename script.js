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
i need computerchoice to randomly return 0, 1, or 2 in the array
*/
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)];

/* Math.random generates random number between 0 and 1, not including 1. 
multiply it by the .length of the choices array which is 3,
use Math.floor to round down to the nearest integer so 0, 1, or 2
let getComputerChoice = that. this is a function expression */

let userSelection = prompt('Rock, Paper, or Scissors?');
let playerSelection = userSelection.toLowerCase();
let computerSelection = getComputerChoice;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'YOU LOSE!';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'TIE!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'YOU WIN!';
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'TIE!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'YOU WIN!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'YOU LOSE!';
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'YOU WIN!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'YOU LOSE';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'TIE!';
    }

}





