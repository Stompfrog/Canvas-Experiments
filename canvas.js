// Get a JS representation of the canvas element in the DOM
var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

/* CONFIG VARIABLES */
var waveYMax = 0.8;
var waveYMin = 0.2;
var waveVelMax = 3;
var waveVelMin = -3;
var waveCount = 5;
var frameStartMin = 0;
var frameStartMax = 360;

/* CALCULATED VARIABLES */
var height = canvas.height;
var width = canvas.width;
var waveRange = (waveYMax - waveYMin) * height;
var waveOffset = (height-waveRange) / 2;

// A function to generate a random number between an upper and lower limit
function randomNumberBetween(x,y){
	return ( Math.random() * (y-x) ) + x;
}

// Return the string of a random rgb color
function randomColor(){
 var r = Math.floor(randomNumberBetween(0,255));
 var g = Math.floor(randomNumberBetween(0,255));
 var b = Math.floor(randomNumberBetween(0,255));
 var color = "rgb("+r+","+g+","+b+")";
 return color;
}

// Creates waves described by 4 points
function Wave(){
  this.points = [
    {
      x : width * 0/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax),
      frames : Math.floor(randomNumberBetween(frameStartMin,frameStartMax))
    },
    {
      x : width * 1/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax),
      frames : Math.floor(randomNumberBetween(frameStartMin,frameStartMax))
    },
    {
      x : width * 2/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax),
      frames : Math.floor(randomNumberBetween(frameStartMin,frameStartMax))
    },
    {
      x : width * 3/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax),
      frames : Math.floor(randomNumberBetween(frameStartMin,frameStartMax))
    },
  ];
  //this.color = randomColor();  
  this.color = "rgba(0,0,0,0.8)";
  this.frames=0;
  return this; 
};

// Create 5 random waves and push them into an array
var waves = [];

for(var i=0; i<waveCount; i++ ){
	waves.push(new Wave());
}

// Update the y coordinate of each point of the wave
function moveWave(wave){
  for (point in wave.points){
  	/**
  	 * Calculate an appealing transition from 1 to 0 based on a transformation  
  	 * of the sine of current animation frame and then transform the result to be 
  	 * within the bounds defined by the config variables.
  	 *
  	 * After each update increment the frames count in a cycle from 0 - 359 (360 degrees)
  	 *
  	 */
		wave.points[point].y = ( ( Math.sin(wave.points[point].frames * Math.PI/180) + 1) / 2 ) * waveRange + waveOffset;
		wave.points[point].frames = wave.points[point].frames <= 359 ? wave.points[point].frames += 1 : 0;
  }  
}

//Render the wave to the canvas based on its current coordinates
function renderWave(wave){
 cx.beginPath();
 cx.moveTo(
   wave.points[0].x, wave.points[0].y
 );
 cx.bezierCurveTo(
   wave.points[1].x, wave.points[1].y, 
   wave.points[2].x, wave.points[2].y, 
   wave.points[3].x, wave.points[3].y
 );
 cx.strokeStyle = wave.color;
 cx.stroke();
}

// GO, GO, GO !
setInterval(function(){
  for(var i=0; i<waves.length; i++ ){
  	moveWave(waves[i]);
  	renderWave(waves[i]);
  }; 
  cx.fillStyle = "rgba(255,255,255,0.1)";
  cx.fillRect(0, 0, width, height);
},1000/40);