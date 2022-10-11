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

