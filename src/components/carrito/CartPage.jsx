import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container2">
        <h2 className="cart-title">Carrito de Compras</h2>
        <div className="cart-items">
          <div className="cart-item">
            <img src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2023/8/x-br/20231009-Travis-Scott-Nike-Air-Jordan-Golf-Shoe3.jpg.rend.hgtvcom.966.966.suffix/1696888815021.jpeg" alt="Product" className="product-image" />
            <div className="product-details">
              <h3 className="product-title">Air Jordan 1 Low Golf Travis Scott</h3>
              <p className="product-price">$211.00</p>
              <div className="quantity-control">
                <button className="quantity-btn" onClick={handleDecreaseQuantity}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={handleIncreaseQuantity}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Resumen del Pedido</h3>
          <p>Total: $211.00</p>
          <button className="checkout-btn">Proceder al Pago</button>
        </div>
      </div>
      <div className="payment-methods">
        <h3 className="payment-title">Métodos de Pago Aceptados</h3>
        <div className="payment-icons">
          <img src="https://www.creditoregional.com.ar/CRInstitucional/assets/images/2000px-mastercard-logo-436x340.png" alt="Mastercard" />
          <img src="https://www.visa.com.ar/content/dam/VCOM/global/about-visa/images/visa-brandmark-blue-1960x622.png" alt="Visa" />
          <img src="https://economipedia.com/wp-content/uploads/ventajas-y-desventajas-de-paypal.png" alt="PayPal" />
          <img src="https://www.sitepro.com.ar/web/wp-content/uploads/2022/08/Mercado-pago-1024x267.png" alt="Mercado Pago" />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
