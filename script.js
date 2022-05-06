  function RandomNumber (min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

function ComputerPlay(computerNumChoice){
  switch (computerNumChoice){
    case 1:
      return "Rock";
    break;
    case 2:
      return "Paper";
    break;
    case 3:
      return "Scissors";
    break;
  }
}

function PlayGame (computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    return "Tie game";
  }
  else if(computerSelection === "Scissors" && playerSelection === "Paper"){
    return "Computer wins";
  }
  else if(computerSelection === "Paper" && playerSelection === "Rock"){
    return "Computer wins";
  }
  else if(computerSelection === "Rock" && (playerSelection === "Scissors")){
    return "Computer wins";
  }
  else {
    return "Player Wins"
  }
}


minChoice = 1;    //These two choices are the upper and 
maxChoice = 3;    //lower bounds for the computer's Number Choice

let computerNumChoice = RandomNumber(minChoice, maxChoice);   //This Produces the random computer # choice

let computerSelection = ComputerPlay(computerNumChoice);      //This produces the final "Rock Paper Scissor" choice

let playerSelection = prompt("Rock, Paper or Scissors?");     //Prompts user for their selection

if(playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"){  //Checks if the user spelled
  playerSelection = prompt("Please type your choice exactly: Rock Paper or Scissors?")            //their choice properly
}


console.log(computerSelection, playerSelection);

let result = PlayGame(computerSelection, playerSelection);

console.log(result);  









