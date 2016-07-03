console.log("js page linked");
var s = 266;
var draw_postion_x = 0;
var center;
var img;

function preload() {
	img = loadImage("assets/lemur.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	//access pixels within image
	img.loadPixels();
	background(0);
	stroke(255, 0, 0);
	strokeWeight(2);
	//slit postitioned middle of screen
	center = width/2;
}

function draw(){
	background(0);
	var mx = constrain(mouseX, center-s/2, center+s/2);
	//map mx from center-s/2 to +s/2 to s to 0
	var x = map(mx, center-s/2, center+s/2, s, 0);
	//make integer
	x = floor(x);


	//get color at y position from 0 to height, set to c
	for (var y=0; y<height; y++){
		var c = img.get(x, y);
		//position on top moving across the screen setting to color c
		//creates new column of pixels
		set(draw_postion_x, y, c);
	}
	updatePixels();

	//thumbnail
	image(img, mx, height-s/2); //position at bottom of screen
	line(width/2, height-s, width/2, height);

	//line connecting sketches
	line(draw_postion_x, s, width/2, height-s);

	//shift draw postion after each column drawn
	draw_postion_x++;

	if (draw_postion_x >= width){
		draw_postion_x = 0;
	}
	
}