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

let userSelection = prompt('Rock, Paper, or Scissors?');
let playerSelection = userSelection.toLowerCase();
let computerSelection = getComputerChoice;

let playerScore = 0
let compScore = 0


function playRound(playerSelection, computerSelection) {
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

DONE and then the console.log(needs to be something more useful like the score. but how?!

DONE ok i prob need different function to keep the score
and another different function to console.log(the winner of the round

is it all going to be inside this loop thing? i guess so...

ok so first. i need to change my playRound function to console.log
i feel sad bc i wrote it and now i change it. but i committed it to github
so i can go back and see it right? yes that is the literal point of git

ok im changing it. ok it still works. now what?
gah
my head hurts

i need game () to be playRound and number of playrounds = i
can i google shit. imma google shit

*/


for (let i = 0; i < 5; i++) {
    func game() = playRound

}





