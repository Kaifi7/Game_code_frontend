/*var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
];*/
var numberofSquares = 6;
var colors = generateRandomColors(numberofSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");	

for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent === "Easy" ?numberofSquares=3: numberofSquares=6;
	reset();
	//figure out how many colors to show

	//pick new colors

	//pick a new picked color

	//update page to reflect changes 
	});
}
function reset(){
	colors = generateRandomColors(numberofSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of square
	for(var i=0; i<squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberofSquares = 3;
	colors = generateRandomColors(numberofSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberofSquares=6;
	colors = generateRandomColors(numberofSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
});*/

var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	/*//generate all new colors
	colors = generateRandomColors(numberofSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of square
	for(var i=0; i<squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";*/
	reset();
});

for(var i=0; i<squares.length ; i++){
	//add initail colors to the squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});	
}

function changeColors(color){
	//loop through all squares 
	for(var i=0; i<colors.length ; i++){
		squares[i].style.backgroundColor = color;
	}
	//
}
function pickColor(){
	var ran = Math.floor(Math.random()*colors.length);
	return colors[ran];
}
 function generateRandomColors(num){
 	//make an array
 	var arr = [];
 	//add num random colors to array
 	for(var i=0; i<num; i++){
 		//get random color and push into array
 		arr.push(randomColor());
 	}
 	//return arr;
 	return arr;	
 }

 function randomColor(){
 	 //pick  a "red" from 0 to -255
 	 var r = Math.floor(Math.random()*256);
 	 //pick a "green" from 0 - 255
 	 var g = Math.floor(Math.random()*256);
 	 //pick a "blue" from 0 - 255
 	 var b = Math.floor(Math.random()*256);
 	 return "rgb(" + r + ", " + g + ", " + b + ")";
 }