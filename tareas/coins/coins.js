// Espera a que todo el contenido del DOM haya sido completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // Clave API para acceder a los servicios de CoinAPI (debes reemplazarla con tu propia clave)
    const apikey = '';

    // URL de la API para obtener la lista de intercambios de criptomonedas
    const url = 'https://rest.coinapi.io/v1/exchanges';

    // Función asíncrona para obtener los datos de los intercambios desde la API
    async function fetchExchanges() {
        try {
            // Realiza una solicitud a la API usando fetch, pasando la clave API en los encabezados
            const response = await fetch(url, {
                headers: {
                    'X-CoinAPI-Key': apikey
                }
            });

            // Verifica si la solicitud fue exitosa (status code 200-299)
            if (!response.ok) {
                console.error('Error en la solicitud a la API:', response.status, response.statusText);
                return; // Si hay un error, sale de la función
            }

            // Convierte la respuesta de la API en un objeto JSON
            const data = await response.json();

            // Obtiene solo los primeros 16 intercambios del resultado
            const exchanges = data.slice(0, 16);

            // Recorre cada intercambio y muestra sus datos en la consola
            exchanges.forEach(exchange => {
                console.log(`Exchange Name: ${exchange.name}`); // Nombre del intercambio
                console.log(`Volume 1hr USD: ${exchange.volume_1hrs_usd.toFixed(2)}`); // Volumen en 1 hora en USD
                console.log(`Volume 1day USD: ${exchange.volume_1day_usd.toFixed(2)}`); // Volumen en 1 día en USD
                console.log(''); // Separador entre cada intercambio
            });

        } catch (error) {
            // Captura y muestra cualquier error que ocurra durante la solicitud
            console.error('Ocurrió un error al hacer la solicitud:', error);
        }
    }

    // Llama a la función para obtener los intercambios
    fetchExchanges();
});
