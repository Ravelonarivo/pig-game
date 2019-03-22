import { elements } from './base';

export const showDice = point => {

    if (point === 0) {
        elements.dice.style.display = 'none';
    } else {
        elements.dice.style.display = 'block';
        elements.dice.src = `img/dice-${point}.png`;
    }
}