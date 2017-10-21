var s = function (p) {
  var colours;
  var prevNumber = 1;

  p.setup = function() {
    var sketchCanvas = p.createCanvas(800,600);
    sketchCanvas.parent("myCanvas");
    p.background(255);
    p.noLoop();
    p.noStroke()
    colours = p.colourSelect(prevNumber);
  }

  p.draw = function() {
    p.background(255);
    for (y=0; y <= p.width/100; y+=1){
        ynoise = p.random(10);
        p.colourSet(y, colours)
        p.beginShape();
        if (y % 2 == 0){
          p.vertex(p.width,100*y);
          p.vertex(0,100*y);
        }else{
          p.vertex(p.width,100*y+100);
          p.vertex(0,100*y+100);
        }
        for (x=0; x <= p.width/4; x++){
          extra_y = 10 + p.noise(ynoise) * 80
          p.vertex(4*x,100*y+extra_y);
          ynoise += 0.3;
        }
        if (y % 2 == 0){
          p.vertex(p.width,100*y);
          p.vertex(0,100*y);
        }else{
          p.vertex(p.width,100*y+100)
        }
        p.endShape() 
      }
  }

  p.colourSelect = function(prevNumber){
    colours1 = [p.color(38, 50, 56), p.color(55, 71, 79), p.color(69, 90, 100), p.color(84, 110, 122)];
    colours2 = [p.color(23,64,34), p.color(46,127,67), p.color(70,191,101), p.color(93,255,135)];
    colours3 = [p.color(127,114,14), p.color(191,172,21), p.color(229,206,25), p.color(225,229,28)];
    colours4 = [p.color(64,22,22), p.color(127,44,44), p.color(191,65,66), p.color(255,87,88)];
    coloursList = [colours1, colours2, colours3, colours4];
    
    colourNumber = prevNumber;
    
    while (colourNumber == prevNumber) {
      colourNumber = p.int(p.random(0,4));
    }
    
    colours = coloursList[colourNumber];
    
    prevNumber = colourNumber;
    
    return colours;
  }
  
  p.colourSet = function(y, colours){

    if (y == 0){
      p.fill(colours[0]);
    } else if (y == 1 || y == 2){
      p.fill(colours[1]);
    } else if (y == 3 || y == 4){
      p.fill(colours[2]);
    } else if (y == 5){
      p.fill(colours[3]);
    }
  }

  //function mouseClicked() {
  //  saveCanvas('my_image', 'jpg');
  //}

  p.mousePressed = function() {
    colours = p.colourSelect();
    p.redraw();
  }
}

var myp5 = new p5(s, 'myCanvas');