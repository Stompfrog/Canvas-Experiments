// Creates a wave described by 4 points
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

  this.color = "rgba(0,0,0,0.6)";

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
			this.points[point].frames = this.points[point].frames <= 359 ? this.points[point].frames += 1 : 0;
	  }  
	}
		
	//Render the wave to the canvas based on its current coordinates
	this.renderWave = function(wave){
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
	}
	  
  return this; 
  
};