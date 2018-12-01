const Player = require('./player');
const Client = require('snail-intelligence-client');
const { default: Game } = require('snail-intelligence');
const lodash = require('lodash');
const co = require('co');
const initial = require('./config');

const client = new Client(3333, Player);

co(function * () {
    try {
        for (let i = 0; i < 1; ++i) {
            const game = new Game(lodash.cloneDeep(initial));
            const initStatus = yield game.init();

            // console.log('init status', initStatus);

            while (!game.end) {
                const moves = yield game.tick();

                // console.log('tick', {
                //     moves,
                //     marks: game.marks,
                //     positions: game.positions
                // });
            }
        }
    } catch (e) {
        console.log(e);
    }
}).then(() => {
    process.exit();
});