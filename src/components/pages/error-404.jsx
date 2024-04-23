import React from 'react';
import './error-404.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <img src="https://www.piensasolutions.com/blog/file/uploads/2023/09/Mesa-de-trabajo-1-100-error-404.jpg" alt="Error 404" className="error-image" />
      <h2 className="error-message">¡Oops! Página no encontrada</h2>
      <p className="error-description">Lo sentimos, parece que la página que estás buscando no existe.</p>
      <Link to="/" className="home-link">Volver al Inicio</Link>
    </div>
  );
};

export default NotFoundPage;
