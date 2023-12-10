import imagem from './assets/Fabio.png';
import './styles.css'; // Importe o estilo CSS

// Componente About
function TelaSobre() {
  return (
    <div className="container"> 
      <div className="container-about">
        <div className="wrap-about">
          {/* Seção 1 */}
          <div className="about-section">
            <h2 className="about-title">Favorite-Foods</h2>
            <p>
            O Favorite Foods é um projeto desenvolvido no âmbito da disciplina de Programação Web do CERES-UFRN. 
            Sua proposta é estabelecer uma comunidade de entusiastas da boa culinária,proporcionando a oportunidade
            de  curtir e Favoritar suas experiências gastronômicas de forma interativa.
            </p>
          </div>

          {/* Seção 2 */}
          <div className="about-section">
            <h2 className="about-title">Quem somos nós?</h2>

            {/* Criador 1 */}
            <div className="creator-info">
              <div className="creator-image">
                {imagem}
                <img src="path_to_creator_image_1" alt="Creator 1" />
              </div>
              <div className="creator-text">
                {/* Adicione o nome e a descrição do criador 1 aqui */}
                <h3>Fábio Araújo</h3>
                <p>Estudante do 10° Periodo, no curso de Bacharel em sistemas de Informação CERES - UFRN,
                   Técnico em Informática pela EAJ-UFRN. </p>
              </div>
            </div>

            {/* Criador 2 */}
            <div className="creator-info">
              <div className="creator-image">
                {/* Adicione a imagem do criador 2 aqui */}
                <img src="path_to_creator_image_2" alt="Creator 2" />
              </div>
              <div className="creator-text">
                {/* Adicione o nome e a descrição do criador 2 aqui */}
                <h3>Vinicius Lima</h3>
                <p>Descrição do Criador 2...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaSobre;