
const fight= ["rock","scissors","paper"];

const getComputerChoice= () => fight[Math.floor(Math.random()*fight.length)];

function singleRound(playerSelection, computerChoice) {
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Choice: ${computerChoice}`);
    if (playerSelection === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerChoice === "scissors")||
      (playerSelection === "scissors" && computerChoice === "paper")||
      (playerSelection === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
  //player and computer selections need to be consoled first in order to run through the function in the right way.
  const playerChoice= () => prompt("Brandish Your Weapon");
  const playerSelection = playerChoice()

  singleRound(playerSelection,getComputerChoice());


 

