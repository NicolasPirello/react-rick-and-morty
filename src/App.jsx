import { useState, useEffect } from "react";
import ListaPersonajes from "./components/ListaPersonajes"
import Personajes from "./components/Personaje"
import "./App.css"

function App() {

  return (
    <div className="App">
      <ListaPersonajes />
    </div>
  );
}

export default App;
