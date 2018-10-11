const STATUS_STOP = 0;
const STATUS_FALL = 1;

class DeadSnake {

    constructor(field, config, snake) {
        this.field = field.field;
        this.rows = config.rows;
        this.cols = config.cols;

        this.direction = DOWN;

        this.deadSnake = snake.snake;
    }

    nextStep(){
        for(let i = 0; i < this.rows; i++){
        }
        if(!this.checkWall() || !this.checkOtherSnake()){
            for(let i = 0; i < this.deadSnake.length; i++){ 
                this.field[this.deadSnake[i].y][this.deadSnake[i].x] = RECT
            }
            return STATUS_STOP;
        }

        for(let i = 0; i < this.deadSnake.length; i++){
            this.field[this.deadSnake[i].y][this.deadSnake[i].x] = EMPTY
            this.deadSnake[i].y = this.deadSnake[i].y + 1; 
        }

        for(let i = 0; i < this.deadSnake.length; i++){
            this.field[this.deadSnake[i].y][this.deadSnake[i].x] = DEAD_SNAKE
        }
        return STATUS_FALL;
    }

    checkWall(){
        for(let i = 0; i < this.deadSnake.length; i++){
            if(this.deadSnake[i].y + 1 > this.rows - 1) {
                return STATUS_STOP;
            } 
        }
        return STATUS_FALL;
    }

    checkOtherSnake(){
        for(let i = 0; i < this.deadSnake.length; i++){
            if(this.field[this.deadSnake[i].y + 1][this.deadSnake[i].x] == RECT){
                return STATUS_STOP;
            }
        }
        return STATUS_FALL;
    }

}
