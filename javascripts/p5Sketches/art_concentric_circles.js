var s = function (p) {
	p.setup = function() {
		var sketchCanvas = p.createCanvas(500,500);
		sketchCanvas.parent("myCanvas4");
	}

	p.draw = function() {
		p.noStroke();
		var val = 2*p.sqrt((p.width/2)**2+(p.height/2)**2)/30;
		var val2 = p.width/val
		for(x=0; x<2*p.sqrt((p.width/2)**2+(p.height/2)**2); x += 30){
			p.fill(p.mouseX/2,x/3+val2,x/3+val2)
			p.ellipse(p.width/2, p.height/2, 2*p.sqrt((p.width/2)**2+(p.height/2)**2)-x, 2*p.sqrt((p.width/2)**2+(p.height/2)**2)-x);
		}
	}
}

var myp5 = new p5(s, 'myCanvas4');