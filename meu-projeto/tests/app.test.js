const { validaNota, calculaMedia, situaAluno } = require('../src/js/app.js');

describe('validaNota', () => {
  test('nota válida retorna true', () => {
    expect(validaNota(8)).toBe(true);
  });

  test('nota inválida retorna false', () => {
    expect(validaNota(11)).toBe(false);
  });
});

describe('calculaMedia', () => {
  test('calcula média corretamente', () => {
    expect(calculaMedia([7, 8, 9])).toBe(8);
  });

  test('retorna 0 se lista estiver vazia', () => {
    expect(calculaMedia([])).toBe(0);
  });
});

describe('situaAluno', () => {
  test('aluno aprovado', () => {
    expect(situaAluno(8)).toBe('Aprovado');
  });

  test('aluno em recuperação', () => {
    expect(situaAluno(5)).toBe('Recuperação');
  });

  test('aluno reprovado', () => {
    expect(situaAluno(3)).toBe('Reprovado');
  });
});
