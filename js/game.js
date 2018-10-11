class Game {
    
    constructor(config){
        this.config = config;
        this.timeout = this.config.timeout;
        this.started = false;
    }

    setup(){
        this.field = new Field();
        this.field.setup(); 
        this.draw = new Draw(this.field, this.config);
    }

    async run(){
        this.started = true;

        let foodgen = new FoodGen(this.field, this.config);
        foodgen.produce();
        let snake = new Snake(this.field, this.config);
        let deadSnake = null;
        while(this.started){
            this.draw.drawField();
            await sleep(this.timeout);

            let status = snake.nextStep();
            if(deadSnake != null){
                if(!deadSnake.nextStep()){
                    deadSnake = null;
                }
            }

            if(status == STATUS_DEAD){
                this.draw.youDied();
                this.stop();
            }else if(status == STATUS_ATE){
                foodgen.produce();
                deadSnake = new DeadSnake(this.field, this.config, snake);
                snake = new Snake(this.field, this.config);
            }
        }
    }

    stop(){
        this.started = false;
    }

}




