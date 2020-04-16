//Definicion de promesas

const somethingWillHappen = () =>{
  return new Promise( ( resolve, reject ) => {
    true? resolve('Pasó la promesa'): reject('No pasó la promesa')
  })
}

somethingWillHappen()
  .then(console.log)
  .catch(console.log)

  const somethingWillHappen2 = () =>{
    return new Promise( ( resolve, reject ) => {
      if ( true ) {
        setTimeout( resolve, 3000, 'Paso la promesa a 3s')
      } else {
        reject( new Error('No pasó la promesa'))
      }
    })
  }
  
  // somethingWillHappen2()
  //   .then(console.log)
  //   .catch(console.log)

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
      .then(console.log)