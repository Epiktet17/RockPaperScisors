let pointComp = 0;
let pointsPlayer = 0;
function getComputerChoice(){
  let min = Math.ceil(1);
  let max = Math.floor(3);
  compChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch(compChoice){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scisors";
  }
}
function playerSelection(){
  let choice = prompt("What will you choose: Rock, Paper or Scisors?");
  return choice.toLowerCase();
}

function playRound(){
  let userCh = playerSelection();
  let computerCh = getComputerChoice();
  if (userCh == computerCh){
    return "It's a tie";
  }
  else if (userCh == "rock" && computerCh == "scisors" || userCh == "paper" && computerCh == "rock" || userCh == "scisors" && computerCh == "rock") {
    pointsPlayer++;
    return "You win {userCh} beats {compChoice}";
  }
  else {
    pointComp++;
    return "You lose {compChoice} beats {userCh}";
  }
}
function playGame(){
  let roundScore=0;
  let tockRac = 0;
  while(roundScore <=4){
    console.log(playRound());
    roundScore++;
  }

  if(pointComp > pointsPlayer){
    console.log("Computer wins");
  }
  else if(pointComp < pointsPlayer){
    console.log("Player wins");
  }
  else{
    console.log("Tie");
  }

}
