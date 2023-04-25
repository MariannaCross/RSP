
const fight= ["rock","scissors","paper"];

const getComputerChoice = () => {return fight[Math.floor(Math.random()*fight.length)];
}
//return is implicit in arrow function, but I'm having trouble with game function, so I changed this.
function singleRound(playerSelection, computerChoice) {
    console.log(`Player Selection: ${playerSelection}`);
    console.log(`Computer Choice: ${computerChoice}`);
    if (playerSelection === computerChoice) {
      console.log("It's a tie!");
      return 'tie';
    } else if (
      (playerSelection === "rock" && computerChoice === "scissors")||
      (playerSelection === "scissors" && computerChoice === "paper")||
      (playerSelection === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
      return 'win';
    } else {
      console.log("You lose!");
      return 'loss';
    }
  }
//player and computer selections need to be consoled first in order to run through the function in the right way.
//return used to keep score
  const playerChoice= () => prompt("Brandish Your Weapon");
  const playerSelection = playerChoice()

// removing singleRound(playerSelection,getComputerChoice());
//play 5 times as Game function. Resetting the page to reset the promp keeps resetting the match array.
  function game (){
    let match = [];
   for (let i = 0; i < 5; i++) {
    let playerSelection = playerChoice();
    let computerChoice = getComputerChoice();
    let result = singleRound(playerSelection,computerChoice);
    match.push(result)
   }
   console.log(match);
  }

game(); 



 

