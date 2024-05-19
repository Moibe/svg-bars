import { construyeBarra } from '/funciones.js';

export function cicloConstructor(cantidad_tablas, datos) {

  console.log("Recibidmos cantidad_tablas: ", cantidad_tablas)
  console.log("REcibimos los datos: ", datos)



  //Loop para cantidad de páginas.
  for (let i = 0; i < 3; i++){
    console.log("Estoy en la tabla: ", i+1)

    //Loop para cantidad de hojas.
    for (let j = 0; j < 15; j++) {
      //Éste ciclo constryue las 15 barras...          
      construyeBarra(i, j)
    }
      


      let remainingSeconds = 15; // Initial countdown value (15 seconds)

      const countdownInterval = setInterval(() => {
        console.log(`Countdown: ${remainingSeconds--} seconds`);
    
        if (remainingSeconds === 0) {
          clearInterval(countdownInterval); // Stop the interval when countdown reaches 0
          

        }
      }, 1000); // Update countdown every 1 second (1000 milliseconds)

      console.log("Esto se debería imprimir tres veces por la tabla en cuestión es: ", i)
      
      
  
  
    
  }

  
}

