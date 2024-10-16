import { Route, Routes } from "react-router-dom";


import { LibroCrear } from "../../componentes/libros/LibroCrear";
import { LibroListar } from "../../componentes/libros/LibroListar";
import { LibroAdmin } from "../../componentes/libros/LibroAdmin";
import { LibroActualizar } from "../../componentes/libros/LibroActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { Inicio } from "../../componentes/contenedor/inicio";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/Libcre" element={<LibroCrear />} />
      <Route path="/Liblis" element={<LibroListar />} />
      <Route path="/Libadm" element={<LibroAdmin />} />

      <Route path="/Libact/:codigo" element={<LibroActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
