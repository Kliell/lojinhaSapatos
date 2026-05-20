export const CardSapato = (sapato) => {
  return `
    <div class="card-sapato ${sapato.em_promocao ? 'promocao' : ''}">
      ${sapato.em_promocao ? '<span class="badge">PROMOÇÃO</span>' : ''}
      <h3 class="sapato-nome">${sapato.nome}</h3>
      <p class="sapato-marca">Marca: <strong>${sapato.marca}</strong></p>
      <p class="sapato-modelo">Modelo: ${sapato.modelo}</p>
      
      <div class="sapato-detalhes">
        <p><strong>Cores:</strong> ${sapato.cores.join(', ')}</p>
        <p><strong>Tamanhos:</strong> ${sapato.tamanhos_disponiveis.join(', ')}</p>
      </div>

      <p class="sapato-preco">R$ ${sapato.preco.toFixed(2)}</p>
      <button class="btn-comprar">Comprar</button>
    </div>
  `;
};