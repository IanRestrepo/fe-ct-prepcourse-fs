function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  return array.every((element) => element === array[0]);


}

let a = [1, 1, 1, 1];

module.exports = todosIguales;
