var s = function (p) {

    var dimensions = 5;

    p.setup = function() {
      p.createCanvas(800,600);
      p.background(255);
      p.noLoop();
    }

    p.draw = function() {
      p.stroke(0);
      p.strokeWeight(5);
      p.rect(5, 5, p.width-10, p.height-10);

      //var spacing = width/dimensions;
      for (x=0; x<4; x+=1){
          for (y=0; y<3; y++){
              p.chickenDrawer(200*x+100, 200*y+100-10, p.random(50,70));
          }
      }
    }

    p.chickenDrawer = function(x,y,cWidth){
        p.strokeWeight(2);
        p.stroke(0);
        legLength = p.width/(2*dimensions);
        p.line(x-10, y, x-15, y+legLength);
        p.line(x+10, y, x+15, y+legLength);
        p.line(x+15, y+legLength, x+30, y+legLength+10);
        p.line(x-15, y+legLength, x-30, y+legLength+10);
        p.line(x+15, y+legLength, x+35, y+legLength+5);
        p.line(x-15, y+legLength, x-35, y+legLength+5);
        p.line(x+15, y+legLength, x+40, y+legLength);
        p.line(x-15, y+legLength, x-40, y+legLength);
        p.strokeWeight(1);
        r = p.random(100,200);
        g = p.random(100,150);
        b = p.random(50, 100);
        p.fill(r,g,b);
        p.noStroke();
        p.ellipse(x, y, 60, 60);
        p.stroke(r, g, b);
        for (angle = 0; angle <= 90; angle++){
            length = p.random(cWidth-10,cWidth+10);
            y_c = length*p.sin(angle * p.PI/180);
            x_c = length*p.cos(angle * p.PI/180);
            p.line(x, y, x+x_c, y-y_c);
        }
        for (angle = 0; angle <= 90; angle++){
            length = p.random(cWidth-10,cWidth+10);
            y_c = length*p.sin(angle * p.PI/180);
            x_c = length*p.cos(angle * p.PI/180);
            p.line(x, y, x+x_c, y+y_c);
        }
        for (angle = 0; angle <= 90; angle++){
            length = p.random(cWidth-10,cWidth+10);
            y_c = length*p.sin(angle * p.PI/180);
            x_c = length*p.cos(angle * p.PI/180);
            p.line(x, y, x-x_c, y-y_c);
        }
        for (angle = 0; angle <= 90; angle++){
            length = p.random(cWidth-10,cWidth+10);
            y_c = length*p.sin(angle * p.PI/180);
            x_c = length*p.cos(angle * p.PI/180);
            p.line(x, y, x-x_c, y+y_c);
        }
        p.fill(240);
        p.stroke(0);
        p.ellipse(x-15, y-20, 15, 15);
        p.ellipse(x+15, y-20, 15, 15);
        p.fill(0);
        r_x = p.random(12,18);
        r_y = p.random(18,22);
        p.ellipse(x-r_x, y-r_y, 5, 5);
        p.ellipse(x-r_x+30, y-r_y, 5, 5);
        p.noFill();
        p.noStroke();
        p.fill(252, 194,99);
        mouth = p.int(p.random(0,4));
        if (mouth == 0){
            p.triangle(x, y-5, x, y+10, x+30, y+2.5);
        } else if (mouth == 1){
            p.triangle(x, y-5, x, y+10, x-30, y+2.5);
        } else if (mouth == 2){
            p.triangle(x, y-5, x, y+7, x+30, y-2.5); 
            p.triangle(x, y, x, y+7, x+30, y+10);
        }else{
            p.triangle(x, y-5, x, y+7, x-30, y-2.5); 
            p.triangle(x, y, x, y+7, x-30, y+10); 
        }
        p.noFill();
    }

    //function mouseClicked() {
    //  saveCanvas('my_image', 'jpg');
    //}

    p.mousePressed = function() {
      p.background(255);
      p.redraw();
    }
}

var myp5 = new p5(s, 'myCanvas2');