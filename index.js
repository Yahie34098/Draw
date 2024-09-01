const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const sliderValue1 = document.getElementById("sliderValue1");
const sliderValue2 = document.getElementById("sliderValue2");
const createGrid = document.getElementById("createGrid");
const net = document.getElementById("net");
const container = document.getElementById("container");
const clearGrid = document.getElementById("clearGrid");
const escape = document.getElementById("escape");
const print1 = document.getElementById("print");
const colorPicker = document.getElementById("colorPicker");
const divnet = document.getElementsByClassName(".net .divnet");



let width = 0;
let height = 0;
let used = 0 ; 
let color;

slider1.oninput = function() { 
  width = +this.value; 
  sliderValue1.innerHTML = this.value;
}

slider2.oninput = function() { 
  height = +this.value; 
  sliderValue2.innerHTML = this.value;
}

createGrid.onclick = function () {
  if (used > 0 ) {
    net.innerHTML = "";
  }
    function calculateWidth(base, additional) {
      return base + additional * 15.25 ;
    }
    var totalWidth = calculateWidth(150 , height);
    container.style.height = totalWidth + 'px';
    for (let i = 0; i < width; i++) {
      let myheight = document.createElement("div");
      // myheight.style.display = "flex";
      for (let j = 0; j < height; j++) {
        let cube = document.createElement("div");
        cube.className = "divnet";
        myheight.appendChild(cube);
      }
      net.appendChild(myheight);
    }
    used++;
}

clearGrid.onclick = function () {
  net.innerHTML = "";
  container.style.height = "150px";
}

colorPicker.oninput = function () {
  color = colorPicker.value ; 
}





