import { obtenerDatosAPI } from '/obtenerDatos.js';
import { cicloConstructor } from '/tabulador.js';
import { transformarString } from '/funciones.js';

var cuantosXtabla = 15
var datasets = ['RUTAS', 'CLIENTES']

//Primero obtengo los datos y entonces hago las operaciones de calculo de cantidad de tablas.
obtenerDatosAPI().then(datos => {
    console.log(datos);
  
    for (const dataset of datasets) {
      if (datos.hasOwnProperty(dataset)) {
        console.log(`${dataset}: `, datos[dataset]);
        var cantidad = datos[dataset].length
        var cantidad_tablas = cantidad / cuantosXtabla
        cantidad_tablas = Math.ceil(cantidad_tablas)
        console.log("Cantidad: ", cantidad)
        console.log("La cantidad de " + dataset +  " es: " + cantidad + " y la cantidad de tablas que necesita son: " + cantidad_tablas)
        console.log("Esto es dataset: ", dataset)
        var elementoDataset =  transformarString(dataset);
        console.log(elementoDataset)
        console.log("Esto es elemento: ", datos[dataset][0][elementoDataset])
        console.log("Esto es todo: ", datos[dataset][0])

        //Y construyo la tabla:
        cicloConstructor(cantidad_tablas, datos);
        

    
        } else {
        console.error(`Error: Propiedad "${dataset}" no encontrada en datos.`);
      }
    }
  });
