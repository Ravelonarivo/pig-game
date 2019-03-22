/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global app controller
import { elements } from './views/base';

import Dice from './models/Dice';
import Player from './models/Player';

import * as diceView from './views/diceView';
import * as playerView from './views/playerView';

const state = {};

const initState = () => {
    state.player = 0;
    state.init = true;
    state.players = [];
    state.holdScore = false;
    state.isFinish = false;
    state.score = 0;
}

window.state = state;

const controlDice = () => {

    if (state.init) {
        state.dice = new Dice();
        state.init = false;
    } else {
        // Rolle Dice
        state.dice.roll();

        if (state.dice.point !== 1 ) {
            state.score = state.dice.point;
        } else {
            state.score = 0;
        }
    }
   
    // Show dice on the screen 
    diceView.showDice(state.dice.point);
};


const controlPlayer = () => {
    
    if (state.players.length === 0) {
        // init game
        state.players[0] = new Player();
        state.players[1] = new Player();

        playerView.showScore(0, state.players[0].score);
        playerView.showScore(1, state.players[1].score);

        playerView.showRoundScore(0, state.players[0].roundScore);
        playerView.showRoundScore(1, state.players[1].roundScore);

        playerView.initView();
    } else {  

        if (state.holdScore) {
            // Calculate current player round score
            state.players[state.player].calcRoundScore(state.players[state.player].score); 

            state.score = 0;
            state.holdScore = false;

            if (state.players[state.player].roundScore >= playerView.getFinalScore()) {
                state.isFinish = true;
                playerView.showWinner(state.player);
            }
        }

        // Calculate current player score
        state.players[state.player].calcScore(state.score);

        // Show current player score
        playerView.showScore(state.player, state.players[state.player].score);

        // Show current player round score
        playerView.showRoundScore(state.player, state.players[state.player].roundScore);

        if (state.score === 0 && state.isFinish === false) {
            state.player === 0 ? state.player = 1 : state.player = 0;
            playerView.togglePlayer();
        }
    }
}

const control = () => {
    if (state.holdScore === false) {
        controlDice();
    }

    controlPlayer();
}

window.addEventListener('load', () => {
    initState();
    control();
});

elements.buttonRoll.addEventListener('click', () => {
    if (state.isFinish === false) {
        control();
    }
});

elements.buttonHold.addEventListener('click', () => {
    state.holdScore = true;

    if (state.isFinish === false) {
        control();
    }   
});

elements.buttonNew.addEventListener('click',  () => {
    initState();
    control();
})


