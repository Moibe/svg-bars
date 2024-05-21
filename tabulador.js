import { construyeBarra } from '/funciones.js';

export function cicloConstructor(cantidad_tablas, cantidad_barras, nombre_id_area, dataset, i, paquete) {

  //Quizá aquí debería enviar en que vuelta de que dataset va.
  console.log("Vuelta i= " + i + " del dataset: ", dataset)
  
    
    //Loop para cada barra.
    //Pero aquí, en cada una de las vueltas debe de empezar desde (dependiendo de la vuelta, 12 numeros después)

    var inicio = ((i-1)*cantidad_barras)
    console.log("El inicio para ésta vuelta debería ser: ", inicio)

    var fin = cantidad_barras + inicio

    //Sin importar el registro en el que vaya "j", el set de barras siempre irá de 0 a 11.
    var barra = 0  

    for (let j = inicio; j < fin; j++) {
      //Éste ciclo constryue las 15 barras...    
      //Cada i es el número de tabla para ese dataset.
      //console.log("Dentro de procesofor, el inicio es: " + inicio + " y el fin es: " + fin + " y la j es: " + j)  
        
      construyeBarra(j, nombre_id_area, dataset, i, paquete, barra)
      barra = barra + 1
      //barra += 1;
    }
    
  }

  
// }

