import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import UserCard from "../components/UserCard/UserCard";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Explorar.css";

const usuarios = [
  { username: "yerik", nombre: "Yerik", seguidores: 120 },
  { username: "carlos", nombre: "Carlos", seguidores: 95 },
  { username: "christian", nombre: "Christian", seguidores: 80 }
];

function Explorar() {
  const [busqueda, setBusqueda] = useState("");
  const [amigos, setAmigos] = useState([]);

  const handleSearch = (termino) => {
    setBusqueda(termino);
  };

  const toggleFollow = (username) => {
    if (amigos.includes(username)) {
      setAmigos(amigos.filter(u => u !== username));
    } else {
      setAmigos([...amigos, username]);
    }
  };

  const resultados = usuarios.filter(u =>
    u.username.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="page">
        <div className="page__heading">
          <h1>Explorar</h1>
          <p>Buscar usuarios</p>
        </div>

        {/* 🔥 SearchBar reemplaza el input */}
        <div className="card">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Buscar usuario..."
          />
        </div>

        <div className="grid-cards">
          {resultados.length === 0 ? (
            <p>No hay resultados</p>
          ) : (
            resultados.map((u) => (
              <UserCard
                key={u.username}
                username={u.username}
                nombre={u.nombre}
                seguidores={u.seguidores}
                esAmigo={amigos.includes(u.username)}
                onFollow={() => toggleFollow(u.username)}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Explorar;