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
describe('A função getUserName', () => {
  test('Retorna o user name', () => {
    expect.assertions(1);
    return getUserName(4).then(response => expect(response).toEqual('Mark'))
  });
  test('Retorna erro se o id não existir', () => {
    expect.assertions(1);
    return getUserName(3).catch(error =>
      expect(error).toEqual({ error: 'User with 3 not found.' }))
  });
});

// Exercício 3
describe('A função getUserName', () => {
  test('Retorna o user name', async () => {
    expect.assertions(1);
    const response = await getUserName(4);
    expect(response).toEqual('Mark');
  });
  test('Retorna erro se o id não existir', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' })
    }
  });
});