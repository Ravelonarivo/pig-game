export default class Player {

    constructor() {
        this.score = 0;
        this.roundScore = 0;
    }

    calcScore(score) {
        score !== 0 ? this.score += score : this.score = 0;
    }

    calcRoundScore(score) {
        this.roundScore += score;
    }
}