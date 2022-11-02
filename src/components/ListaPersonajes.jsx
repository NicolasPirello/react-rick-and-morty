import { useState, useEffect } from "react";
import Personaje from "./Personaje"
import Navbar from "./Navbar"

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [ page, setPage ] = useState(1)

  useEffect(() => {
    /* Creamos una funcion para contener el await, cuya funcion debe ser async */

    async function fetchDate() {
      /* Las respuestas al ser una promesa deben tener el await */
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await response.json();
      setPersonajes(data.results);
    }

    fetchDate();
  }, [page] ); /* Monitoreamos si el boton de NavBar cambio el numero de PAGE */

  return (

    <div className="container">

        <div class="glitch-wrapper">
          <div class="glitch" data-glitch="Rick And Morty">Rick And Morty</div>
        </div>

        <div className="container-titleAndNavbar animate__animated animate__fadeInDown">
          
            <h1>Rick And Morty</h1>

            <Navbar
                page={page}
                setPage={setPage}
            />

        </div>

        <div className="personajesContainer animate__animated animate__fadeInUp">

            { personajes.map( (personaje) => {

            return (

                <Personaje 
                    key={personaje.id} 
                    name={personaje.name} 
                    status= {personaje.status} 
                    species = {personaje.species}
                    image = {personaje.image}
                    gender = {personaje.gender}
                    origin = {personaje.origin.name}
                    location = {personaje.location.name}
                />
                
            );
            })}

        </div>

        <Navbar
                page={page}
                setPage={setPage}
        />

    </div>

  );

}

export default ListaPersonajes;
