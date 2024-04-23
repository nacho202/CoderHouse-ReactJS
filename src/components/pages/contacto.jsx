import React from 'react';
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
        <button type="submit" className="enviar-btn">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
