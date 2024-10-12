function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  return array.filter((element) => element % 2 === 0);
}

let a = [1, 2, 3, 4];

module.exports = filtrarNumerosPares;
