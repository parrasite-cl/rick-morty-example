import { useState } from "react";
import reactLogo from "./assets/react.svg";

import logo from "./assets/img/rick-morty.png";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    console.log(characterApi);
    setCharacters(characterApi.results);
  };
  console.log(characters);
  return (
    <>
      <header>
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            {" "}
            <img src={logo} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </>
  );
}

export default App;
