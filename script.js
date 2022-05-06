/**
 * Returns a random number within max and min.
 * I used default parameters to simplify the functions.
 * 
 * @param {Number} min minimum value, defults to 1.
 * @param {Number} max maximum value defaults to 3.
 * @returns {Number} random number within max and min.
 */
function randomNumber(min=1, max=3) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

/**
 * Returns a string "Rock" "Paper" or "Scissors".
 * 
 * @param {Number} computerNumChoice Randomly selected number.
 * @returns {String} converted number into string "Rock" "Paper" or "Scissors".
 */
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

/**
 * Returns the result of a single Rock-Paper-Scissors game.
 * 
 * @param {String} computerSelection computer's choice of Rock, Paper or Scissors.
 * @param {String} playerSelection player's choice of Rock, Paper or Scissors.
 * @returns Result of the match.
 */
function playGame(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    return "Tie game";
  }
  else if((computerSelection === "Scissors" && playerSelection === "Paper")
          || (computerSelection === "Paper" && playerSelection === "Rock")
          || (computerSelection === "Rock" && playerSelection === "Scissors")){
    return "Computer wins";
  }
  else {
    return "Player wins";
  }
}

/**
 * Plays 5 rounds of playGame, each with a different computerSelection - all nessisary
 * computerSelection functions are called inside.
 * 
 * @returns {String} the winner of 5 matches, ties not included.
 */
function game() {

  let computerWinCount = 0;
  let playerWinCount = 0;

  for (let i = 0; i < 5; i++){
    
    let computerNumChoice = randomNumber();   //This Produces the random computer # choice
    let computerSelection = computerPlay(computerNumChoice);      //This produces the final "Rock Paper Scissor" choice
    
    let playerSelection = prompt("Rock, Paper or Scissors?");     //Prompts user for their selection

    if(playGame(computerSelection, playerSelection) === "Computer wins"){
      computerWinCount++;
      console.log("Computer Wins");
    }
    else if(playGame(computerSelection, playerSelection) === "Player wins"){
      playerWinCount++;
      console.log("Player Wins");
    }
    else if(playGame(computerSelection, playerSelection) === "Tie game"){
      i--;
      console.log("Tie");
    }
  }

  return (playerWinCount > computerWinCount) ? "Player Wins!" : "Computer Wins!";
}

console.log(game());










