export default class Dice {

    constructor() {
        this.point = 0;
    }

    roll() {
        const point = Math.floor((Math.random() * 6) + 1);
        this.point = point;
    }
}