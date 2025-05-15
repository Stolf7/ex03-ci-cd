function validaNota(nota) {
    return nota >= 0 && nota <= 10;
  }
  
  function calculaMedia(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return 0;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  }
  
  function situaAluno(media) {
    if (media >= 7) return 'Aprovado';
    if (media >= 4) return 'Recuperação';
    return 'Reprovado';
  }
  
  module.exports = { validaNota, calculaMedia, situaAluno };
  