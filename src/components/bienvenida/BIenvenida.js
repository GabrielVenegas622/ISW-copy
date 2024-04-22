import React from 'react';
import './Bienvenida.css'; // Asegúrate de tener un archivo CSS para los estilos

const Bienvenida = () => {
  const user = localStorage.getItem("token");
  const rol = localStorage.getItem("role");
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");

  return (
    <div className="bienvenida-container">
      <h1 className="titulo">Bienvenido a Financiera La Clave {nombre} {apellido}</h1>
      <p className="descripcion">Tu socio financiero confiable</p>
    </div>
  );
};

export default Bienvenida;