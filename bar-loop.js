// Barra
const svgNS = "http://www.w3.org/2000/svg";
const area = document.getElementById('svgGrafica'); 

//Colores random para las barras
function getRandomHexColor() {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return hex;
}

// Colors for the bars
var espaciado = 55

for (let i = 0; i < 5; i++) {
    
  //Barra
  var newRect = document.createElementNS(svgNS, "rect");
  // Set attributes for the current bar
  newRect.setAttribute('fill', getRandomHexColor()); 
  newRect.setAttribute('width', "90%"); 
  newRect.setAttribute('height', "20"); 
  newRect.setAttribute('x', "25"); 
  newRect.setAttribute('y', 40 + espaciado * i); 
  newRect.setAttribute('rx', "10"); // Esquinas curvas
  newRect.setAttribute('ry', "10"); 

  area.appendChild(newRect);

    //Texto 
    var newText = document.createElementNS(svgNS, "text");
    console.log("Creado: ", newText )

    newText.setAttribute('fill', "white")
    // newText.setAttribute('stroke', "black")
    newText.setAttribute('x', "30")
    newText.setAttribute('y', 40 + (espaciado * i)-7)
    newText.setAttribute('font-size', 'x-large')
    newText.setAttribute('font-weight', '400')
    // newText.setAttribute('textLength', "29")
    newText.textContent = "Ruta_101"; 

    area.appendChild(newText)


}
