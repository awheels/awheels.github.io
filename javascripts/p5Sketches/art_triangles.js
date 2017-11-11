var s = function (p) {

  var colors;

  p.setup = function(){
    var sketchCanvas = p.createCanvas(500,500);
    sketchCanvas.parent("myCanvas6");
    p.noLoop();
    p.strokeWeight(0.5);
    colors = [p.color(239, 118, 122,100), p.color(69, 105, 144,100), p.color(73, 190, 170,100), p.color(73, 220, 177,100), p.color(238, 184, 104,100)]
  }

  p.draw = function(){
    p.trianglePattern(2,2);
    p.trianglePattern(5,1);
    p.trianglePattern(10,2);
  }

  p.coordinateMaker = function(squareSize){
    return [p.random(x*squareSize/2,x*squareSize/2+squareSize),p.random(y*squareSize,y*squareSize+squareSize)];
  }

  p.trianglePattern = function(dimension, density){
    squareSize = p.width/dimension;
    for(x=0; x<2*dimension-1; x+=1){
      for(y=0; y<2*dimension; y+=1){
        for(q=0; q<density; q++){
          p.fill(colors[p.int(p.random(0,5))]);
          var coordinate1 = p.coordinateMaker(squareSize);
          var coordinate2 = p.coordinateMaker(squareSize);
          var coordinate3 = p.coordinateMaker(squareSize);
          p.triangle(coordinate1[0],coordinate1[1],coordinate2[0],coordinate2[1],coordinate3[0],coordinate3[1]); 
        }
      }
    }
  }

  p.mousePressed = function() {
    p.redraw();
  }
}

var myp5 = new p5(s, 'myCanvas6');