
// Get a JS representation of the canvas element in the DOM
var canvas = document.getElementById('canvas');
var height = canvas.height;
var width = canvas.width;
var cx = canvas.getContext('2d');

// A function to generate a random number between an upper and lower limit
function randomNumberBetween(x,y){
	return ( Math.random() * (y-x) ) + x;
}

// Create a random bezier curve which runs from left to right across the central portion of the canvas
function createWave(){

	var waveMax = 0.8;
	var waveMin = 0.2;

	cx.beginPath();
	cx.moveTo(
		0, randomNumberBetween(waveMin,waveMax) * height
	);
	cx.bezierCurveTo(
		width * 1/3, randomNumberBetween(waveMin,waveMax) * height, 
		width * 2/3, randomNumberBetween(waveMin,waveMax) * height, 
		width * 3/3, randomNumberBetween(waveMin,waveMax) * height
	);
	cx.stroke();
}

// Create 5 random waves
var waveCount = 5;

for(var i=0; i<waveCount; i++ ){
	createWave();
}