
const fight= ["rock","scissors","paper"];

const getComputerChoice= () => fight[Math.floor(Math.random()*fight.length)];



function singleRound(playerSelection, computerChoice) {
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
  const playerChoice= () => prompt("Brandish Your Weapon");
  const playerSelection = playerChoice()

  console.log(`playerSelection: ${playerSelection}`);
  console.log(`computerChoice: ${getComputerChoice()}`);
  singleRound(playerSelection,getComputerChoice());


 

