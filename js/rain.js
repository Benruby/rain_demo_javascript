var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

for (var i = 0 ; i < 2000 ; i ++) {
	var randomX = Math.floor(Math.random() * (pageWidth));
	var randomY = Math.floor(Math.random() * (pageHeight) - 40);
	var dropSpeed = Math.floor(Math.random() * (30 - 10)) + 10;
	var dropWidth = Math.floor(Math.random() * (dropSpeed/10 - 1)) + 1;
	var dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3;
	var d = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight);

	d.show();
	d.fall();

}




