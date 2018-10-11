class Field {

    constructor() {
        this.rows       = 20;
        this.cols       = 10;
    }

    setup(){
        this.field = new Array(this.rows);
        for(let i = 0; i < this.rows; i++){
            this.field[i] = new Array(this.cols).fill(0)
        }
    }

}
