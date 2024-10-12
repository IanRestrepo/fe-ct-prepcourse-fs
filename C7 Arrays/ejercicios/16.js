function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  return array.map((element, index) => element * index);


}

let a = [1, 2, 3, 4];

module.exports = multiplicarElementosPorIndice;
