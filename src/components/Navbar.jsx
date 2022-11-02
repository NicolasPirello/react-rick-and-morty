function Navbar ( { page, setPage } ) {
    return(
        <div className="NavbarContainer">
            <div className="Navbar">
                <button onClick={ () => { page > 1 ? setPage( page - 1 ) : 1 } } >Anterior</button>
                <p>Pagina: {page} </p>
                <button onClick={ () => { setPage( page + 1 ) } } >Siguiente</button>
            </div>
        </div>
    )
}

export default Navbar;

