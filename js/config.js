class Config {

    constructor(){
        this.defaultConfig = {
            rows: 20,
            cols: 10,
            cellSide: 40,
            timeout: 250
        }
    }

    save(config){
        var serialObj = JSON.stringify(config);
        try{
            localStorage.setItem("config", serialObj);
        }catch (e){
            if (e == QUOTA_EXCEEDED_ERR) {
                alert("localStorage limit exceeded");
            }
        }
    }

    load(){
        if(localStorage.getItem("config") === null){
            this.save(this.defaultConfig);
            return JSON.parse(localStorage.getItem("config"));
        }else{
            return JSON.parse(localStorage.getItem("config"));
        }
    }

    setRows(rows){
        this.config = this.load();
        this.config.rows = rows;
        this.save(this.config);
    }

    setCols(cols){
        this.config = this.load();
        this.config.cols = cols;
        this.save(this.config);
    }

    setCellSide(cellSide){
        this.config = this.load();
        this.config.cellSide = cellSide;
        this.save(this.config);
    }

    setTimeout(timeout){
        this.config = this.load();
        this.config.timeout = timeout;
        this.save(this.config);
    }

    reset(){
        this.save(this.defaultConfig);
    }

}
