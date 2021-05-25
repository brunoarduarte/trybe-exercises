const { test } = require('@jest/globals');
const { sum } = require('./exercise-parte1.js');
const { encode, decode, techList } = require('./exercise-parte2.js')

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

// 1. Teste se encode e decode são funções;
// 2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// 3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// 4. Teste se as demais letras/números não são convertidos para cada caso;
// 5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
describe('As funções encode e decode', () => {
  test('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toEqual('function')
  });
  test('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('1n1n31s')).toEqual('ananias')
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('ananias')).toEqual('1n1n31s')
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('Breno')).toEqual('Br2n4')
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('Luma')).toEqual('L5m1')
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('Bruno').length).toEqual(5)
  });
});