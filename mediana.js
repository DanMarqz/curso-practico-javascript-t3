const listaMediana = [24,32,17,69,5,2,10]

function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce( (valorAcumulado = 0 , nuevoElemento) => {
    return valorAcumulado + nuevoElemento
  })
  
  const promedioLista = sumaLista / lista.length

  console.log(promedioLista)
  return promedioLista
}

function calcularMediana(listaMediana){
  listaMediana.sort( ( a , b ) => { return a - b } );
  
  const mitadLista = parseInt(listaMediana.length / 2)
  const esPar = (numerito) => { ( numerito % 2 ) === 0 ? true : false }
  
  let mediana
  
  if( esPar(listaMediana.length) ){
    const elemento1 = listaMediana[mitadLista - 1]
    const elemento2 = listaMediana[mitadLista]
  
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
  
    mediana = promedioElemento1y2
    console.log(mediana)
    return mediana
  } else {
    mediana = listaMediana[mitadLista]
    console.log(mediana)
    return mediana
  }
}

calcularMediana(listaMediana)