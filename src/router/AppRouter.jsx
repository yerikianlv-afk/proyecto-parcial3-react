import Usuarios from "../pages/Usuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Feed from "../pages/Feed";
import Perfil from "../pages/Perfil";
import Explorar from "../pages/Explorar";
import Mensajes from "../pages/Mensajes";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/mensajes" element={<Mensajes />} />

        
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;