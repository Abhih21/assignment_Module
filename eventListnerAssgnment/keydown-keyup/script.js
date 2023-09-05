let container = document.getElementById("container");
let display = document.getElementById("display");


document.addEventListener("keydown", function (eln) {
  display.style.color = "red";
  display.innerText = eln.key + " is keyDown";
});


document.addEventListener("keyup", function (eln) {
  display.style.color = "green";
  display.innerText = eln.key + " is keyUp";
});


