// Creates a sparkle described by a points with a random X and Y velocity
function Sparkle(){

  this.x = randomNumberBetween(0,width);
  this.y = randomNumberBetween(sparkleYMin * height, sparkleYMax * height);
  this.xVel = randomNumberBetween(sparkleVelMin,sparkleVelMax);
  this.yVel = randomNumberBetween(sparkleVelMin,sparkleVelMax);
  this.radius = randomNumberBetween(sparkleMinRadius,sparkelMaxRadius)
  this.frames = randomNumberBetween(sparkleMinLife,sparkleMaxLife);
  
  // Update the position of the sparkle by adding the X and Y velocities to the current X and Y position
  this.moveSparkle = function(sparkle){
	  this.x += this.xVel;
	  this.y += this.yVel;
	  // Reduce the frame count by one (sparkles die and respawn at 0)
	  this.frames -= 1;
	}
  
	// Draw the sparkle on the canvas
	this.renderSparkle = function(sparkle){
	  cx.beginPath();
	  cx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	  cx.fillStyle = "rgba(255,255,255,1)";
	  cx.fill();
	  cx.shadowColor = "rgba(255,255,255,0.6)";
	  cx.shadowBlur = 10;
	  cx.strokeStyle = 'rgba(0,0,0,0)';
	  cx.stroke();
	  cx.shadowColor="rgba(0,0,0,0)";
	}
	  
  return this; 
  
};