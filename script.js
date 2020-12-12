var css11 = document.querySelector("h3");
var color22 = document.querySelector(".color1");
var color33 = document.querySelector(".color2");
var body44 = document.body;
function setGradient() {
    body44.style.background = 
     "linear-gradient(to right, "
      + color22.value 
      + ","  
      +color33.value 
      + ")";
      css11.textContent = body44.style.background + ";";
}
color22.addEventListener("input", setGradient);

color33.addEventListener("input", setGradient); 