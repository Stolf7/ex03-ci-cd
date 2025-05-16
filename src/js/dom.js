import { calculaMedia, situaAluno } from './app.js';

const form = document.getElementById('mediaForm');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const n1 = parseFloat(document.getElementById('nota1').value);
  const n2 = parseFloat(document.getElementById('nota2').value);

  try {
    const media = calculaMedia(n1, n2);
    const situacao = situaAluno(media);
    resultadoDiv.textContent = `${nome}: média = ${media} → ${situacao}`;
  } catch (err) {
    resultadoDiv.textContent = `Erro: ${err.message}`;
  }
});
