const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const sliderValue1 = document.getElementById("sliderValue1");
const sliderValue2 = document.getElementById("sliderValue2");
const createGrid = document.getElementById("createGrid");
let net = document.getElementById("net");
let container = document.getElementById("container");



let width = 0;
let height = 0;
let used = 0 ; 

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



console.log(width);
console.log(height);
