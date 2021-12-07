let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const ranDom = Math.floor(Math.random()*9);
  return ranDom;
};

const compareGuesses = (currentHumanGuess, computerGuess,target) =>{
    if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)){
      return true;
    }
  if (Math.abs(currentHumanGuess - target) > Math.abs(computerGuess - target)){
      return false;
  } 
  if (Math.abs(currentHumanGuess - target) === Math.abs(computerGuess - target)){
    return true;
  }

};

const updateScore = winner => {
  if (winner === 'human') {
    return humanScore ++;
    } else return computerScore++;
    };

const advanceRound = () => currentRoundNumber ++
