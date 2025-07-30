//My Pseudocode 
//firstly get a UI to work with, then delare 3 three buttons (i.e rock, paper, scissors)
//after declaring the buttons, 
// assign playerChoice to the button value,
//assign computerChoice to a random value i.e (rock, paper, scissors);
//after the assignment, 
//compare their choices according to the game rules for final result i.e
// if playerChoice ==== computerChoice then return draw also update the Draw score on the UI
//else if playerChoice === rock then computerChoice === scissors return Win also update the win score on the UI
//else if playerChoice === scissors then computerChoice === paper return Win also update the win score on the UI
// else if playerChoice === paper then computerChoice === rock return Win also update the win score on the UI
//else return lose also update the lose score on the UI.
//END..

//Here am declaring all the varriables i need 
const buttons = document.querySelectorAll('.btn');
const playerDisplay = document.querySelector('.player_choice');
const computerDisplay = document.querySelector('.computer_choice');
const wonScore = document.querySelector('.won_score');
const drawScore = document.querySelector('.draw_score');
const loseSore = document.querySelector('.lose_score');
const gameTitle = document.querySelector('.display_title');
let win = 0;
let draw = 0;
let lose = 0;

//this function generates computerChoice
function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

//this function assign the game choices to the UI (rock, paper, and scissors) 
function getEmoji(choice){
  if(choice === 'rock') return '✊';
  if(choice === 'paper') return '✋';
  if(choice === 'scissors') return '✌️';
}

//this function compares playerChoice and computerChoice according to the game rules and the give
//the required output i.e win, lose, or draw respectively.
function getResult(playerPick, computerPick){
  if(playerPick === computerPick){
    return 'draw'
  }else if((playerPick === 'rock' && computerPick === 'scissors') ||
            (playerPick === 'scissors' && computerPick === 'paper') ||
            (playerPick === 'paper' && computerPick === 'rock')
  ){
    return 'win'
  }else{
    return 'lose'
  }
}

//this adds click event to the buttons i.e rock button, paper button and scissors button 
//once been clicked this event runs.
buttons.forEach(button =>{
  button.addEventListener('click', ()=>{
    const playerChoice = button.value;
    const computerChoice = getComputerChoice();

    playerDisplay.textContent = getEmoji(playerChoice);
    computerDisplay.textContent = getEmoji(computerChoice);

    const result = getResult(playerChoice, computerChoice);

    const resetButton = document.querySelector('.reset_btn');

  //this is the game reset button which resets the entire game once been clicked and update
  //the UI respectively
resetButton.addEventListener('click', () => {
  win = 0;
  draw = 0;
  lose = 0;

  wonScore.textContent = win;
  drawScore.textContent = draw;
  loseSore.textContent = lose;

  playerDisplay.textContent = '✊';
  computerDisplay.textContent = '✊';

  gameTitle.textContent = "Let's Play";
});

///this condition updates the game result i.e win, lose and draw.
    if (result === 'win'){
      win++
      wonScore.textContent = win;
      gameTitle.textContent = 'You Win!';
    }else if (result === 'draw'){
      draw++
      drawScore.textContent = draw;
      gameTitle.textContent = 'Draw!';
    }else {
      lose++
      loseSore.textContent = lose;
      gameTitle.textContent = 'You Lose!';
    }
  })
})

