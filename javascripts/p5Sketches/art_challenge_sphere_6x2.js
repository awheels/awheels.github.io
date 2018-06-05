var s = function (p) {
  var x, y, z;
  var colours;
  var t=0;

  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL)
    p.background(50);
    
    miniSpheres = Array();
    centralSpheres = Array();
    
    p.createEgg(miniSpheres, centralSpheres, p.PI/10, p.PI/6, 80, 40);

    miniSpheres2 = Array();
    centralSpheres2 = Array();
    
    p.createEgg(miniSpheres2, centralSpheres2, p.PI/12, p.PI/4, 70, 30);

    miniSpheres3 = Array();
    centralSpheres3 = Array();
    
    p.createEgg(miniSpheres3, centralSpheres3, p.PI/10, p.PI/5, 60, 40);

    miniSpheres4 = Array();
    centralSpheres4 = Array();
    
    p.createEgg(miniSpheres4, centralSpheres4, p.PI/14, p.PI/4, 70, 30);

  }

  p.createEgg = function(array1, array2, density1, density2, radius1, radius2){  
    p.generateSpheres(array1, density1, radius1, 1, 8);
    p.generateSpheres(array2, density2, radius2, 0, 12);
  }

  p.draw = function() {
    p.background(50);
   
    p.animate(110,110,miniSpheres,centralSpheres,false,true,false);  
    p.animate(-110,110,miniSpheres2,centralSpheres2,false,false,true);
    p.animate(110,-110,miniSpheres3,centralSpheres3,false,false,true);  
    p.animate(-110,-110,miniSpheres4,centralSpheres4,true,false,false);
  }

  p.animate = function(x, y, array1, array2, x_dir, y_dir, z_dir){
    
    p.push();
   p. translate(x, y);
    if (x_dir){
      p.rotateX(t);
    }
    p.rotateX(p.HALF_PI);
    if (y_dir){
      p.rotateY(t);
    }
    if (z_dir){
      p.rotateZ(t);
    }
    t+=0.005;
    
    var index;
    for (index = 0; index < array1.length; ++index) {
      array1[index].display();
    }

    var index;
    for (index = 0; index < array2.length; ++index) {
      array2[index].display();
    }  
    p.pop();
  }

  p.generateSpheres = function(arrayName, density, radius, colour, rSphere){
    originalRadius = radius
    colours = [p.color(252,252,28), p.color(255)];

    count = 0;
    for (u=0; u<p.TWO_PI; u+=density) {    
      for (v=0.1; v<p.PI; v+=density) {
        rand_gen = p.random(0,10);
        if (rand_gen > 6){
          radius = radius+p.random(-30,30);
          x=radius * p.cos(u) * p.sin(v);
          y=radius * p.sin(u) * p.sin(v);
          z=radius * p.cos(v);
          small = new p.MiniSphere(u,v,x,y,z,colours[colour], rSphere, p.random(0,10));
          arrayName.push(small);
          radius = originalRadius;
        }
      }
      count +=1;
    } 
  }

  p.MiniSphere = function(u,v,x,y,z,colour,rSphere, randNum) {
    this.u = u,
    this.v = v;
    this.x = x,
    this.y = y;
    this.z = z;
    this.colour = colour;
    this.rSphere = rSphere;
    this.randNum = randNum;
    
    this.display = function() {
      p.strokeWeight(1.5);
      p.stroke(255);

      p.push();
      p.translate(this.x*1.1,this.y*1.1,this.z*1.1);
      p.stroke(0);
      p.fill(255);
        
      var r_2=rSphere;
      if (this.v == 0){
        r_2 = 1;
      } else {
        r_2 = r_2 * p.sin(this.v);
      }

      p.fill(this.colour);
      p.sphere(r_2);
      p.pop();
    }
  }
}

var myp5 = new p5(s, 'myCanvas3');