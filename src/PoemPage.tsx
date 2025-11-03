import { useNavigate } from 'react-router-dom';
import './PoemPage.css';

const PoemPage = () => {
  const navigate = useNavigate();

  return (
    <div className="poem-page">
      <div className="poem-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Volver al inicio
        </button>
        
        <header className="poem-header">
          <h1 className="poem-title">Poema1</h1>
          <p className="poem-subtitle">De la mente de Macana</p>
        </header>

        <div className="poem-content">
          <div className="poem-text">
            <p className="verse">
              Le pedí compasión<br />
              a los mismos ojos<br />
              que solían mirarme con pasión.
            </p>
            
            <p className="verse">
              Esperé amor<br />
              del mismo corazón<br />
              que un día me salvó.
            </p>
            
            <p className="verse">
              Me faltó un latido,<br />
              una frecuencia,<br />
              tu ausencia.
            </p>
            
            <p className="verse">
              Busqué en cada habitación<br />
              el sonido de tu voz,<br />
              encontrándome con el eco de un adiós.
            </p>
          </div>
        </div>

        <footer className="poem-footer">
          <div className="poem-actions">
            <button className="share-button">Compartir</button>
            <button className="favorite-button">💜 Me gusta</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PoemPage;