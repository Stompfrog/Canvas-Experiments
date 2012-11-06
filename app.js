/* CONFIG VARIABLES */

var waveYMax = 0.70;
var waveYMin = 0.3;
var waveVelMax = 0.6;
var waveVelMin = 0.4;
var waveCount = 5;
var waveFrameStartMin = 0;
var waveFrameStartMax = 360;

var sparkleYMax = 0.8;
var sparkleYMin = 0.2;
var sparkleCount = 30;
var sparkleVelMax = 0.2;
var sparkleVelMin = -0.2;
var sparkelMaxRadius = 0.9;
var sparkleMinRadius = 0.1;
var sparkleMinLife = 40;
var sparkleMaxLife = 120;

/* END OF CONFIG VARIABLES */

// Get a JS representation of the canvas element in the DOM
var canvas = document.getElementById('canvas');
var cx = canvas.getContext('2d');

// Calculate some useful variables
var height = canvas.height;
var width = canvas.width;
var waveRange = (waveYMax - waveYMin) * height;
var waveOffset = (height-waveRange) / 2;

// Create some random waves and push them into an array
for(var i=0, waves = []; i<waveCount; i++ ){
	waves.push(new Wave());
}

// Create some random sparkels and push them into an array
for(var i=0, sparkles = []; i<sparkleCount; i++ ){
	sparkles.push(new Sparkle());
}

// GO, GO, GO!
setInterval(function(){
	// Update the position of all waves and redraw
  for(var i=0; i<waves.length; i++ ){
  	waves[i].moveWave();
  	waves[i].renderWave();
  };
	// Update the position of all sparkles and redraw
  for(var i=0; i<sparkles.length; i++ ){
  	// If the sparkle is at frame 0 kill it and respawn a new sparkle.
  	if(sparkles[i].frames <= 0){
  	  sparkles.splice(i,1);
    	sparkles.push(new Sparkle());  	  
  	}
  	sparkles[i].moveSparkle();
  	sparkles[i].renderSparkle();
  }; 
  // Render a semi-trasnparent mask over the canvas to gradually fade previous paths
  cx.fillStyle = "rgba(0,0,0,0.1)";
  cx.fillRect(0, 0, width, height);
},1000/40);