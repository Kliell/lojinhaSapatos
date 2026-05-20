import { buscarSapatos } from './services/api.js';
import { CardSapato } from './components/CardSapato.js';

const vitrine = document.getElementById('vitrine-sapatos');

const iniciarApp = async () => {
  const sapatos = await buscarSapatos();
  
  if (sapatos.length === 0) {
    vitrine.innerHTML = "<p>Nenhum sapato encontrado no momento.</p>";
    return;
  }

  vitrine.innerHTML = sapatos.map(sapato => CardSapato(sapato)).join('');
};

iniciarApp();