// Returns a random number between an upper (y) and lower (x) limit
function randomNumberBetween(x,y){
	return ( Math.random() * (y-x) ) + x;
}

// Returns a string representation of a random rgb color
function randomColor(){
 var r = Math.floor(randomNumberBetween(0,255));
 var g = Math.floor(randomNumberBetween(0,255));
 var b = Math.floor(randomNumberBetween(0,255));
 var color = "rgb("+r+","+g+","+b+")";
 return color;
}