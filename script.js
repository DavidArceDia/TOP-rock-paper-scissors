  function RandomNumber (min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

minChoice = 1;
maxChoice = 3;

let computerNumChoice = RandomNumber(minChoice, maxChoice);

let computerPlay;

switch (computerNumChoice){
  case 1:
    computerPlay = "Rock";
  break;
  case 2:
    computerPlay = "Paper";
  break;
  case 3:
    computerPlay = "Scissors";
  break;
}

