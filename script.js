function getComChoice() {
    const strings = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}
function getUserChoice() {
    return rock.value;
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
    let counterLose = 0;
    let counterPlay = 0;

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

function increasePlayCounter() {
    return counterPlay = counterPlay +  1;
}



function game() {

    let a = play(getUserChoice(), getComChoice());
playResults.textContent = a;
checkWin(a);
checkLose(a);
increasePlayCounter();
scoreWin.textContent = 'Won: '+ counterWin;

// let b = play(getUserInput(), getComChoice());
// console.log(b);
// checkWin(b);
// checkLose(b);

// let c = play(getUserInput(), getComChoice());
// console.log(c);
// checkWin(c);
// checkLose(c);

// let d = play(getUserInput(), getComChoice());
// console.log(d);
// checkWin(d);
// checkLose(d);

// let e = play(getUserInput(), getComChoice());
// console.log(e);
// checkWin(e);
// checkLose(e);

 if (counterWin > counterLose) {
    return `Winner! You won ${counterWin} times & lost ${counterLose} times`;
 } else if (counterLose > counterWin) {
    return `Loser! You won ${counterLose} times & lost ${counterWin} times`;
 } else {
    return `It\'s a Draw! You won ${counterWin} times & lost ${counterLose} times`;
 }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');



rock.addEventListener('click', game)
// paper.addEventListener('click', play('paper', getComChoice()))
// scissors.addEventListener('click', play('scissors', getComChoice()))

const playResults = document.querySelector('#play-result')

const scoreWin = document.querySelector('#score-win')

const gameResults = document.querySelector('#game-result')

