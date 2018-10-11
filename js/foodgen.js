class FoodGen{

    constructor(field, config){
        this.field = field.field;
        this.config = config;
    }

    produce(){
        let xPoint = Math.floor(Math.random()*this.config.rows);
        let yPoint = Math.floor(Math.random()*this.config.cols);
        
        while(this.field[xPoint][yPoint] != EMPTY){
            xPoint = Math.floor(Math.random()*this.config.rows);
            yPoint = Math.floor(Math.random()*this.config.cols);
        }

        this.field[xPoint][yPoint] = FOOD;
    }

}
