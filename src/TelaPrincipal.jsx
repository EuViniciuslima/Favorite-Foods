import { useState } from 'react';
import './styles-tela-principal.css'; // Certifique-se de importar o arquivo de estilos correto
import FoodCard from './FoodCard'; // Supondo que você tenha um componente FoodCard para exibir as comidas

function TelaPrincipal() {
  const [comidas, setComidas] = useState([
    { id: 1, nome: 'Pizza', favorito: false },
    { id: 2, nome: 'Hambúrguer', favorito: false },
    // Adicione outras comidas conforme necessário
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [foodType, setFoodType] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Lógica para filtrar as comidas com base no termo de busca
    // Atualizar o estado das comidas exibidas
  };

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
    // Lógica para filtrar as comidas com base no tipo selecionado
    // Atualizar o estado das comidas exibidas
  };

  const handleFavoritar = (id) => {
    setComidas(
      comidas.map((comida) =>
        comida.id === id ? { ...comida, favorito: !comida.favorito } : comida
      )
    );
    // Lógica para adicionar ou remover comidas favoritas
    // Atualizar o estado das comidas favoritas
  };

  return (
    <div className="container-tela-principal">
      <div className="menu">
        {/* Ícone do menu */}
        <button className="menu-icon" onClick={() => console.log('Menu clicado')}>
          Menu
        </button>
      </div>
      <div className="informacoes">
        {/* Barra de pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar comida..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* Tipo de comida */}
        <select value={foodType} onChange={handleFoodTypeChange}>
          <option value="">Selecione o tipo de comida</option>
          {/* Opções para tipos de comida */}
        </select>
        {/* Imagem da comida */}
        <img src="caminho/para/imagem" alt="Comida" className="imagem-comida" />
        {/* Caixinha de favoritos */}
        <div className="favoritos">
          <h3>Favoritos</h3>
          {/* Lista de comidas favoritas */}
        </div>
        {/* Lista de comidas */}
        <div className="comidas-lista">
          {comidas.map((comida) => (
            <FoodCard
              key={comida.id}
              comida={comida}
              onFavoritar={() => handleFavoritar(comida.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TelaPrincipal;
