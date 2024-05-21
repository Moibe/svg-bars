import { obtenerDatosAPI } from '/obtenerDatos.js';
import { cicloConstructor } from '/tabulador.js';
import { transformarString } from '/funciones.js';

var cantidad_barras = 15
var datasets = ['RUTAS', 'CLIENTES']

//Primero obtengo los datos y entonces hago las operaciones de calculo de cantidad de tablas.
obtenerDatosAPI().then(datos => {
      
    for (const dataset of datasets) {
      if (datos.hasOwnProperty(dataset)) {
        console.log(`${dataset}: `, datos[dataset]);
        var cantidad = datos[dataset].length
        var cantidad_tablas = cantidad / cantidad_barras
        cantidad_tablas = Math.ceil(cantidad_tablas)
        console.log("La cantidad de " + dataset +  " es: " + cantidad + " y la cantidad de tablas que necesita son: " + cantidad_tablas)
        console.log("Esto es dataset: ", dataset)
        var elementoDataset =  transformarString(dataset);
        console.log(elementoDataset)
        console.log("Esto es elemento: ", datos[dataset][0][elementoDataset])
        console.log("Esto es todo: ", datos[dataset][0])

        //Cada i es una tabla para ese dataset.
        for (let i = 1; i < cantidad_tablas + 1; i++){ 
        
            //Hacer esto tantas veces como tablas deba tener ese dataset (cantidad_tablas)
            const svgNS = "http://www.w3.org/2000/svg";
            const svgElement = document.createElementNS(svgNS, "svg");

            var nombre_id_area = "area" + dataset + i
            
            // Atributos del elemento svg donde se trabajará.
            svgElement.setAttribute("width", "600");
            svgElement.setAttribute("height", "500");
            svgElement.setAttribute("id", nombre_id_area); // Set an ID
            svgElement.setAttribute("class", "svgGrafica"); // Set a class
            // Append the SVG element to the desired container (e.g., body)
            document.body.appendChild(svgElement);

            var paquete = datos[dataset]
            console.log("182: Esto es el paquete que se va a enviar: ", paquete)

            
            //Construirá las barras que van en ese svg.
            cicloConstructor(cantidad_tablas, cantidad_barras, nombre_id_area, dataset, i, paquete);
            ////

        }
   
        } else {
        console.error(`Error: Propiedad "${dataset}" no encontrada en datos.`);
      }
    }
  });
