import { useState, useEffect, useRef } from "react";
import Personaje from "./Personaje"
import Navbar from "./Navbar"

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const svgRef = useRef(null);

  useEffect(() => {
    async function fetchDate() {
      try {
        setLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
        
        // Agregamos un timeout artificial para mejorar la experiencia visual
        await new Promise(resolve => setTimeout(resolve, 200));
        
        setPersonajes(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDate();
  }, [page]);

  // Efecto para controlar las animaciones SVG
  useEffect(() => {
    if (!svgRef.current) return;
    
    const animateElements = svgRef.current.querySelectorAll('animate');
    
    if (animationsEnabled) {
      // Activar animaciones
      animateElements.forEach(anim => {
        anim.setAttribute('begin', '0s');
      });
      
      // Remover clase de pausa del cuerpo y SVG
      document.body.classList.remove('animations-disabled');
      svgRef.current.classList.remove('animations-paused-svg');
      
    } else {
      // Desactivar animaciones
      animateElements.forEach(anim => {
        anim.setAttribute('begin', 'indefinite');
      });
      
      // Añadir clase de pausa al cuerpo y SVG
      document.body.classList.add('animations-disabled');
      svgRef.current.classList.add('animations-paused-svg');
    }
    
    // Imprimir estado actual para debug
    console.log("Estado de animaciones:", animationsEnabled ? "ACTIVADAS" : "DESACTIVADAS");
    
  }, [animationsEnabled]);

  const toggleAnimations = () => {
    // Invierte el estado actual
    setAnimationsEnabled(prevState => !prevState);
  };

  return (
    <>
      <div className={`portal-background ${!animationsEnabled ? 'animations-disabled' : ''}`}></div>
      
      {/* Renderizamos SVG solo si las animaciones están habilitadas o con una clase de pausa */}
      <svg 
        ref={svgRef} 
        className={`particles-svg ${!animationsEnabled ? 'animations-paused-svg' : ''}`} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grupo 1 - Superior izquierda */}
        <circle className="particle-dot" r="0.8" cx="15" cy="15">
          <animate attributeName="cx" values="15;25;15" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="15;25;15" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.6" cx="25" cy="10">
          <animate attributeName="cx" values="25;35;25" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="10;20;10" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.7" cx="10" cy="30">
          <animate attributeName="cx" values="10;20;10" dur="6s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;40;30" dur="6s" repeatCount="indefinite" />
        </circle>

        {/* Grupo 2 - Superior derecha */}
        <circle className="particle-dot" r="0.9" cx="75" cy="15">
          <animate attributeName="cx" values="75;85;75" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="15;25;15" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.7" cx="85" cy="25">
          <animate attributeName="cx" values="85;75;85" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="25;35;25" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.6" cx="90" cy="10">
          <animate attributeName="cx" values="90;80;90" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="10;20;10" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* Grupo 3 - Centro */}
        <circle className="particle-dot" r="1" cx="50" cy="50">
          <animate attributeName="cx" values="50;60;50" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="50;40;50" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.8" cx="40" cy="45">
          <animate attributeName="cx" values="40;50;40" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="45;55;45" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.7" cx="60" cy="55">
          <animate attributeName="cx" values="60;50;60" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="55;45;55" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* Grupo 4 - Inferior izquierda */}
        <circle className="particle-dot" r="0.8" cx="20" cy="75">
          <animate attributeName="cx" values="20;30;20" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="75;85;75" dur="9s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.6" cx="15" cy="85">
          <animate attributeName="cx" values="15;25;15" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="85;75;85" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.7" cx="30" cy="80">
          <animate attributeName="cx" values="30;40;30" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="80;70;80" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* Grupo 5 - Inferior derecha */}
        <circle className="particle-dot" r="0.9" cx="75" cy="75">
          <animate attributeName="cx" values="75;85;75" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="75;85;75" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.7" cx="85" cy="85">
          <animate attributeName="cx" values="85;75;85" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="85;75;85" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.6" cx="90" cy="70">
          <animate attributeName="cx" values="90;80;90" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;80;70" dur="9s" repeatCount="indefinite" />
        </circle>

        {/* Partículas adicionales dispersas */}
        <circle className="particle-dot" r="0.5" cx="35" cy="30">
          <animate attributeName="cx" values="35;45;35" dur="6s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;40;30" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.6" cx="65" cy="25">
          <animate attributeName="cx" values="65;55;65" dur="7s" repeatCount="indefinite" />
          <animate attributeName="cy" values="25;35;25" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.4" cx="45" cy="75">
          <animate attributeName="cx" values="45;55;45" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="75;65;75" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle className="particle-dot" r="0.5" cx="70" cy="60">
          <animate attributeName="cx" values="70;60;70" dur="9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="60;70;60" dur="9s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      <div className="container">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-glitch="Rick And Morty">Rick And Morty</h1>
        </div>

        <div className="container-titleAndNavbar animate__animated animate__fadeInDown">
          <Navbar page={page} setPage={setPage} />
        </div>

        <div className="animation-switch-container">
          <label className="animation-switch">
            <input 
              type="checkbox" 
              checked={animationsEnabled}
              onChange={toggleAnimations}
            />
            <span className="animation-slider"></span>
            <span className="animation-label">Animaciones</span>
            <div className={`animation-status-indicator ${animationsEnabled ? 'active' : 'inactive'}`}></div>
          </label>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Cargando Personajes...</p>
          </div>
        ) : (
          <>
            <div className={`personajesContainer animate__animated animate__fadeInUp ${!animationsEnabled ? 'animations-disabled' : ''}`}>
              {personajes.map((personaje) => (
                <Personaje 
                  key={personaje.id} 
                  name={personaje.name} 
                  status={personaje.status} 
                  species={personaje.species}
                  image={personaje.image}
                  gender={personaje.gender}
                  origin={personaje.origin.name}
                  location={personaje.location.name}
                />
              ))}
            </div>
            <Navbar page={page} setPage={setPage} />
          </>
        )}
      </div>
    </>
  );
}

export default ListaPersonajes;
