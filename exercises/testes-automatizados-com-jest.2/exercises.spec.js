const exercises = require('./exercises');
const { uppercase, getUserName } = exercises;

// Exercício 1
describe('A função uppercase', () => {
  test('transforma as letras de uma palavra em letras maiúsculas', (done) => {
    uppercase('nome', (str) => {
      expect(str).toBe('NOME');
      done();
    });
  });
});

// Exercício 2