const productoEntreNúmeros = require('../ejercicios/18');

test('productoEntreNúmeros of 0 and 0 is 0', () => {
  expect(productoEntreNúmeros(0, 0)).toBe(0);
});

test('productoEntreNúmeros of -5 and 5 is 0', () => {
  expect(productoEntreNúmeros(-5, 5)).toBe(0);
});

test('productoEntreNúmeros of 1 and 5 is 120', () => {
  expect(productoEntreNúmeros(1, 5)).toBe(120);
});

test('productoEntreNúmeros of -3 and -1 is -6', () => {
  expect(productoEntreNúmeros(-3, -1)).toBe(-6);
});

test('productoEntreNúmeros of 2 and 2 is 2', () => {
  expect(productoEntreNúmeros(2, 2)).toBe(2);
});