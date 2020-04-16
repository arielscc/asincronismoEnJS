const suma = ( a, b ) => {
  return a + b;
}
const fnCallback = ( a, b, callback ) => {
  return callback( a, b );
}

console.log( fnCallback( 2, 3, suma ))


function date( callback ){
  console.log('Primero', new Date );
  setTimeout( function(){
    let date = new Date;
    callback( date )
  },2000 )
  console.log('Tercero', new Date );
}

function printDate( dateNow ){
  console.log( 'Segundo', dateNow )
}

date( printDate )