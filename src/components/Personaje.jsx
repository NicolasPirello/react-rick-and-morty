function Personaje ( { name, image, status, gender, origin, location, species } ) {

    // Función para traducir valores desconocidos y estados
    const traducirValor = (valor) => {
        const traducciones = {
            "unknown": "Desconocido",
            "Dead": "Muerto",
            "Alive": "Vivo",
            "Male": "Masculino",
            "Female": "Femenino"
        };
        return traducciones[valor] || valor;
    };

    return(

        <div className="personajeContainer">

            <div className="personajeImageContainer">
                <img src={image} alt={name} />
            </div>

            <h2>{name}</h2>

            <div className="personajeContainer-data">
                <p>Estado:</p>
                <p>{traducirValor(status)}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Especie:</p>
                <p>{traducirValor(species)}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Sexo:</p>
                <p>{traducirValor(gender)}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Origen:</p>
                <p>{traducirValor(origin)}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Ultima Ubicacion:</p>
                <p>{traducirValor(location)}</p>
            </div>

        </div>

    )

}

export default Personaje;