const API_URL = "http://localhost:5000/api" // URL local ou a da AWS após o deploy

export const buscarSapatos = async () => {
  try {
    const response = await fetch(`${API_URL}/sapatos`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    return [];
  }
};