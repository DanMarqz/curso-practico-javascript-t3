const listaModa = [4,1,5,2,3,4,3,4,2,2,1,3,1,4,5,1,2,4,5,4,3,3,2,1]

function calcularModa(listaModa){
  const listaCount = {}
  listaModa.map( (elemento) => {
    if (listaCount[elemento]) { 
      listaCount[elemento] += 1
    } else {
      listaCount[elemento] = 1
    }
  })
  
  const listaArray = Object.entries(listaCount).sort( ( a , b ) => { return a[1] - b[1] })
  const moda = listaArray[listaArray.length - 1][0]
  
  console.log(moda)
  return moda
}

calcularModa(listaModa)