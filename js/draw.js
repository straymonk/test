class Draw {

    constructor(field, config){
        this.context    = document.getElementById('field').getContext('2d');

        this.field = field.field;
        this.rows = config.rows;
        this.cols = config.cols;

        this.xStartPos  = 0;
        this.yStartPos  = 0;

        this.cellSide   = config.cellSide;
    }

    drawField() {
        this.context.clearRect(this.xStartPos, this.yStartPos, this.cols * this.cellSide, this.rows * this.cellSide);
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                if(this.field[row][col] == RECT || this.field[row][col] == SNAKE || this.field[row][col] == DEAD_SNAKE){
                    this.context.fillStyle="#800000";
                    this.context.beginPath();
                    this.context.rect(this.xStartPos + (col * this.cellSide), this.yStartPos + (row * this.cellSide), this.cellSide, this.cellSide);
                    this.context.fill();
                    this.context.lineWidth = 2;
                    this.context.strokeStyle = "black";
                    this.context.stroke();
                }else if(this.field[row][col] == FOOD){
                    this.context.fillStyle="#006600";
                    this.context.beginPath();
                    this.context.arc(this.xStartPos + (col * this.cellSide) + this.cellSide / 2, this.yStartPos + (row * this.cellSide) + this.cellSide / 2, 10,0,Math.PI*2);
                    this.context.fill();
                }
            }
        }
    }

    youDied(){
        this.context.font = "60px Comic Sans MS";
        this.context.fillStyle = "red";
        this.context.strokeStyle = "black";
        this.context.textAlign = "center";
        this.context.fillText("You died!", (this.cols * this.cellSide)/2, (this.rows * this.cellSide)/2); 
        this.context.strokeText("You died!", (this.cols * this.cellSide)/2, (this.rows * this.cellSide)/2);
    }

}
