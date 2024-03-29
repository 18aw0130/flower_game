(function(){
    var Background = window.Background = function(){
        this.bgObj = new createjs.Container();
        game.stage.addChild(this.bgObj);
        
        this.bg = new createjs.Bitmap(game.assets.images.bg_1);
        this.bg.setTransform(0,0,game.canvas.width/1080,game.canvas.height/1920);
        this.bgObj.addChild(this.bg);
        this.bg.addEventListener("click",function(){
            console.log("点击了背景");
        });

        for (let i = 0; i < 3; i++) {
            this.wood_1 = new createjs.Bitmap(game.assets.images.wood_1);
            if(game.canvas.width > 768){
                this.wood_1.setTransform(game.canvas.width / 2,game.canvas.height / 2 - 180 + 190 * i,(768 - 40) / 490);
            }else{
                this.wood_1.setTransform(game.canvas.width / 2,game.canvas.height / 2 - 180 + 190 * i,(game.canvas.width - 40) / 490);
            }
            
            this.wood_1.regX = 245;
            this.bgObj.addChild(this.wood_1);
        }

    }

    Background.prototype.update = function(){

    }
})()