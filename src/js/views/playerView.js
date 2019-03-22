import { elements } from './base';

export const showScore = (player, playerScore) => {
    player === 0 
    ? elements.firstPlayerScore.textContent = playerScore 
    : elements.secondPlayerScore.textContent = playerScore;
}

export const showRoundScore = (player, playerRoundScore) => {
    player === 0
    ? elements.firstPlayerRoundScore.textContent = playerRoundScore
    : elements.secondPlayerRoundScore.textContent = playerRoundScore;
}

export const togglePlayer = () => {
    elements.firstPlayerPanel.classList.toggle('active');
    elements.secondPlayerPanel.classList.toggle('active');
}

export const showWinner = (player) => {
    if (player === 0) {
        elements.firstPlayerPanel.classList.remove('active');
        elements.firstPlayerPanel.classList.add('winner');
        elements.firstPlayerName.textContent = 'WINNER !'
    } else {
        elements.secondPlayerPanel.classList.remove('active');
        elements.secondPlayerPanel.classList.add('winner')
        elements.secondPlayerName.textContent = 'WINNER !'
    }    
}

export const getFinalScore = () => {
    return elements.finalScore.value === '' ? 10 : elements.finalScore.value; 
}

export const initView = () => {
    elements.firstPlayerPanel.classList.remove('winner');
    elements.secondPlayerPanel.classList.remove('winner');
    elements.firstPlayerPanel.classList.add('active');
    elements.firstPlayerName.textContent = 'Player 1';
    elements.secondPlayerName.textContent = 'Player 2';
}