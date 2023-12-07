import { useState } from 'react';
import './styles-tela-principal.css'; // Certifique-se de importar o arquivo de estilos correto
import FoodCard from './FoodCard'; // Supondo que você tenha um componente FoodCard para exibir as comidas

function TelaPrincipal() {
  // Aqui você pode ter um estado para armazenar as comidas e suas informações
  const [comidas, setComidas] = useState([
    { id: 1, nome: 'Pizza', favorito: false },
    { id: 2, nome: 'Hambúrguer', favorito: false },
    // Adicione outras comidas conforme necessário
  ]);

  // Função para alternar o status de favorito de uma comida
  const handleFavoritar = (id) => {
    setComidas(
      comidas.map((comida) =>
        comida.id === id ? { ...comida, favorito: !comida.favorito } : comida
      )
    );
  };

  return (
    <div className="container-tela-principal">
      <h1>Bem-vindo à Tela Principal!</h1>
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
  );
}

export default TelaPrincipal;
