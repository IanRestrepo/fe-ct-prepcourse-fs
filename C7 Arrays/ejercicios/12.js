function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  return array.map((element) => element.toUpperCase());


}

let a = ['a', 'b', 'c', 'd'];

module.exports = convertirStringAMayusculas;
