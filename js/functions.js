const EMPTY         = 0;
const RECT          = 1;
const SNAKE         = 2;
const DEAD_SNAKE    = 3;
const FOOD          = 4;

function start(){
    config = new Config();
    conf = config.load();
    game = new Game(conf);
    game.setup();
    game.run();
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
