class Pencil {
	constructor(canvas, width, height, randomFactor) {
		this.randomFactor = randomFactor;
		this.ctx = canvas.getContext("2d");
		
		// TODO Move this
	    document.body.style.margin = 0;
	    this.ctx.canvas.width = document.body.clientWidth;
	    this.ctx.canvas.height = document.body.clientHeight;
	    document.body.style.overflow = "hidden";
	    
	    
	    
	    this.angle = 0;
		this.moveTo(0, 0);
	}

	forward(l) {
	    var x = this.x + Math.cos(this.angle * Math.PI / 180) * l + this.randomFactor * l * (Math.random() * 2 - 1);
	    var y = this.y + Math.sin(this.angle * Math.PI / 180) * l + this.randomFactor * l * (Math.random() * 2 - 1);
		this.lineTo(x, y);
		return this;
	}
	
	turn(angle) {
	    this.angle += angle;
		return this;
	}
	
	moveTo(x, y) {
	    this.x = x;
	    this.y = y;
	    this.ctx.beginPath();
	    this.ctx.moveTo(this.cX, this.cY);
		return this;
	}
	
	lineTo(x, y, style) {
	    this.x = x;
	    this.y = y;
	    this.ctx.lineTo(this.cX, this.cY);
	    this.ctx.strokeStyle = style == null ? "black" : style;
	    this.ctx.stroke();  
		return this;
	}
	
	fill(style) {
	    this.ctx.fillStyle = style;
	    this.ctx.fill();  
		return this;
	}
	
	get cX() {
	    return this.x;
	}
	
	get cY() {
	    return this.ctx.canvas.height - this.y;
	}
	
	turnTo(angle) {
	    this.angle = angle;
		return this;
	}
	
	clear(color) {
		if (color == null) color = "white";
		this.ctx.beginPath();
		var W = this.ctx.canvas.width;
		var H = this.ctx.canvas.height;
	    this.moveTo(0, 0);
	    this.lineTo(W, 0, color);
	    this.lineTo(W, H, color);
	    this.lineTo(0, H, color);
	    this.lineTo(0, 0, color);
	    this.fill(color);
	    this.ctx.beginPath();
		return this;
	}
	
	drawPoint(color, r) {
		this.ctx.beginPath();
		this.ctx.arc(this.cX, this.cY, r == null ? 1 : r, 0, 2*Math.PI);
		//var colors = ["violet", "green", "gold", "red"];
		//this.fill(colors[Math.floor(Math.random() * colors.length)]);
		//this.fill("rgba(0,0,0,1)");
		this.fill(color);
		return this;
	}
}
