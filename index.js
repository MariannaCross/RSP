
const fight= ["smash","blind","slice"];
const rock=fight[0];
const paper=fight[1]
const scissors=fight[2]
//It seems redundant now, but I feel like I need to do it this way to keep it straight in my head.

const getComputerChoice= fight[Math.floor(Math.random()*fight.length)];
console.log(getComputerChoice);
//I want the computer choice to be a random rock/scissor/paper in the array so the array loops.

playerSelection=fight[Math.floor(Math.random()*fight.length)];
console.log(playerSelection); 
//This is a place marker until I put in the prompt
//prompt()// to get input from user

function singleRound(playerSelection,getComputerChoice){
   if (playerSelection > getComputerChoice) {
   result = "good";
   } else {
    result = "not good";
   }
 
   }
//I am not having good results here.


//function game(){
   // singleRound five times }