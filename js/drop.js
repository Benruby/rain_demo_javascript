function Drop(xPosition, yPosition, dropSpeed, dropWidth, dropHeight) {
	this.xPosition = xPosition;
	this.yPosition = yPosition;
	this.dropSpeed = dropSpeed;
	this.dropWidth = dropWidth;
	this.dropHeight = dropHeight;
	this.element;
}

Drop.prototype.fall = function() {

	var self = this;

	function makeItRain () {
		self.yPosition = self.yPosition + self.dropSpeed;
		self.element.style.top = self.yPosition +"px";

		if(self.yPosition < window.innerHeight) {
			requestAnimationFrame(makeItRain);
		} else {
			self.yPosition = -10;
			requestAnimationFrame(makeItRain);
		}

	}

	requestAnimationFrame(makeItRain);
}

Drop.prototype.show = function() {
	this.element = document.createElement("div");
	this.element.className += "rainDrop";
	this.element.style.top = this.yPosition + "px";
	this.element.style.left = this.xPosition + "px";
	this.element.style.width = this.dropWidth + "px";
	this.element.style.height = this.dropHeight + "px";
	document.body.appendChild(this.element);
}
