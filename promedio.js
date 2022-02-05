function calcularMediaAritmetica(lista){
  // let sumaLista = 0
  
  // for (sum of lista){
  //   sumaLista = sumaLista + sum
  // }

  const sumaLista = lista.reduce( (valorAcumulado = 0 , nuevoElemento) => {
    return valorAcumulado + nuevoElemento
  })
  
  const promedioLista = sumaLista / lista.length

  console.log(promedioLista)
  return promedioLista
}

calcularMediaAritmetica([1,2,3,4,5]);