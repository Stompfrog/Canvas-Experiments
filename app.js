// Get a JS representation of the canvas element in the DOM
var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

/* CONFIG VARIABLES */
var waveYMax = 0.75;
var waveYMin = 0.25;
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

// Create 5 random waves and push them into an array
var waves = [];

for(var i=0; i<waveCount; i++ ){
	waves.push(new Wave());
}

// GO, GO, GO !
setInterval(function(){
  for(var i=0; i<waves.length; i++ ){
  	waves[i].moveWave();
  	waves[i].renderWave();
  }; 
  cx.fillStyle = "rgba(255,255,255,0.1)";
  cx.fillRect(0, 0, width, height);
},1000/40);