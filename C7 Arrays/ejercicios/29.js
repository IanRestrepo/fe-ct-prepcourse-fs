function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) return null;

  let n = numeros.length + 1;

  let suma = (n * (n + 1)) / 2;

  let sumaNumeros = numeros.reduce((acc, el) => acc + el);

  if (suma === sumaNumeros) return null;

  return suma - sumaNumeros;


}

let a = [1, 2, 3, 4];

module.exports = encontrarNumeroFaltante;