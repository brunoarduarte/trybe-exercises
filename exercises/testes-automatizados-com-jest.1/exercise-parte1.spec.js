const { test } = require('@jest/globals');
const { sum } = require('./exercise-parte1.js');

describe('A função sum', () => {
  test('Retorna a soma de 4 e 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9)
  });
  test('Retorna a soma de 0 e 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrow();
  });
  test('Retorna a mensagem de erro "parameters must be numbers" quando realizar a soma de 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrow(/parameters must be numbers/);
  });
});