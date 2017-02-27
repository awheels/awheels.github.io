window.onload = function() {
    var tileSize = 100;
    var numRows = 4;
    var numCols = 4;
    var tileSpacing = 10;
    var tilesArray = [];
    var messageSize = 300;
    var selectedArray = [];
    var num_matches = 0;
    var game = new Phaser.Game(500,500);
    var playSound;
    var playGame = function(game){}
    playGame.prototype = {
        soundArray: [],
        preload: function(){
            game.load.spritesheet("tiles", "spritesheet100x100.png", tileSize, tileSize);
            game.load.spritesheet("messages", "messageSpritesheet.png", messageSize, messageSize);
            game.load.audio("select", ["select.mp3", "select.ogg"]);
            game.load.audio("right", ["right.mp3", "right.ogg"]);
            game.load.audio("wrong", ["wrong.mp3", "wrong.ogg"]);
        },
        create: function(){
            this.placeTiles();
            if(playSound){
                this.soundArray[0] = game.add.audio("select", 1);
                this.soundArray[1] = game.add.audio("right", 1);
                this.soundArray[2] = game.add.audio("wrong", 1);
            }
        },
        placeTiles: function(){
            var leftSpace = (game.width - (numCols * tileSize) - ((numCols - 1) * tileSpacing))/2;
            var topSpace = (game.height - (numRows * tileSize) - ((numRows - 1) * tileSpacing))/2;
            for(var i = 0; i < numRows * numCols; i++){
                tilesArray.push(Math.floor(i / 2));
            }
            for(i = 0; i < numRows * numCols; i++){
                var from = game.rnd.between(0,tilesArray.length-1);
                var to = game.rnd.between(0, tilesArray.length-1);
                var temp = tilesArray[from];
                tilesArray[from] = tilesArray[to];
                tilesArray[to] = temp;
            }
            for(var i = 0; i < numCols; i++){
                for(var j = 0; j < numRows; j++){
                    var tile = game.add.button(leftSpace + i * (tileSize + tileSpacing), topSpace + j * (tileSize + tileSpacing), "tiles", this.showTile, this);
                    tile.frame = 8;
                    tile.value = tilesArray[j * numCols + i];
                }
            }
        },
        showTile: function(target){
            if(selectedArray.length < 2 && selectedArray.indexOf(target) == -1){
                if(playSound){
                    this.soundArray[0].play();
                }
                target.frame = target.value;
                selectedArray.push(target);
                if(selectedArray.length == 2){
                    game.time.events.add(Phaser.Timer.SECOND, this.checkTiles, this);
                }
            }
        },
        removeMessage: function(target){
            target.destroy();
            if(num_matches == 8){
                game.state.start("GameOver");
            }
        },        
        checkTiles: function(){
            if(selectedArray[0].value == selectedArray[1].value){
                if(playSound){
                    this.soundArray[1].play();
                }
                num_matches = num_matches + 1;
                var message = game.add.button(100,100,"messages", this.removeMessage, this);
                message.frame = selectedArray[0].value;
                selectedArray[0].destroy();
                selectedArray[1].destroy();
            }else{
                if(playSound){
                    this.soundArray[2].play();
                }
                selectedArray[0].frame = 8;
                selectedArray[1].frame = 8;
            }
            selectedArray.length = 0;
        }
    }
    var titleScreen = function(game){}
    titleScreen.prototype = {
        preload: function(){
            game.load.spritesheet("soundicons", "soundicons.png", 80, 80);
            game.load.image("maintitle", "MainTitle.png");
        },
        create: function(){
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.stage.backgroundColor = "#E3E3E3";
            game.add.sprite(50,50,"maintitle");
            var soundButton = game.add.button(game.width / 2 - 100, game.height / 2 + 100, "soundicons", this.startGame, this);
            soundButton.anchor.set(0.5);
            soundButton = game.add.button(game.width / 2 + 100, game.height / 2 + 100, "soundicons", this.startGame, this);
                soundButton.frame = 1;
                soundButton.anchor.set(0.5);
        },
        startGame: function(target){
            if(target.frame == 0){
                playSound = true;
            }
            else{
                playSound = false;
            }
            game.state.start("PlayGame");
        }
    }
    var gameOver = function(game){}
    gameOver.prototype = {
        create: function(){
            var style = {
                font: "32px Monospace",
                fill: "#000000",
                align: "center"
            }
            var text = game.add.text(game.width / 2, game.height / 2, "Game Over\n\nThanks for playing.\nI hope you learned something!\n\nClick to restart", style);
            text.anchor.set(0.5);
            num_matches = 0;
            game.input.onDown.add(this.restartGame, this);
        },
        restartGame: function(){
            tilesArray.length = 0;
            selectedArray.length = 0;
            game.state.start("TitleScreen");
        }
    }
    game.state.add("TitleScreen", titleScreen);
    game.state.add("PlayGame", playGame);
    game.state.add("GameOver", gameOver)
    game.state.start("TitleScreen");
}