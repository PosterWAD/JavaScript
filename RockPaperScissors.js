
let computerChoice = Math.ceil(Math.random()*3)
    if (computerChoice === 1) {
      computerChoice = 'rock'}
    else if (computerChoice === 2) {
      computerChoice = 'paper'}
    else if (computerChoice === 3) {
      computerChoice = 'scissors'}
    
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else return null;
}

const determineWinner = (userInput, computerChoice) => {
  if (userInput === computerChoice) {
    return 'Remis'
  }
  else if (userInput === 'rock') {
    if (computerChoice === 'scissors') {
        return 'You won!'
    }
    else return 'You lost!'
  }
  else if (userInput === 'paper') {
    if (computerChoice === 'scissors') {
        return 'You lost!'
    }
    else return 'You won!' }
  else if (userInput === 'scissors') {
    if (computerChoice === 'rock') {
        return 'You lost!'
    }
    else return 'You won!'
  }
}
const userSelection = getUserChoice('rock');
if (userSelection) {
    console.log(`User chose: ${userSelection}`);
    console.log(`Computer chose: ${computerChoice}`);
    const winner = determineWinner(userSelection, computerChoice);
    console.log(winner);
}