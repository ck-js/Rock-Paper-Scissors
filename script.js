function getComChoice() {
    const strings = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
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

let userSelection = 'Rock';
let comSelection = getComChoice();
