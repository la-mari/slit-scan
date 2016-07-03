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
	//slit postitioned middle of screen
	center = width/2;
}

function draw(){
	background(0);
	var mx = constrain(mouseX, center-s/2, center+s/2);

	var x = map(mx, center-s/2, center+s/2, s, 0);
	//thumbnail
	image(img, mx, height-s/2); //position at bottom of screen
	line(width/2, height-s, width/2, height);
	
}