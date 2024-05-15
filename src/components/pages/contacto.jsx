import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import './contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <form action="#" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="pregunta">Pregunta:</label>
          <textarea id="pregunta" name="pregunta" rows="4" required></textarea>
        </div>
        {/* Cambiar el botón por un Link */}
        <Link to="/contactado" className="enviar-btn">Enviar</Link>
      </form>
    </div>
  );
};

export default Contacto;
