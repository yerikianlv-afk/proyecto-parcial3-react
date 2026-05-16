import { useEffect, useState } from "react";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    const getUsuarios = async () => {

      try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("No se pudieron obtener los usuarios");
        }

        const data = await response.json();

        setUsuarios(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    getUsuarios();

  }, []);

  return (
    <div className="page">

      <h1>Usuarios</h1>

      {loading && <p>Cargando usuarios...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        usuarios.map((usuario) => (

          <div
            key={usuario.id}
            className="card"
          >

            <h3>{usuario.name}</h3>

            <p>{usuario.email}</p>

            <p>{usuario.phone}</p>

          </div>

        ))
      )}

    </div>
  );
};

export default Usuarios;