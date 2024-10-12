function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  return array.filter((element) => element > 10).length;
}

let a = [1, 2, 3, 4];

module.exports = contarElementosMayoresA10;
