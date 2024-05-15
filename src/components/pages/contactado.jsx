import React from 'react';
import { Link } from 'react-router-dom';
import './contactado.css'; 

const Contactado = () => {
  return (
    <div className="thank-you-page">
      {/* Imagen */}
      <img src="https://static-00.iconduck.com/assets.00/mail-icon-2048x1675-emuq24or.png" alt="Gracias" className="thank-you-image" />

      {/* Mensaje de agradecimiento */}
      <div className="thank-you-message">
        <h2>Gracias por contactarnos</h2>
        <p>En breve te contestaremos por el correo electrónico que nos proporcionaste.</p>
      </div>

      {/* Botón para volver a inicio */}
      <Link to="/" className="return-home-btn">Volver a Inicio</Link>
    </div>
  );
};

export default Contactado;
