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
                    this.context.fillRect(this.xStartPos + (col * this.cellSide), this.yStartPos + (row * this.cellSide), this.cellSide, this.cellSide);
                }else if(this.field[row][col] == FOOD){
                    this.context.fillStyle="#006600";
                    this.context.beginPath()
                    this.context.arc(this.xStartPos + (col * this.cellSide) + this.cellSide / 2, this.yStartPos + (row * this.cellSide) + this.cellSide / 2, 10,0,Math.PI*2);
                    this.context.fill();
                }
            }
        }
    }

}
