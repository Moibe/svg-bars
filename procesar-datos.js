import { obtenerDatosAPI } from '/obtenerDatos.js';
import { cicloConstructor } from '/generar-tablas.js';
import { transformarString } from '/funciones.js';

var cantidad_barras = 12
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
        console.log("Esto es todo: ", datos[dataset][0])

        //Cada i es una tabla para ese dataset.
        for (let i = 1; i < cantidad_tablas + 1; i++){ 
        
            //Hacer esto tantas veces como tablas deba tener ese dataset (cantidad_tablas)

            var nombre_id_carrusel = "carrusel" + dataset + i

            //Creación del segmento de carrusel que contendrá el área del dibujo:
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            carouselItem.id = nombre_id_carrusel;
            carouselItem.dataset.bsInterval = '5000'; // Intervalo de tiempo para el slide del carrusel.

            var carrusel = document.getElementById("carrusel"); 
            console.log("ESto es carrusel: ", carrusel)
            carrusel.appendChild(carouselItem);
            console.log("Esto es carrusel después de la unión: ", carrusel)

            //Creación del área de dibujo.
            const svgNS = "http://www.w3.org/2000/svg";
            const svgElement = document.createElementNS(svgNS, "svg");

            var nombre_id_area = "area" + dataset + i
            
            // Atributos del elemento svg donde se trabajará.
            svgElement.setAttribute("width", "600");
            svgElement.setAttribute("height", "500");
            svgElement.setAttribute("id", nombre_id_area); //Id
            svgElement.setAttribute("class", "svgGrafica"); //Clase
            // Append the SVG element to the desired container (e.g., body)
            
            var itemCarrusel = document.getElementById(nombre_id_carrusel); 
            itemCarrusel.appendChild(svgElement);

            var paquete = datos[dataset]           
            
            console.log("Procesofor: Construído svg para recibir siguiente set.")
            //Construirá las barras que van en ese svg.
            
            cicloConstructor(cantidad_tablas, cantidad_barras, nombre_id_area, dataset, i, paquete);
            ////

        }
   
        } else {
        console.error(`Error: Propiedad "${dataset}" no encontrada en datos.`);
      }
    }
  });
