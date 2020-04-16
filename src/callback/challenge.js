/* Instanciamos la dependencia con require() */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';


function fetchData( url_api, callback) {
  let xhttp = new XMLHttpRequest(); // Referencia del objeto que necesitamos.
  /* Hacemos un llamado a una url */
  xhttp.open('GET', url_api, true) // El último parámetro hace referencia al asincronismo. Por defecto es true, pero lo ponemos para referencia.
  /* 'Escuchamos' lo que hará la conexión (Referente a los 5 estados que comenta el profesor) */
  xhttp.onreadystatechange = event => {
    // Los estados de un request de acuerdo a la documentacion:
    //       0: request not initialized
    //       1: server connection established
    //       2: request received
    //       3: processing request
    //       4: request finished and response is ready
    if (xhttp.readyState === 4) { // Validar si la petición se completó. (Estado 5 pero contamos desde 0 como en un array)
      if (xhttp.status === 200) { // Validar el estado en el que se encuentra la petición. (200 = todo bien, 400 = no encontró algo, 500 = error en el servidor)
        /* Regresar el callback (primer valor que pasamos es el error y el segundo es el resultado del llamado a la API) */
        callback(null, JSON.parse(xhttp.responseText)) // Como el resultado viene en formato de texto de JSON, lo tenemos que convertir a un objeto para trabajar con él
      } else {
        /* Definimos y retornamos un error en caso de obtenerlo (buena práctica) */
        const error = new Error('Error ' + url_api)
        return callback(error, null)
      }
    }
  }
  xhttp.send(); // Enviamos la petición.
}


//invocamos a la funcion y le pasamos el URL y una funcion callback que recibe el error y los datos de la peticion
fetchData(API, function( error1, data1 ){
  if ( error1 ) {
    return console.error( error1 )
  }
  // console.log( data1.info );
  
  console.log( API + data1.results[6].id); //https://rickandmortyapi.com/api/character/2
  fetchData( API + data1.results[6].id, function( error2, data2 ){
    if( error2 ){
      return console.error( error2 );
    }
    // console.log( data2 );
    console.log( data2.origin.url ); //https://rickandmortyapi.com/api/location/1
    
    fetchData( data2.origin.url, function( error3, data3 ){
      if ( error3 ) {
        return console.error( error3 );
      }
      // console.log( data3 );
      
      console.log( data1.info.count );
      console.log( data2.name );
      console.log( data3.dimension );
    } )
  } )
})