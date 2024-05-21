//Prepara ancho porcentaje
function preparaAnchoPorcentaje(cantidad){
  //Se convierte a float y se hace ésta fórmula para cuadrar con la proporción.

  //Convierto a FLoat: 
  var numeroFloat = parseFloat(cantidad)

  if (numeroFloat == 0) {numeroFloat = 1} 

  var ancho_porcentaje = (numeroFloat * 92)/100
  ancho_porcentaje = ancho_porcentaje + "%"

  return ancho_porcentaje
}

//Prepara color barra: 
function preparaColorBarra(cantidad){

  var cantidad = parseFloat(cantidad)

  var verde = '#49B675'
  var naranja = "#FFA500"
  var amarillo = 'yellow'
  var rojo = '#FF4000'

  if (cantidad >= 0 && cantidad <= 25) {
    return rojo; // Red for 0 to 25
  } else if (cantidad >= 26 && cantidad <= 50) {
    return amarillo; // Yellow for 26 to 50
  } else if (cantidad >= 51 && cantidad <= 90) {
    return naranja; // Orange for 51 to 90
  } else if (cantidad >= 91 && cantidad <= 100) {
    return verde; // Green for 91 to 100
  } else {
    
    console.error(`Invalid cantidad value: ${cantidad}`);
    return null; 
  }
}


//Colores random para las barras
function getRandomHexColor() {
  var hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  hex = '#49B675'
  return hex;
}

export function transformarString(cadena){
    cadena = cadena.toLowerCase();
    cadena = cadena.slice(0, -1);
    cadena = cadena.charAt(0).toUpperCase() + cadena.slice(1);

    return cadena;
  };

  export async function construyeBarra(j, nombre_id_area, dataset, i, paquete){
    //La J es la barra.
    //La i es el número de tabla para cada dataset. 
    //El número de tabla sabra que segmento de datos sacar.

    console.log("Dataset:" + dataset + ", tabla número: ", i)

    //El elemento en específico que tomará para ésta ronda es: 
    var elemento_ronda = paquete[j]
    console.log("El paquete específico que tomará para ésta ronda es: ", elemento_ronda)

    const svgNS = "http://www.w3.org/2000/svg";

    var elemento = transformarString(dataset)
  

  var barra = j + 1
 
  console.log("Estoy haciendo la barra número: " + barra)
  
  
  console.log("Paquete.Dataset es: ", elemento_ronda[elemento])
  var elemento = elemento_ronda[elemento]
  var fraccion = elemento_ronda.Avance +  "/" +  elemento_ronda.Total
  

  var porcentaje_avance = elemento_ronda['[%Avance]'];
  // const porcentaje_avance = paquete.["[%Avance]"]
  var texto = elemento + " Total: " + fraccion + " Avance: " + porcentaje_avance + "%"


  
  var ancho_barra = preparaAnchoPorcentaje(porcentaje_avance)
  var color_barra = preparaColorBarra(porcentaje_avance)
   

  // Barra
  var area = document.getElementById(nombre_id_area); 
  console.log("ESTO ES AREA: ", area)   

  var espaciado = 30

    //Barra
    var newRect = document.createElementNS(svgNS, "rect");
    // Set attributes for the current bar
    newRect.setAttribute('fill', color_barra); 
    newRect.setAttribute('stroke', "#000000");
    newRect.setAttribute('width', ancho_barra); 
    newRect.setAttribute('height', "25"); //grosor de la barra.
    newRect.setAttribute('x', "25"); 
    newRect.setAttribute('y', 20 + espaciado * j); 
    newRect.setAttribute('rx', "0"); // Esquinas curvas con 10
    newRect.setAttribute('ry', "10"); 

    console.log("Primer appendchild...")
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
      
      newText.textContent = texto; 

      console.log("Segundo appendchild...")
      area.appendChild(newText)

  }
