const DOWN  = 0;
const UP    = 1;
const LEFT  = 2;
const RIGHT = 3;

const STATUS_DEAD   = 0;
const STATUS_NONE   = 1;
const STATUS_ATE    = 2;

class Snake{

    constructor(field, config){
        this.field = field.field;
        this.rows = config.rows;
        this.cols = config.cols;

        this.direction = DOWN;
        this.waitForRedraw = false;

        let context = this;
        document.addEventListener('keydown', function(event) {
            if(!context.waitForRedraw){
                if (event.keyCode == 37) {
                    context.changeDirection(LEFT);
                } else if (event.keyCode == 38) {
                    context.changeDirection(UP);
                } else if (event.keyCode == 39) {
                    context.changeDirection(RIGHT);
                } else if (event.keyCode == 40) {
                    context.changeDirection(DOWN);
                }
                context.waitForRedraw = true;
            }else{
            }
        }, true);

        this.setup();
    }

    setup(){
        let startCol = this.cols / 2;
        this.snake = [
            {x: startCol, y: 0},
            {x: startCol, y: -1},
            {x: startCol, y: -2},
            {x: startCol, y: -3}
        ];

        this.field[this.snake[0].y][this.snake[0].x] = SNAKE;
    }

    nextStep(){
        for(let i = this.snake.length - 1; i > 0; i--){
            if(this.snake[i].y >= 0){
                this.field[this.snake[i].y][this.snake[i].x] = EMPTY
            }
            this.snake[i] = {...this.snake[i-1]}
        }

        let head = this.snake[0];
        switch(this.direction){
            case DOWN:
                head.y++;
                break;
            case UP:
                head.y--;
                break;
            case LEFT:
                head.x--;
                break;
            case RIGHT:
                head.x++;
                break;
        }

        if(!this.checkWall(head) || !this.checkEatItself(head) || !this.checkRect(head)){
            return STATUS_DEAD;
        }

        let status = STATUS_NONE;

        if(this.field[head.y][head.x] == FOOD){
            status = STATUS_ATE;
            for(let i = 0; i < this.snake.length; i++){
                //wtf???
                if(this.snake[i].y >= 0){
                    this.field[this.snake[i].y][this.snake[i].x] = DEAD_SNAKE;
                }
            }
        }else{
            for(let i = 0; i < this.snake.length; i++){
                if(this.snake[i].y >= 0){
                    this.field[this.snake[i].y][this.snake[i].x] = SNAKE;
                }
            }
        }
        
        this.waitForRedraw = false;
        return status;
    }

    checkWall(head){
        if(head.x < 0 || head.x > this.cols - 1 || head.y < 0 || head.y > this.rows - 1){
            this.started = false;
            return STATUS_DEAD;
        }
        return STATUS_NONE;
    }

    checkEatItself(head){
        if(this.snake.filter(item => item.x === head.x && item.y === head.y).length > 1){
            this.started = false;
            return STATUS_DEAD;
        }
        return STATUS_NONE;
    }

    checkRect(head){
        if(this.field[head.y][head.x] === RECT){
            this.started = false;
            return STATUS_DEAD;
        }
        return STATUS_NONE;
    }

    changeDirection(direction){
        let changeDirection = false;
        switch(direction){
            case DOWN:
                if(this.direction != UP){
                    changeDirection = true;
                }
                break;
            case UP:
                if(this.direction != DOWN){
                    changeDirection = true;
                }
                break;
            case LEFT:
                if(this.direction != RIGHT){
                    changeDirection = true;
                }
                break;
            case RIGHT:
                if(this.direction != LEFT){
                    changeDirection = true;
                }
                break;
        }

        if(changeDirection){
            this.direction = direction;
        }
    }
}
