const fetchData = require('../utils/fetchData')
// import fetchData from  '../utils/fetchData';
const API = 'https://rickandmortyapi.com/api/character/';

fetchData( API )
  .then( data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then ( data => {
    console.log( data.name )
    // console.log( data.origin.url )
    return fetchData( data.origin.url );
  })
  .then( data => console.log(data.dimension))
  .catch( console.log )