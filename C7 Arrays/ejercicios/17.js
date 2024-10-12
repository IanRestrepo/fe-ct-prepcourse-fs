function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((acc, curr) => acc + curr);


}

let a = [1, 2, 3, 4];

module.exports = agregarNumeros;
