function getComChoice() {
    const strings = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

// const userSelection = getUserInput();
// const comSelection = getComChoice();
;
function getUserInput() {
    let input = prompt('Type Rock, Paper or Scissors', '');
return input;
}

function play(userSelection, comSelection) {

    
    userSelection = userSelection.toLowerCase();
comSelection = comSelection.toLowerCase();

if (userSelection === 'rock' && comSelection === 'scissors') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (userSelection === 'paper' && comSelection === 'rock') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (userSelection === 'scissors' && comSelection === 'paper') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
}
else if (userSelection === 'rock' && comSelection === 'paper') {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else if (userSelection === 'paper' && comSelection === 'scissors') {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else if (userSelection === 'scissors' && comSelection === 'rock') {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else {
    return 'It\'s a draw!';
}
    }

    let counterWin = 0;
    console.log(counterWin);
let counterLose = 0;

function checkWin(string) {
    let result = string;
    let word = 'Win';
    if (result.includes(word)) {
     return counterWin = counterWin +1;
    }    
}
function checkLose(string) {
    let result = string;
    let word = 'Lose';
    if (result.includes(word)) {
     return counterLose = counterLose +1;
    }
    
}

function game() {

    let a = play(getUserInput(), getComChoice());
console.log(a);
let scoreWin = checkWin(a);
let scoreLose = checkLose(a);


let b = play(getUserInput(), getComChoice());
console.log(b);
scoreWin = checkWin(b);
scoreLose = checkLose(b);
}