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
        while(this.started){
            this.draw.drawField();
            await sleep(this.timeout);

            let status = snake.nextStep();
            if(status == STATUS_DEAD){
                console.log("You died");
                return;
            }else if(status == STATUS_ATE){
                console.log("Ate");
                foodgen.produce();
                snake = new Snake(this.field, this.config);
            }
        }
    }

    stop(){
        this.started = false;
    }

}




