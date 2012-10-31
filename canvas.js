// Get a JS representation of the canvas element in the DOM
var canvas = document.getElementById('canvas');
var height = canvas.height;
var width = canvas.width;
var cx = canvas.getContext('2d');

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

/* CONFIG VARIABLES */
var waveYMax = 0.8;
var waveYMin = 0.2;
var waveVelMax = 3;
var waveVelMin = -3;
var waveCount = 5;

// Creates waves described by 4 points, each of which has a Y velocity
function Wave(){
  this.points = [
    {
      x : width * 0/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax)
    },
    {
      x : width * 1/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax)
    },
    {
      x : width * 2/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax)
    },
    {
      x : width * 3/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      velocity : randomNumberBetween(waveVelMin,waveVelMax)
    },
  ];
  //this.color = randomColor();  
  this.color = "#000";
  return this; 
};

// Create 5 random waves and push them into an array
var waves = [];

for(var i=0; i<waveCount; i++ ){
	waves.push(new Wave());
}

// Update the y coordinate of the point based on its velocity
function moveWave(wave){
  for (point in wave.points){
    // If its too high or too low on the canvas bounce it back
    if(wave.points[point].y/height > waveYMax || wave.points[point].y/height < waveYMin){
      wave.points[point].velocity = wave.points[point].velocity * -1;
    }
    wave.points[point].y += wave.points[point].velocity;
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
},1000/60);


