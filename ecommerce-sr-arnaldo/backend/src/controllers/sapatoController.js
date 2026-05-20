const sapatosDoBanco = [
  {
    id: "1",
    nome: "Tênis Runner Comfort",
    marca: "Calçados Conforto",
    preco: 259.90,
    modelo: "Esportivo",
    cores: ["Preto", "Azul"],
    tamanhos_disponiveis: [39, 40, 41],
    em_promocao: true,
    quantidade_estoque: 15 
  },
  {
    id: "2",
    nome: "Sapato Social Classic",
    marca: "Elegance",
    preco: 349.90,
    modelo: "Social",
    cores: ["Marrom"],
    tamanhos_disponiveis: [40, 42, 43],
    em_promocao: false,
    quantidade_estoque: 8 
  }
];

const listarSapatos = (req, res) => {
  try {
    const sapatosTratados = sapatosDoBanco.map(sapato => ({
      id: sapato.id,
      nome: sapato.nome,
      marca: sapato.marca,
      preco: sapato.preco,
      modelo: sapato.modelo,
      cores: sapato.cores,
      tamanhos_disponiveis: sapato.tamanhos_disponiveis,
      em_promocao: sapato.em_promocao
    }));

    res.status(200).json(sapatosTratados);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar os sapatos." });
  }
};

module.exports = { listarSapatos };