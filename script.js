function getComChoice() {
    const strings = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex]
}

function play(userSelection, comSelection) {
if (userSelection === 'Rock' && comSelection === 'Scissors') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (userSelection === 'Paper' && comSelection === 'Rock') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (userSelection === 'Scissors' && comSelection === 'Paper') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (userSelection === 'Paper' && comSelection === 'Rock') {
    return `You Win! ${userSelection} beats ${comSelection}!`;
} else if (!(userSelection === 'Rock' && comSelection === 'Scissors')) {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else if (!(userSelection === 'Paper' && comSelection === 'Rock')) {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else if (!(userSelection === 'Scissors' && comSelection === 'Paper')) {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else if (!(userSelection === 'Paper' && comSelection === 'Rock')) {
    return `You Lose! ${comSelection} beats ${userSelection}!`;
} else {
    return 'It\'s a draw!';
}
    

}

let userSelection = 'Rock';
let comSelection = getComChoice();
