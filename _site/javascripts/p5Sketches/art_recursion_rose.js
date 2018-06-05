var s = function (p) {

  var mdpt1, mdpt2, mdpt3, mdpt4;
  var rt = 0.4;
  var colourList;

  p.setup = function() {
    var sketchCanvas = p.createCanvas(500,500);
    sketchCanvas.parent("myCanvas5");
    p.background(0);
    p.noLoop();
    colourList = [p.color(255,51,51),p.color(255,102,102),p.color(255,153,153),p.color(255,204,204)];
  }

  p.draw = function() {
    p.shape(p.width/1.35,rt);
  }

  p.shape = function(squareLength,rt){
    p.fill(colourList[p.int(p.random(0,4))]);
    p.push();
    p.translate(p.width/2, p.height/2);
    p.rotate(rt);
    p.rect(-squareLength/2,-squareLength/2,squareLength,squareLength)
    p.pop();
    squareLength = squareLength*0.9;
    rt = rt + 0.3
    if (squareLength > 20){
      p.shape(squareLength,rt);
    }
  }

  p.mousePressed = function() {
    p.redraw();
  }
}

var myp5 = new p5(s, 'myCanvas5');