/**
 * Returns a random number within max and min.
 * 
 * @param {Number} min minimum value.
 * @param {Number} max maximum value.
 * @returns {Number} random number within max and min.
 */
function randomNumber(min, max) {
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
 * @param {Number} min minimum value (for randomNumber function).
 * @param {Number} max maximum value (for randomNumber function).
 * @returns {String} the winner of 5 matches, ties not included.
 */
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

const MIN_CHOICE = 1;    //These two choices are the upper and 
const MAX_CHOICE = 3;    //lower bounds for the computer's Number Choice

console.log(game(MIN_CHOICE, MAX_CHOICE));










