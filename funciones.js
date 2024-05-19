export function transformarString(cadena){
    cadena = cadena.toLowerCase();
    cadena = cadena.slice(0, -1);
    cadena = cadena.charAt(0).toUpperCase() + cadena.slice(1);

    return cadena;
  };

  export async function construyeBarra(i, j){

  console.log("Estoy haciendo la barra número: " + j + " de la tabla " + i)

      // Barra
  const svgNS = "http://www.w3.org/2000/svg";
  const area = document.getElementById('svgGrafica'); 

  //Colores random para las barras
  function getRandomHexColor() {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return hex;
  }


  var espaciado = 30

    //Barra
    var newRect = document.createElementNS(svgNS, "rect");
    // Set attributes for the current bar
    newRect.setAttribute('fill', getRandomHexColor()); 
    newRect.setAttribute('width', "90%"); 
    newRect.setAttribute('height', "25"); //grosor de la barra.
    newRect.setAttribute('x', "25"); 
    newRect.setAttribute('y', 20 + espaciado * j); 
    newRect.setAttribute('rx', "0"); // Esquinas curvas
    newRect.setAttribute('ry', "10"); 

    area.appendChild(newRect);

      //Texto 
      var newText = document.createElementNS(svgNS, "text");
      
      newText.setAttribute('fill', "black")
      // newText.setAttribute('stroke', "black")
      newText.setAttribute('x', "30")
      newText.setAttribute('y', 20 + (espaciado * j) +18)
      newText.setAttribute('font-size', '19px')
      newText.setAttribute('font-weight', '400')
      // newText.setAttribute('textLength', "29")
      newText.textContent = "Ruta_101                  Total: 33/75  Avance 44%"; 

      area.appendChild(newText)


  }
