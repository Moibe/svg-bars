import { construyeBarra } from '/funciones.js';

export function cicloConstructor(cantidad_tablas, cantidad_barras, nombre_id_area, dataset, i, paquete) {

  console.log("Recibimos cantidad_tablas: ", cantidad_tablas)
  
  //Loop para cantidad de tablas para ese dataser.
  // for (let i = 0; i < cantidad_tablas; i++){
    
    //Loop para cada barra.
    for (let j = 0; j < cantidad_barras; j++) {
      //Éste ciclo constryue las 15 barras...    
      //Cada i es el número de tabla para ese dataset.      
      construyeBarra(j, nombre_id_area, dataset, i, paquete)
    }
    
  }

  
// }

