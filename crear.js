const svgNS = "http://www.w3.org/2000/svg";

const area = document.getElementById('svgOne')
console.log("Ésto es svg: ", area)

//Texto Barra
var newText = document.createElementNS(svgNS, "text");
console.log("Creado: ", newText )

newText.setAttribute('fill', "white")
newText.setAttribute('x', "15")
newText.setAttribute('y', "20")
newText.setAttribute('dx', "10")
newText.setAttribute('dy', "10")
newText.setAttribute('rotate', "0")
newText.setAttribute('textLength', "10")
// newText.setAttribute('lengthAdjust', "0.5")

area.appendChild(newText)

//Barra
var newRect = document.createElementNS(svgNS, "rect");
console.log("Creado: ", newRect )

newRect.setAttribute('fill', "black")
newRect.setAttribute('width', "100") //Esto será el porcentaje de avance.
newRect.setAttribute('height', "20")
newRect.setAttribute('x', "25")
newRect.setAttribute('y', "30")
newRect.setAttribute('rx', "10")
newRect.setAttribute('ry', "10")

area.appendChild(newRect)

