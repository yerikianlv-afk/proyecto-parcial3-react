import { useEffect, useState } from "react";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setUsuarios(data);
      });

  }, []);

  return (
    <div className="page">

      <h1>Usuarios</h1>

      {usuarios.map((usuario) => (

        <div
          key={usuario.id}
          className="card"
        >

          <h3>{usuario.name}</h3>

          <p>{usuario.email}</p>

          <p>{usuario.phone}</p>

        </div>

      ))}

    </div>
  );
};

export default Usuarios;