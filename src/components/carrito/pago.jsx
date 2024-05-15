// Pago.jsx

import React, { useState } from 'react';
import './pago.css';

const Pago = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la acción de pago, como enviar la información a tu backend
    // O simplemente mostrar un mensaje de confirmación
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="pago-container3">
      <h2>Proceder al Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group2">
          <label htmlFor="cardNumber">Número de tarjeta:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>
        <div className="form-group2">
          <label htmlFor="cardName">Nombre del propietario de la tarjeta:</label>
          <input type="text" id="cardName" name="cardName" required />
        </div>
        <div className="form-group2">
          <label htmlFor="expiryDate">Fecha de caducidad:</label>
          <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" required />
        </div>
        <div className="form-group2">
          <label htmlFor="securityCode">Código de seguridad:</label>
          <input type="text" id="securityCode" name="securityCode" required />
        </div>
        <div className="form-group2">
          <label htmlFor="country">País del comprador:</label>
          <input type="text" id="country" name="country" required />
        </div>
        <div className="form-group2">
          <label htmlFor="address">Dirección del comprador:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group2">
          <label htmlFor="zipCode">Código postal:</label>
          <input type="text" id="zipCode" name="zipCode" required />
        </div>
        <button type="submit" className='boton-pagar'>Pagar</button>
      </form>

      {showConfirmation && (
        <div className="mensaje-container">
          <span className="boton-cerrar" onClick={handleCloseConfirmation}>X</span>
          <p className="mensaje-texto">¡Gracias por tu compra! El producto te estará llegando en los próximos días a la dirección que colocaste.</p>
          <button className="boton-volver" onClick={() => window.location.href = '/'}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
};

export default Pago;
