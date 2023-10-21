let computerScore = 0;
let playerScore = 0;
function computerChoice(){
  const optionsRPS = ["rock","paper","scisors"];
  let randomPick = Math.floor(Math.random() * 3);
  return optionsRPS[randomPick];
}


const body = document.querySelector('body');
const btnRock = document.createElement('button');
btnRock.textContent = 'rock';
btnRock.value = 'rock';
const btnPaper = document.createElement('button');
btnPaper.textContent = 'paper';
btnPaper.value = 'paper';
const btnScisors = document.createElement('button');
btnScisors.textContent = 'scisors';
btnScisors.value = 'scisors';
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScisors);
const selectAllButtons = document.querySelectorAll('button');
const divForDisplay = document.createElement('div');
body.appendChild(divForDisplay);
const finalResult = document.createElement('h4');
const liveScore = document.createElement('p');
const liveMoves = document.createElement('p')


selectAllButtons.forEach((button) => {
  button.addEventListener('click',()=>{
    playRound(button.value);
  });
});

function displayResult(result){
  finalResult.textContent = result;
  divForDisplay.appendChild(finalResult);
}
function displayScore(){
  divForDisplay.appendChild(liveMoves);
  liveScore.textContent = `Player: ${playerScore} ||  Computer: ${computerScore}`;
  divForDisplay.appendChild(liveScore);
}

function playRound(playerPick){
  let computerPick = computerChoice();
  displayScore();

  if (playerPick == 'rock' && computerPick == 'scisors'||
      playerPick == 'paper' && computerPick == 'rock'||
      playerPick == 'scisors' && computerPick == 'paper') {
      liveMoves.textContent = `Player WINS ${playerPick} beats ${computerPick}`;
      playerScore++;
  }

  else if (playerPick == computerPick) {
    liveMoves.textContent = `It's a tie, you both choose ${playerPick}`;
  }
  else {
    liveMoves.textContent = `Computer WINS ${computerPick} beats ${playerPick}`;
    computerScore++;
  }
displayScore();
if (computerScore == 5) {
  result = 'The computer WINS, it was the first to get 5 points';
  displayResult(result);
}
else if (playerScore == 5) {
  result = 'You WIN, you are the first to get 5 points';
  displayResult(result);
}

}
