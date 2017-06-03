function setup() {
  var sketchCanvas = createCanvas(500,500);
  sketchCanvas.parent("myCanvas");
  background(0);
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 40, 40);

  if (keyIsPressed == true){
    clear();
  }

}