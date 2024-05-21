import { construyeBarra } from '/funciones.js';

export function cicloConstructor(cantidad_tablas, cantidad_barras, nombre_id_area, dataset, i, paquete) {

  //Quizá aquí debería enviar en que vuelta de que dataset va.
  console.log("Clean: El paquete es: ", paquete)
  console.log("Clean: Y su longitud es: ", paquete.length)
  
    
    //Loop para cada barra.
    //Pero aquí, en cada una de las vueltas debe de empezar desde (dependiendo de la vuelta, 12 numeros después)

    var inicio = ((i-1)*cantidad_barras)
    console.log("El inicio para ésta vuelta debería ser: ", inicio)

    console.log("Clean: Estoy en la tabla (i): " + i + " de un total de tablas de:" + cantidad_tablas)

    //El offset es los espacios que no se deben de llenar de la última tabla si no es exacta. 
    //Ésta sería su fórmula para calcularlo.
    var offset = (cantidad_tablas * cantidad_barras) - paquete.length
    console.log("Clean: El valor de offset es: ", offset)

 
    //Aquí se define el fin de cada tabla, si es la última, aplicará el offset. 
      if (i==cantidad_tablas) {
        //Si estoy en la última tabla, le voy a restar el offset.
        var fin = inicio + cantidad_barras - offset
      } else {
        var fin = inicio + cantidad_barras
      }    

    //Aquí agrega un IF adicional para que el fin de la última tabla sea exactamente el correcto y no se redondee a que sea el fin de la tabla.
    var fin = cantidad_barras + inicio - offset
    //0: Aquí se puede sumar un valor determinado extra a inicio para que en todas la vueltas como regla general resten ese offset.

    //Sin importar el registro en el que vaya "j", el set de barras siempre irá de 0 a 11.
    var barra = 0  

    //Si es la última tabla, necesitará parar antes del fin, y eso se basará en si está en la última tabla y cuantos "espacios vacios sobrarán"

    for (let j = inicio; j < fin; j++) {
      //Éste ciclo constryue las 15 barras...    
      //Cada i es el número de tabla para ese dataset.
      //console.log("Dentro de procesofor, el inicio es: " + inicio + " y el fin es: " + fin + " y la j es: " + j)  
        
      construyeBarra(j, nombre_id_area, dataset, i, paquete, barra)
      barra += 1;
    }
    
  }

  
// }

