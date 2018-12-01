const qwe = ['LEFT', 'RIGHT', 'UP', 'DOWN'];
const anti = {
    'LEFT': 'RIGHT',
    'RIGHT': 'LEFT',
    'UP': 'DOWN',
    'DOWN': 'UP'
};

module.exports = class Player {
    constructor(field, startPosition, players) {
        this.counter = 0;
        this.currentDirection = 'LEFT';
    }

    async tick(content) {
        if (this.counter >= 2) {
            const newDirectionIndex = Math.ceil(Math.random() * 2) - 1;
            const targetDirections = qwe.filter(dir => (dir !== this.currentDirection && dir !== anti[this.currentDirection]));

            this.currentDirection = targetDirections[newDirectionIndex];
            this.counter = 0;
        }

        ++this.counter;

        return this.currentDirection;
    }

    async win() {
        console.log('WIN');
    }

    async dead() {
        console.log('DEAD');
    }
}
