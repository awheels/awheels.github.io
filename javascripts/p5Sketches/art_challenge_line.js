var colours;

function setup() {
  var sketchCanvas = createCanvas(800,600);
  sketchCanvas.parent("myCanvas");
  background(255);
  noLoop();
  noStroke()
}

function draw() {
  for (y=0; y <= width/100; y+=1){
    ynoise = random(10);
    colorSet(y)
    beginShape();
    if (y % 2 == 0){
      vertex(width,100*y);
      vertex(0,100*y);
    }else{
      vertex(width,100*y+100);
      vertex(0,100*y+100);
    }
    for (x=0; x <= width/4; x++){
      extra_y = 10 + noise(ynoise) * 80
      vertex(4*x,100*y+extra_y);
      ynoise += 0.3;
    }
    if (y % 2 == 0){
      vertex(width,100*y);
      vertex(0,100*y);
    }else{
      vertex(width,100*y+100)
    }
    endShape() 
  }
}

function colorSet(y){
  colours = [color(38, 50, 56), color(55, 71, 79), color(69, 90, 100), color(84, 110, 122)]

  if (y == 0){
    fill(colours[0])
  } else if (y == 1 || y == 2){
    fill(colours[1])
  } else if (y == 3 || y == 4){
    fill(colours[2])
  } else if (y == 5){
    fill(colours[3])
  }
}

