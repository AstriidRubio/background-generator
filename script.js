var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);
// console.log(color1);
// console.log(color2);

css.textContent = body.style.background + "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

function setGradient(argument) {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	//  linear-gradient(to right, red , white );
	 css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  body.style.background = "linear-gradient(to right, " 
  + getRandomColor() + "," + getRandomColor()+ ")";
	 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// console.log(color1.value);
// console.log(color2.value);