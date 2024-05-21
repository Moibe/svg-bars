export async function obtenerDatosAPI() {

    try {
      //const response = await fetch('http://127.0.0.1:8000/getTodo');
      //const response = await fetch('http://192.168.127.50:8000/getTodo');
      //const response = await fetch('http://127.0.0.1:8000/fallback');

      const response = await fetch('http://api-rutasdinamicas.grupoampm.com:8000/getTodo');
      const datos = await response.json();
      console.log("Éstos son los datos", datos)
      return datos; 
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }
  