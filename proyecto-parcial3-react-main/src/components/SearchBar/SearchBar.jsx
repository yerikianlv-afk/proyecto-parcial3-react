import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, placeholder, resultados, mostrarResultados }) => {
  const [termino, setTermino] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim() && onSearch) {
      onSearch(termino);
    }
  };

  const handleClear = () => {
    setTermino("");
    if (onSearch) onSearch("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-bar__form">
        <div className="search-bar__input-container">
          <span className="search-bar__icon">[BUSCAR]</span>
          <input
            type="text"
            className="search-bar__input"
            placeholder={placeholder || "Buscar usuarios, publicaciones..."}
            value={termino}
            onChange={(e) => setTermino(e.target.value)}
          />
          {termino && (
            <button
              type="button"
              className="search-bar__clear"
              onClick={handleClear}
            >
              [X]
            </button>
          )}
        </div>
        <button type="submit" className="search-bar__submit">
          Buscar
        </button>
      </form>
      
      {mostrarResultados && termino && (
        <div className="search-bar__resultados">
          {resultados && resultados.length > 0 ? (
            <ul className="search-bar__lista">
              {resultados.map((resultado, index) => (
                <li key={index} className="search-bar__item">
                  {resultado}
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-bar__vacio">No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;