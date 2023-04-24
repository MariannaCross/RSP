
const fight= ["rock","scissors","paper"];


const getComputerChoice= () => fight[Math.floor(Math.random()*fight.length)];
console.log(getComputerChoice());
//I want the computer choice to be a random rock/scissor/paper in the array so the array loops.
// learned about arrow functions
playerChoice=fight[Math.floor(Math.random()*fight.length)];
console.log(playerChoice); 
//This is a place marker until I put in the prompt
//prompt()// to get input from user

function singleRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors")||
      (playerChoice === "scissors" && computerChoice === "paper")||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }

  singleRound(playerChoice,getComputerChoice());


 

