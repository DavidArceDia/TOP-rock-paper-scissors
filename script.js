function randomNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

function computerPlay(computerNumChoice){
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

function playGame(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    return "Tie game";
  }
  else if(computerSelection === "Scissors" && playerSelection === "Paper"){
    return "Computer wins";
  }
  else if(computerSelection === "Paper" && playerSelection === "Rock"){
    return "Computer wins";
  }
  else if(computerSelection === "Rock" && playerSelection === "Scissors"){
    return "Computer wins";
  }
  else {
    return "Player wins";
  }
}

function game(minChoice, maxChoice) {

  let computerWinCount = 0;
  let playerWinCount = 0;

  for (let i = 0; i < 5; i++){
    
    let computerNumChoice = randomNumber(minChoice, maxChoice);   //This Produces the random computer # choice

    let computerSelection = computerPlay(computerNumChoice);      //This produces the final "Rock Paper Scissor" choice
    
    let playerSelection = prompt("Rock, Paper or Scissors?");     //Prompts user for their selection

    if(playGame(computerSelection, playerSelection) === "Computer wins"){
      computerWinCount++;
      console.log("Computer Wins");
      console.log(computerSelection, playerSelection);
    }
    else if(playGame(computerSelection, playerSelection) === "Player wins"){
      playerWinCount++;
      console.log("Player Wins");
      console.log(computerSelection, playerSelection);
    }
    else if(playGame(computerSelection, playerSelection) === "Tie game"){
      --i;
      console.log("Tie");
      console.log(computerSelection, playerSelection);
    }
    console.log(i);
  }

  return (playerWinCount > computerWinCount) ? "Player Wins!" : "Computer Wins!"
}


minChoice = 1;    //These two choices are the upper and 
maxChoice = 3;    //lower bounds for the computer's Number Choice

console.log(game(minChoice, maxChoice));










