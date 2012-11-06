// Creates a wave described by 4 points
function Wave(){

  this.points = [
    {
      x : width * 0/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      frames : Math.floor(randomNumberBetween(waveFrameStartMin,waveFrameStartMax))
    },
    {
      x : width * 1/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      frames : Math.floor(randomNumberBetween(waveFrameStartMin,waveFrameStartMax))
    },
    {
      x : width * 2/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      frames : Math.floor(randomNumberBetween(waveFrameStartMin,waveFrameStartMax))
    },
    {
      x : width * 3/3,
      y : randomNumberBetween(waveYMin,waveYMax) * height,
      frames : Math.floor(randomNumberBetween(waveFrameStartMin,waveFrameStartMax))
    },
  ];
  
  this.velocity = randomNumberBetween(waveVelMin,waveVelMax);
  
  this.color = "rgba(255,255,255,0.8)";

  this.frames=0;
  
	// Update the y coordinate of each point of the wave
	this.moveWave = function(wave){
	/**
	 * Calculate an appealing transition from 1 to 0 based on a transformation  
	 * of the sine of current animation frame and then transform the result to be 
	 * within the bounds defined by the config variables.
	 *
	 * After each update increment the frames count in a cycle from 0 - 359 (360 degrees)
	 *
	 */
	 for (point in this.points){
			this.points[point].y = ( ( Math.sin(this.points[point].frames * Math.PI/180) + 1) / 2 ) * waveRange + waveOffset;
			this.points[point].frames = this.points[point].frames <= 359 ? this.points[point].frames += this.velocity : 0;
	  }  
	}
		
	//Render the wave to the canvas based on its current coordinates
	this.renderWave = function(wave){
	
		cx.shadowOffsetX = 0;
		cx.shadowOffsetY = 0;
		cx.shadowBlur    = 60;
		cx.shadowColor   = 'rgba(255, 255, 255, 0.8)';
		
		cx.beginPath();
		cx.moveTo(
		 this.points[0].x, this.points[0].y
		);
		cx.bezierCurveTo(
		 this.points[1].x, this.points[1].y, 
		 this.points[2].x, this.points[2].y, 
		 this.points[3].x, this.points[3].y
		);
		cx.strokeStyle = this.color;
		cx.stroke();
		
		cx.shadowColor   = 'rgba(255, 255, 255, 0)';

	}
	  
  return this; 
  
};