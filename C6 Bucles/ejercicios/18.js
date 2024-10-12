function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var producto = 1;
  for (var i = a; i <= b; i++) {
    producto = producto * i;
  }
  return producto;
  }

// Test cases
console.log(productoEntreNúmeros(1, 5)); // 120
console.log(productoEntreNúmeros(2, 5)); // 120
console.log(productoEntreNúmeros(1, 5)); // 120
console.log(productoEntreNúmeros(-5, 5)); // 0
console.log(productoEntreNúmeros(-3, -1)); // -6
console.log(productoEntreNúmeros(2, 2)); // 2

  
module.exports = productoEntreNúmeros;