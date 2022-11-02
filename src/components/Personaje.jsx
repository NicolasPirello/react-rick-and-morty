function Personaje ( { name, image, status, gender, origin, location, species } ) {

    return(

        <div className="personajeContainer">

            <div className="personajeImageContainer">
                <img src={image} alt={name} />
            </div>

            <h2>{name}</h2>

            <div className="personajeContainer-data">
                <p>Estado:</p>
                <p>{status}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Especie:</p>
                <p>{species}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Sexo:</p>
                <p>{gender}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Origen:</p>
                <p>{origin}</p>
            </div>

            <div className="personajeContainer-data">
                <p>Ultima Ubicacion:</p>
                <p>{location}</p>
            </div>

        </div>

    )

}

export default Personaje;