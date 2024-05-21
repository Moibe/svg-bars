var letra
var contorno

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

  
  // var verde = '#49B675'
  // var naranja = "#FFA500"
  // var amarillo = 'yellow'
  // var rojo = '#FF4000'
  // var azul = '#00aae4' 
  // var negro = '#000000' 

  
  var verde = "#00bc8c"
  var naranja = "#f39c12"
  var amarillo = "#f2fb00"
  var rojo = "#e4221f"
  var azul = "#00aae4" 
  var negro = "#000000"
  var blanco = "#FFFFFF"
  
  
  //Por default la letra será negra: 
  letra = "black"
  contorno = "black"

  if (cantidad >= 0 && cantidad < 25) {
    return rojo; 
  } else if (cantidad >= 25 && cantidad < 50) {
    return amarillo; 
  } else if (cantidad >= 50 && cantidad < 90) {
    return naranja; 
  } else if (cantidad >= 90 && cantidad < 100) {
    return verde;
  } else if (cantidad == 100) {
    letra = amarillo
    contorno = amarillo
    return negro; 
  } else {
    
    console.error(`Invalid cantidad value: ${cantidad}`);
    return azul; 
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

  export async function construyeBarra(j, nombre_id_area, dataset, i, paquete, barra){
    //La J es la barra.
    //La i es el número de tabla para cada dataset. 
    //El número de tabla sabra que segmento de datos sacar.

    console.log("procesofor, haciendo una nueva barra, del detaset: " + dataset + " y el registro:" + j)
    

    //El elemento en específico que tomará para ésta ronda es: 
    var elemento_ronda = paquete[j]
    console.log("El paquete específico que tomará para ésta ronda es: ", elemento_ronda)

    const svgNS = "http://www.w3.org/2000/svg";

    var elemento = transformarString(dataset)
  
  console.log("Previoerror...")
  console.log("Procesofor Paquete.Dataset es: ", elemento_ronda[elemento])
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
    newRect.setAttribute('stroke', contorno);
    newRect.setAttribute('width', ancho_barra); 
    newRect.setAttribute('height', "25"); //grosor de la barra.
    newRect.setAttribute('x', "25"); 
    newRect.setAttribute('y', 20 + espaciado * barra); 
    newRect.setAttribute('rx', "0"); // Esquinas curvas con 10
    newRect.setAttribute('ry', "10"); 


    area.appendChild(newRect);

      //Texto 

      var newText = document.createElementNS(svgNS, "text");
      
      newText.setAttribute('fill', letra)
      // newText.setAttribute('stroke', "black")
      newText.setAttribute('x', "30")
      newText.setAttribute('y', 20 + (espaciado * barra) +18)
      newText.setAttribute('font-size', '19px')
      newText.setAttribute('font-weight', '400')
      // newText.setAttribute('textLength', "29")
      
      newText.textContent = texto; 

      
      area.appendChild(newText)

  }
