function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  let newArray = [];  
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

let a = [1, 2, 3, 4];

module.exports = invertirArray;
